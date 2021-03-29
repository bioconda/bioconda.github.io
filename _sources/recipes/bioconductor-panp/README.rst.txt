:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-panp'
.. highlight: bash

bioconductor-panp
=================

.. conda:recipe:: bioconductor-panp
   :replaces_section_title:
   :noindex:

   Presence\-Absence Calls from Negative Strand Matching Probesets

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/panp.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-panp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panp/meta.yaml>`_
   :links: biotools: :biotools:`panp`, doi: :doi:`10.1109/BIBE.2007.4375552`

   A function to make gene presence\/absence calls based on distance from negative strand matching probesets \(NSMP\) which are derived from Affymetrix annotation. PANP is applied after gene expression values are created\, and therefore can be used after any preprocessing method such as MAS5 or GCRMA\, or PM\-only methods like RMA. NSMP sets have been established for the HGU133A and HGU133\-Plus\-2.0 chipsets to date.


.. conda:package:: bioconductor-panp

   |downloads_bioconductor-panp| |docker_bioconductor-panp|

   :versions:
      
      

      ``1.60.0-1``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      

   
   :depends bioconductor-affy: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-panp

   and update with::

      conda update bioconductor-panp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-panp:<tag>

   (see `bioconductor-panp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-panp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-panp
   :alt:   (downloads)
.. |docker_bioconductor-panp| image:: https://quay.io/repository/biocontainers/bioconductor-panp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panp
.. _`bioconductor-panp/tags`: https://quay.io/repository/biocontainers/bioconductor-panp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panp/README.html