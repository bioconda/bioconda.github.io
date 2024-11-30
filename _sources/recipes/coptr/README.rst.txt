:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coptr'
.. highlight: bash

coptr
=====

.. conda:recipe:: coptr
   :replaces_section_title:
   :noindex:

   Accurate and robust inference of microbial growth dynamics from metagenomic sequencing reads.

   :homepage: https://github.com/tyjo/coptr
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`coptr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coptr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coptr/meta.yaml>`_

   


.. conda:package:: coptr

   |downloads_coptr| |docker_coptr|

   :versions:
      
      

      ``1.1.4-3``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``

      

   
   :depends bowtie2: ``>=2.4.1``
   :depends matplotlib-base: ``>=3.3.2``
   :depends numpy: ``>=1.19.1,<=1.24.4``
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.7,<=3.8``
   :depends scipy: ``>=1.5.2,<2.0.0``
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

      mamba install coptr

   and update with::

      mamba update coptr

  To create a new environment, run::

      mamba create --name myenvname coptr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coptr:<tag>

   (see `coptr/tags`_ for valid values for ``<tag>``)


.. |downloads_coptr| image:: https://img.shields.io/conda/dn/bioconda/coptr.svg?style=flat
   :target: https://anaconda.org/bioconda/coptr
   :alt:   (downloads)
.. |docker_coptr| image:: https://quay.io/repository/biocontainers/coptr/status
   :target: https://quay.io/repository/biocontainers/coptr
.. _`coptr/tags`: https://quay.io/repository/biocontainers/coptr?tab=tags


.. raw:: html

    <script>
        var package = "coptr";
        var versions = ["1.1.4","1.1.4","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coptr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coptr/README.html