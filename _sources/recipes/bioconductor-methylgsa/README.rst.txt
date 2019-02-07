.. title:: Package Recipe 'bioconductor-methylgsa'
.. highlight: bash


bioconductor-methylgsa
======================

.. conda:recipe:: bioconductor-methylgsa
   :replaces_section_title:

   The main functions for methylGSA are methylglm and methylRRA. methylGSA implements logistic regression adjusting number of probes as a covariate. methylRRA adjusts multiple p\-values of each gene by Robust Rank Aggregation. For more detailed help information\, please see the vignette.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/methylGSA.html
   :license: GPL-2
   :recipe: /`bioconductor-methylgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylgsa/meta.yaml>`_

   


.. conda:package:: bioconductor-methylgsa

   |downloads_bioconductor-methylgsa| |docker_bioconductor-methylgsa|

   :versions: 1.0.2

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-clusterprofiler` >=3.10.0,<3.11.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19` >=0.6.0,<0.7.0 :conda:package:`bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19` >=0.6.0,<0.7.0 :conda:package:`bioconductor-missmethyl` >=1.16.0,<1.17.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-reactome.db` >=1.66.0,<1.67.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-robustrankaggreg`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-methylgsa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylgsa

   and update with::

      conda update bioconductor-methylgsa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-methylgsa


.. |required_by_bioconductor-methylgsa| conda:required_by:: bioconductor-methylgsa
.. |downloads_bioconductor-methylgsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylgsa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-methylgsa| image:: https://quay.io/repository/biocontainers/bioconductor-methylgsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylgsa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylgsa/README.html

