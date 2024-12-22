:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phenomis'
.. highlight: bash

bioconductor-phenomis
=====================

.. conda:recipe:: bioconductor-phenomis
   :replaces_section_title:
   :noindex:

   Postprocessing and univariate analysis of omics data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/phenomis.html
   :license: CeCILL
   :recipe: /`bioconductor-phenomis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenomis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phenomis/meta.yaml>`_

   The \'phenomis\' package provides methods to perform post\-processing \(i.e. quality control and normalization\) as well as univariate statistical analysis of single and multi\-omics data sets. These methods include quality control metrics\, signal drift and batch effect correction\, intensity transformation\, univariate hypothesis testing\, but also clustering \(as well as annotation of metabolomics data\). The data are handled in the standard Bioconductor formats \(i.e. SummarizedExperiment and MultiAssayExperiment for single and multi\-omics datasets\, respectively\; the alternative ExpressionSet and MultiDataSet formats are also supported for convenience\). As a result\, all methods can be readily chained as workflows. The pipeline can be further enriched by multivariate analysis and feature selection\, by using the \'ropls\' and \'biosigner\' packages\, which support the same formats. Data can be conveniently imported from and exported to text files. Although the methods were initially targeted to metabolomics data\, most of the methods can be applied to other types of omics data \(e.g.\, transcriptomics\, proteomics\).


.. conda:package:: bioconductor-phenomis

   |downloads_bioconductor-phenomis| |docker_bioconductor-phenomis|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biodb: ``>=1.14.0,<1.15.0``
   :depends bioconductor-biodbchebi: ``>=1.12.0,<1.13.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-multiassayexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-multidataset: ``>=1.34.0,<1.35.0``
   :depends bioconductor-ropls: ``>=1.38.0,<1.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-htmlwidgets: 
   :depends r-igraph: 
   :depends r-plotly: 
   :depends r-pmcmrplus: 
   :depends r-ranger: 
   :depends r-rcolorbrewer: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-venndiagram: 
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

      mamba install bioconductor-phenomis

   and update with::

      mamba update bioconductor-phenomis

  To create a new environment, run::

      mamba create --name myenvname bioconductor-phenomis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phenomis:<tag>

   (see `bioconductor-phenomis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phenomis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phenomis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phenomis
   :alt:   (downloads)
.. |docker_bioconductor-phenomis| image:: https://quay.io/repository/biocontainers/bioconductor-phenomis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phenomis
.. _`bioconductor-phenomis/tags`: https://quay.io/repository/biocontainers/bioconductor-phenomis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phenomis";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phenomis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phenomis/README.html