:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-structtoolbox'
.. highlight: bash

bioconductor-structtoolbox
==========================

.. conda:recipe:: bioconductor-structtoolbox
   :replaces_section_title:
   :noindex:

   Data processing \& analysis tools for Metabolomics and other omics

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/structToolbox.html
   :license: GPL-3
   :recipe: /`bioconductor-structtoolbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structtoolbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structtoolbox/meta.yaml>`_

   An extensive set of data \(pre\-\)processing and analysis methods and tools for metabolomics and other omics\, with a strong emphasis on statistics and machine learning. This toolbox allows the user to build extensive and standardised workflows for data analysis. The methods and tools have been implemented using class\-based templates provided by the struct \(Statistics in R Using Class\-based Templates\) package. The toolbox includes pre\-processing methods \(e.g. signal drift and batch correction\, normalisation\, missing value imputation and scaling\)\, univariate \(e.g. ttest\, various forms of ANOVA\, Kruskal–Wallis test and more\) and multivariate statistical methods \(e.g. PCA and PLS\, including cross\-validation and permutation testing\) as well as machine learning methods \(e.g. Support Vector Machines\). The STATistics Ontology \(STATO\) has been integrated and implemented to provide standardised definitions for the different methods\, inputs and outputs.


.. conda:package:: bioconductor-structtoolbox

   |downloads_bioconductor-structtoolbox| |docker_bioconductor-structtoolbox|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-struct: ``>=1.4.0,<1.5.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-ggthemes: 
   :depends r-gridextra: 
   :depends r-scales: 
   :depends r-sp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-structtoolbox

   and update with::

      conda update bioconductor-structtoolbox

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-structtoolbox:<tag>

   (see `bioconductor-structtoolbox/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-structtoolbox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-structtoolbox.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-structtoolbox
   :alt:   (downloads)
.. |docker_bioconductor-structtoolbox| image:: https://quay.io/repository/biocontainers/bioconductor-structtoolbox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-structtoolbox
.. _`bioconductor-structtoolbox/tags`: https://quay.io/repository/biocontainers/bioconductor-structtoolbox?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-structtoolbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-structtoolbox/README.html