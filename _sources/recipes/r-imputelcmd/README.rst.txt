:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-imputelcmd'
.. highlight: bash

r-imputelcmd
============

.. conda:recipe:: r-imputelcmd
   :replaces_section_title:
   :noindex:

   The package contains a collection of functions for left\-censored missing data imputation. Left\-censoring is a special case of missing not at random \(MNAR\)  mechanism that generates non\-responses in proteomics experiments. The package also contains functions to artificially generate peptide\/protein expression data \(log\-transformed\) as random draws from a multivariate Gaussian distribution as well as a function to generate missing data \(both randomly and non\-randomly\). For comparison reasons\, the package also contains several wrapper functions for the imputation of non\-responses that are missing at random. \* New functionality has been added\: a hybrid method that allows the imputation of missing values in a more complex scenario where the missing data are both MAR and MNAR.

   :homepage: https://CRAN.R-project.org/package=imputeLCMD
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-imputelcmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-imputelcmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-imputelcmd/meta.yaml>`_

   


.. conda:package:: r-imputelcmd

   |downloads_r-imputelcmd| |docker_r-imputelcmd|

   :versions:
      
      

      ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends bioconductor-impute: 
   :depends bioconductor-pcamethods: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-norm: 
   :depends r-tmvtnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-imputelcmd

   and update with::

      conda update r-imputelcmd

   or use the docker container::

      docker pull quay.io/biocontainers/r-imputelcmd:<tag>

   (see `r-imputelcmd/tags`_ for valid values for ``<tag>``)


.. |downloads_r-imputelcmd| image:: https://img.shields.io/conda/dn/bioconda/r-imputelcmd.svg?style=flat
   :target: https://anaconda.org/bioconda/r-imputelcmd
   :alt:   (downloads)
.. |docker_r-imputelcmd| image:: https://quay.io/repository/biocontainers/r-imputelcmd/status
   :target: https://quay.io/repository/biocontainers/r-imputelcmd
.. _`r-imputelcmd/tags`: https://quay.io/repository/biocontainers/r-imputelcmd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-imputelcmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-imputelcmd/README.html