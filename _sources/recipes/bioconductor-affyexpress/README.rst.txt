.. title:: Package Recipe 'bioconductor-affyexpress'
.. highlight: bash


bioconductor-affyexpress
========================

.. conda:recipe:: bioconductor-affyexpress
   :replaces_section_title:

   The purpose of this package is to provide a comprehensive and easy\-to\-use tool for quality assessment and to identify differentially expressed genes in the Affymetrix gene expression data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/AffyExpress.html
   :license: LGPL
   :recipe: /`bioconductor-affyexpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyexpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyexpress/meta.yaml>`_
   :links: biotools: :biotools:`affyexpress`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-affyexpress

   |downloads_bioconductor-affyexpress| |docker_bioconductor-affyexpress|

   :versions: 1.48.0, 1.46.0, 1.44.0, 1.42.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-affyexpress|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affyexpress

   and update with::

      conda update bioconductor-affyexpress

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-affyexpress


.. |required_by_bioconductor-affyexpress| conda:required_by:: bioconductor-affyexpress
.. |downloads_bioconductor-affyexpress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affyexpress.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-affyexpress| image:: https://quay.io/repository/biocontainers/bioconductor-affyexpress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affyexpress







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affyexpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affyexpress/README.html

