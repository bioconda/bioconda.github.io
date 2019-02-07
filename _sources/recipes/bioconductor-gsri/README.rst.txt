.. title:: Package Recipe 'bioconductor-gsri'
.. highlight: bash


bioconductor-gsri
=================

.. conda:recipe:: bioconductor-gsri
   :replaces_section_title:

   The GSRI package estimates the number of differentially expressed genes in gene sets\, utilizing the concept of the Gene Set Regulation Index \(GSRI\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GSRI.html
   :license: GPL-3
   :recipe: /`bioconductor-gsri <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsri>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsri/meta.yaml>`_
   :links: biotools: :biotools:`gsri`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-gsri

   |downloads_bioconductor-gsri| |docker_bioconductor-gsri|

   :versions: 2.30.0, 2.28.0, 2.26.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-gseabase` >=1.44.0,<1.45.0 :conda:package:`bioconductor-les` >=1.32.0,<1.33.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fdrtool`  

   :required~by: |required_by_bioconductor-gsri|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsri

   and update with::

      conda update bioconductor-gsri

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gsri


.. |required_by_bioconductor-gsri| conda:required_by:: bioconductor-gsri
.. |downloads_bioconductor-gsri| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsri.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gsri| image:: https://quay.io/repository/biocontainers/bioconductor-gsri/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsri







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsri/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsri/README.html

