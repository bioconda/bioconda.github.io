:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylgsa'
.. highlight: bash

bioconductor-methylgsa
======================

.. conda:recipe:: bioconductor-methylgsa
   :replaces_section_title:
   :noindex:

   Gene Set Analysis Using the Outcome of Differential Methylation

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/methylGSA.html
   :license: GPL-2
   :recipe: /`bioconductor-methylgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylgsa/meta.yaml>`_

   The main functions for methylGSA are methylglm and methylRRA. methylGSA implements logistic regression adjusting number of probes as a covariate. methylRRA adjusts multiple p\-values of each gene by Robust Rank Aggregation. For more detailed help information\, please see the vignette.


.. conda:package:: bioconductor-methylgsa

   |downloads_bioconductor-methylgsa| |docker_bioconductor-methylgsa|

   :versions:
      
      

      ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.3-0``,  ``1.0.2-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.50.0,<1.51.0``
   :depends bioconductor-biocparallel: ``>=1.22.0,<1.23.0``
   :depends bioconductor-clusterprofiler: ``>=3.16.0,<3.17.0``
   :depends bioconductor-go.db: ``>=3.11.0,<3.12.0``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-missmethyl: ``>=1.22.0,<1.23.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.11.0,<3.12.0``
   :depends bioconductor-reactome.db: ``>=1.70.0,<1.71.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-robustrankaggreg: 
   :depends r-shiny: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylgsa

   and update with::

      conda update bioconductor-methylgsa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylgsa:<tag>

   (see `bioconductor-methylgsa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylgsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylgsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylgsa
   :alt:   (downloads)
.. |docker_bioconductor-methylgsa| image:: https://quay.io/repository/biocontainers/bioconductor-methylgsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylgsa
.. _`bioconductor-methylgsa/tags`: https://quay.io/repository/biocontainers/bioconductor-methylgsa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylgsa/README.html