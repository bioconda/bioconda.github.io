:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hiergwas'
.. highlight: bash

bioconductor-hiergwas
=====================

.. conda:recipe:: bioconductor-hiergwas
   :replaces_section_title:

   Asessing statistical significance in predictive GWA studies

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/hierGWAS.html
   :license: GPL-3
   :recipe: /`bioconductor-hiergwas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiergwas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiergwas/meta.yaml>`_

   Testing individual SNPs\, as well as arbitrarily large groups of SNPs in GWA studies\, using a joint model of all SNPs. The method controls the FWER\, and provides an automatic\, data\-driven refinement of the SNP clusters to smaller groups or single markers.


.. conda:package:: bioconductor-hiergwas

   |downloads_bioconductor-hiergwas| |docker_bioconductor-hiergwas|

   :versions: 1.18.0-0, 1.16.0-0, 1.14.0-1, 1.14.0-0, 1.12.0-1, 1.12.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-fastcluster: 
   :depends r-fmsb: 
   :depends r-glmnet: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hiergwas

   and update with::

      conda update bioconductor-hiergwas

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hiergwas:<tag>

   (see `bioconductor-hiergwas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hiergwas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hiergwas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hiergwas
   :alt:   (downloads)
.. |docker_bioconductor-hiergwas| image:: https://quay.io/repository/biocontainers/bioconductor-hiergwas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hiergwas
.. _`bioconductor-hiergwas/tags`: https://quay.io/repository/biocontainers/bioconductor-hiergwas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hiergwas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hiergwas/README.html