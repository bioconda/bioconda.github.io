:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-papi'
.. highlight: bash

bioconductor-papi
=================

.. conda:recipe:: bioconductor-papi
   :replaces_section_title:

   The Pathway Activity Profiling \- PAPi \- is an R package for predicting the activity of metabolic pathways based solely on a metabolomics data set containing a list of metabolites identified and their respective abundances in different biological samples. PAPi generates hypothesis that improves the final biological interpretation. See Aggio\, R.B.M\; Ruggiero\, K. and Villas\-Boas\, S.G. \(2010\) \- Pathway Activity Profiling \(PAPi\)\: from metabolite profile to metabolic pathway activity. Bioinformatics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PAPi.html
   :license: GPL(>= 2)
   :recipe: /`bioconductor-papi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-papi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-papi/meta.yaml>`_
   :links: biotools: :biotools:`papi`, doi: :doi:`10.1093/bioinformatics/btq567`

   


.. conda:package:: bioconductor-papi

   |downloads_bioconductor-papi| |docker_bioconductor-papi|

   :versions: 1.22.0-0, 1.20.0-0, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-keggrest: >=1.22.0,<1.23.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-svdialogs: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-papi

   and update with::

      conda update bioconductor-papi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-papi:<tag>

   (see `bioconductor-papi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-papi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-papi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-papi| image:: https://quay.io/repository/biocontainers/bioconductor-papi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-papi
.. _`bioconductor-papi/tags`: https://quay.io/repository/biocontainers/bioconductor-papi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-papi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-papi/README.html