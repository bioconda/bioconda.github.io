:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geosubmission'
.. highlight: bash

bioconductor-geosubmission
==========================

.. conda:recipe:: bioconductor-geosubmission
   :replaces_section_title:
   :noindex:

   Prepares microarray data for submission to GEO

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/GEOsubmission.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-geosubmission <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geosubmission>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geosubmission/meta.yaml>`_
   :links: biotools: :biotools:`geosubmission`, doi: :doi:`10.1038/nmeth.3252`

   Helps to easily submit a microarray dataset and the associated sample information to GEO by preparing a single file for upload \(direct deposit\).


.. conda:package:: bioconductor-geosubmission

   |downloads_bioconductor-geosubmission| |docker_bioconductor-geosubmission|

   :versions:
      
      

      ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``

      

   
   :depends bioconductor-affy: ``>=1.70.0,<1.71.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geosubmission

   and update with::

      conda update bioconductor-geosubmission

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geosubmission:<tag>

   (see `bioconductor-geosubmission/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geosubmission| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geosubmission.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geosubmission
   :alt:   (downloads)
.. |docker_bioconductor-geosubmission| image:: https://quay.io/repository/biocontainers/bioconductor-geosubmission/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geosubmission
.. _`bioconductor-geosubmission/tags`: https://quay.io/repository/biocontainers/bioconductor-geosubmission?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geosubmission/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geosubmission/README.html