.. title:: Package Recipe 'bioconductor-proteomm'
.. highlight: bash


bioconductor-proteomm
=====================

.. conda:recipe:: bioconductor-proteomm
   :replaces_section_title:

   ProteoMM is a statistical method to perform model\-based peptide\-level differential expression analysis of single or multiple datasets. For multiple datasets ProteoMM produces a single fold change and p\-value for each protein across multiple datasets. ProteoMM provides functionality for normalization\, missing value imputation and differential expression. Model\-based peptide\-level imputation and differential expression analysis component of package follows the analysis described in “A statistical framework for protein quantitation in bottom\-up MS based proteomics\" \(Karpievitch et al. Bioinformatics 2009\). EigenMS normalisation is implemented as described in \"Normalization of peak intensities in bottom\-up MS\-based proteomics using singular value decomposition.\" \(Karpievitch et al. Bioinformatics 2009\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ProteoMM.html
   :license: MIT
   :recipe: /`bioconductor-proteomm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteomm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-proteomm/meta.yaml>`_

   


.. conda:package:: bioconductor-proteomm

   |downloads_bioconductor-proteomm| |docker_bioconductor-proteomm|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gdata`  :conda:package:`r-ggplot2`  :conda:package:`r-ggrepel`  :conda:package:`r-gtools`  :conda:package:`r-matrixstats`  

   :required~by: |required_by_bioconductor-proteomm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-proteomm

   and update with::

      conda update bioconductor-proteomm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-proteomm


.. |required_by_bioconductor-proteomm| conda:required_by:: bioconductor-proteomm
.. |downloads_bioconductor-proteomm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-proteomm.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-proteomm| image:: https://quay.io/repository/biocontainers/bioconductor-proteomm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-proteomm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-proteomm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-proteomm/README.html

