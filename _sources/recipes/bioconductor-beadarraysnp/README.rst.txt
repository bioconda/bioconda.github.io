:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beadarraysnp'
.. highlight: bash

bioconductor-beadarraysnp
=========================

.. conda:recipe:: bioconductor-beadarraysnp
   :replaces_section_title:
   :noindex:

   Normalization and reporting of Illumina SNP bead arrays

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/beadarraySNP.html
   :license: GPL-2
   :recipe: /`bioconductor-beadarraysnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarraysnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadarraysnp/meta.yaml>`_
   :links: biotools: :biotools:`beadarraysnp`, doi: :doi:`10.1093/bioinformatics/btm311`

   Importing data from Illumina SNP experiments and performing copy number calculations and reports.


.. conda:package:: bioconductor-beadarraysnp

   |downloads_bioconductor-beadarraysnp| |docker_bioconductor-beadarraysnp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-quantsmooth: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-beadarraysnp

   and update with::

      conda update bioconductor-beadarraysnp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-beadarraysnp:<tag>

   (see `bioconductor-beadarraysnp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-beadarraysnp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadarraysnp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beadarraysnp
   :alt:   (downloads)
.. |docker_bioconductor-beadarraysnp| image:: https://quay.io/repository/biocontainers/bioconductor-beadarraysnp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadarraysnp
.. _`bioconductor-beadarraysnp/tags`: https://quay.io/repository/biocontainers/bioconductor-beadarraysnp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadarraysnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadarraysnp/README.html