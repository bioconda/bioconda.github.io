:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affyexpress'
.. highlight: bash

bioconductor-affyexpress
========================

.. conda:recipe:: bioconductor-affyexpress
   :replaces_section_title:
   :noindex:

   Affymetrix Quality Assessment and Analysis Tool

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/AffyExpress.html
   :license: LGPL
   :recipe: /`bioconductor-affyexpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyexpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyexpress/meta.yaml>`_
   :links: biotools: :biotools:`affyexpress`, doi: :doi:`10.1038/nmeth.3252`

   The purpose of this package is to provide a comprehensive and easy\-to\-use tool for quality assessment and to identify differentially expressed genes in the Affymetrix gene expression data.


.. conda:package:: bioconductor-affyexpress

   |downloads_bioconductor-affyexpress| |docker_bioconductor-affyexpress|

   :versions:
      
      

      ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``

      

   
   :depends bioconductor-affy: ``>=1.68.0,<1.69.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affyexpress

   and update with::

      conda update bioconductor-affyexpress

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affyexpress:<tag>

   (see `bioconductor-affyexpress/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affyexpress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affyexpress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affyexpress
   :alt:   (downloads)
.. |docker_bioconductor-affyexpress| image:: https://quay.io/repository/biocontainers/bioconductor-affyexpress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affyexpress
.. _`bioconductor-affyexpress/tags`: https://quay.io/repository/biocontainers/bioconductor-affyexpress?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affyexpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affyexpress/README.html