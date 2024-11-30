:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libgenome'
.. highlight: bash

libgenome
=========

.. conda:recipe:: libgenome
   :replaces_section_title:
   :noindex:

   A C\+\+ development library designed to make common operations on DNA and protein sequences easy. libGenome provides functionality to read\, write\, and manipulate sequence and annotation data in several file formats.

   :homepage: http://darlinglab.org/mauve/
   :license: GPL / GPL-2.0
   :recipe: /`libgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgenome/meta.yaml>`_

   


.. conda:package:: libgenome

   |downloads_libgenome| |docker_libgenome|

   :versions:
      
      

      ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install libgenome

   and update with::

      mamba update libgenome

  To create a new environment, run::

      mamba create --name myenvname libgenome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libgenome:<tag>

   (see `libgenome/tags`_ for valid values for ``<tag>``)


.. |downloads_libgenome| image:: https://img.shields.io/conda/dn/bioconda/libgenome.svg?style=flat
   :target: https://anaconda.org/bioconda/libgenome
   :alt:   (downloads)
.. |docker_libgenome| image:: https://quay.io/repository/biocontainers/libgenome/status
   :target: https://quay.io/repository/biocontainers/libgenome
.. _`libgenome/tags`: https://quay.io/repository/biocontainers/libgenome?tab=tags


.. raw:: html

    <script>
        var package = "libgenome";
        var versions = ["1.3.1","1.3.1","1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libgenome/README.html