.. title:: Package Recipe 'bioconductor-hiergwas'
.. highlight: bash


bioconductor-hiergwas
=====================

.. conda:recipe:: bioconductor-hiergwas
   :replaces_section_title:

   Testing individual SNPs\, as well as arbitrarily large groups of SNPs in GWA studies\, using a joint model of all SNPs. The method controls the FWER\, and provides an automatic\, data\-driven refinement of the SNP clusters to smaller groups or single markers.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/hierGWAS.html
   :license: GPL-3
   :recipe: /`bioconductor-hiergwas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiergwas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiergwas/meta.yaml>`_

   


.. conda:package:: bioconductor-hiergwas

   |downloads_bioconductor-hiergwas| |docker_bioconductor-hiergwas|

   :versions: 1.12.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fastcluster`  :conda:package:`r-fmsb`  :conda:package:`r-glmnet`  

   :required~by: |required_by_bioconductor-hiergwas|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hiergwas

   and update with::

      conda update bioconductor-hiergwas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-hiergwas


.. |required_by_bioconductor-hiergwas| conda:required_by:: bioconductor-hiergwas
.. |downloads_bioconductor-hiergwas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hiergwas.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-hiergwas| image:: https://quay.io/repository/biocontainers/bioconductor-hiergwas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hiergwas







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hiergwas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hiergwas/README.html

