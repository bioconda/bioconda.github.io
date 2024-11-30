:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sarc'
.. highlight: bash

bioconductor-sarc
=================

.. conda:recipe:: bioconductor-sarc
   :replaces_section_title:
   :noindex:

   Statistical Analysis of Regions with CNVs

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SARC.html
   :license: GPL-3
   :recipe: /`bioconductor-sarc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sarc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sarc/meta.yaml>`_

   Imports a cov\/coverage file \(normalised read coverages from BAM files\) and a cnv file \(list of CNVs \- similiar to a BED file\) from WES\/ WGS CNV \(copy number variation\) detection pipelines and utilises several metrics to weigh the likelihood of a sample containing a detected CNV being a true CNV or a false positive. Highly useful for diagnostic testing to filter out false positives to provide clinicians with fewer variants to interpret. SARC uniquely only used cov and csv \(similiar to BED file\) files which are the common CNV pipeline calling filetypes\, and can be used as to supplement the Interactive Genome Browser \(IGV\) to generate many figures automatedly\, which can be especially helpful in large cohorts with 100s\-1000s of patients.


.. conda:package:: bioconductor-sarc

   |downloads_bioconductor-sarc| |docker_bioconductor-sarc|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-multtest: ``>=2.58.0,<2.59.0``
   :depends bioconductor-plyranges: ``>=1.22.0,<1.23.0``
   :depends bioconductor-raggedexperiment: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-desctools: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-gtable: 
   :depends r-metap: 
   :depends r-plotly: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-tidyverse: 
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

      mamba install bioconductor-sarc

   and update with::

      mamba update bioconductor-sarc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sarc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sarc:<tag>

   (see `bioconductor-sarc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sarc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sarc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sarc
   :alt:   (downloads)
.. |docker_bioconductor-sarc| image:: https://quay.io/repository/biocontainers/bioconductor-sarc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sarc
.. _`bioconductor-sarc/tags`: https://quay.io/repository/biocontainers/bioconductor-sarc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sarc";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sarc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sarc/README.html