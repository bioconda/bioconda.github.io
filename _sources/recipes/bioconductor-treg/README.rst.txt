:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-treg'
.. highlight: bash

bioconductor-treg
=================

.. conda:recipe:: bioconductor-treg
   :replaces_section_title:
   :noindex:

   Tools for finding Total RNA Expression Genes in single nucleus RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TREG.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-treg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treg/meta.yaml>`_

   RNA abundance and cell size parameters could improve RNA\-seq deconvolution algorithms to more accurately estimate cell type proportions given the different cell type transcription activity levels. A Total RNA Expression Gene \(TREG\) can facilitate estimating total RNA content using single molecule fluorescent in situ hybridization \(smFISH\). We developed a data\-driven approach using a measure of expression invariance to find candidate TREGs in postmortem human brain single nucleus RNA\-seq. This R package implements the method for identifying candidate TREGs from snRNA\-seq data.


.. conda:package:: bioconductor-treg

   |downloads_bioconductor-treg| |docker_bioconductor-treg|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-purrr: 
   :depends r-rafalib: 
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

      mamba install bioconductor-treg

   and update with::

      mamba update bioconductor-treg

  To create a new environment, run::

      mamba create --name myenvname bioconductor-treg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-treg:<tag>

   (see `bioconductor-treg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-treg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-treg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-treg
   :alt:   (downloads)
.. |docker_bioconductor-treg| image:: https://quay.io/repository/biocontainers/bioconductor-treg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-treg
.. _`bioconductor-treg/tags`: https://quay.io/repository/biocontainers/bioconductor-treg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-treg";
        var versions = ["1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-treg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-treg/README.html