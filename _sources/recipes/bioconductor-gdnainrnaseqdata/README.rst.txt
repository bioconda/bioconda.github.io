:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdnainrnaseqdata'
.. highlight: bash

bioconductor-gdnainrnaseqdata
=============================

.. conda:recipe:: bioconductor-gdnainrnaseqdata
   :replaces_section_title:
   :noindex:

   RNA\-seq data with different levels of gDNA contamination

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/gDNAinRNAseqData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdnainrnaseqdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdnainrnaseqdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdnainrnaseqdata/meta.yaml>`_

   Provides access to BAM files generated from RNA\-seq data produced with different levels of gDNA contamination. It currently allows one to download a subset of the data published by Li et al.\, BMC Genomics\, 23\:554\, 2022. This subset of data is formed by BAM files with about 100\,000 alignments with three different levels of gDNA contamination.


.. conda:package:: bioconductor-gdnainrnaseqdata

   |downloads_bioconductor-gdnainrnaseqdata| |docker_bioconductor-gdnainrnaseqdata|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcurl: 
   :depends r-xml: 
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

      mamba install bioconductor-gdnainrnaseqdata

   and update with::

      mamba update bioconductor-gdnainrnaseqdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gdnainrnaseqdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gdnainrnaseqdata:<tag>

   (see `bioconductor-gdnainrnaseqdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gdnainrnaseqdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdnainrnaseqdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdnainrnaseqdata
   :alt:   (downloads)
.. |docker_bioconductor-gdnainrnaseqdata| image:: https://quay.io/repository/biocontainers/bioconductor-gdnainrnaseqdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdnainrnaseqdata
.. _`bioconductor-gdnainrnaseqdata/tags`: https://quay.io/repository/biocontainers/bioconductor-gdnainrnaseqdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdnainrnaseqdata";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdnainrnaseqdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdnainrnaseqdata/README.html