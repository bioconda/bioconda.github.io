:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'denovogear'
.. highlight: bash

denovogear
==========

.. conda:recipe:: denovogear
   :replaces_section_title:
   :noindex:

   A program to detect denovo\-variants using next\-generation sequencing data.

   :homepage: https://github.com/denovogear/denovogear
   :license: GPL3
   :recipe: /`denovogear <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/denovogear>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/denovogear/meta.yaml>`_

   


.. conda:package:: denovogear

   |downloads_denovogear| |docker_denovogear|

   :versions:
      
      

      ``1.1.1-0``

      

   
   :depends boost: 
   :depends eigen: 
   :depends htslib: 
   :depends libgcc: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install denovogear

   and update with::

      mamba update denovogear

  To create a new environment, run::

      mamba create --name myenvname denovogear

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/denovogear:<tag>

   (see `denovogear/tags`_ for valid values for ``<tag>``)


.. |downloads_denovogear| image:: https://img.shields.io/conda/dn/bioconda/denovogear.svg?style=flat
   :target: https://anaconda.org/bioconda/denovogear
   :alt:   (downloads)
.. |docker_denovogear| image:: https://quay.io/repository/biocontainers/denovogear/status
   :target: https://quay.io/repository/biocontainers/denovogear
.. _`denovogear/tags`: https://quay.io/repository/biocontainers/denovogear?tab=tags


.. raw:: html

    <script>
        var package = "denovogear";
        var versions = ["1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/denovogear/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/denovogear/README.html