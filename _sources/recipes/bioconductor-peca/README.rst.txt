:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-peca'
.. highlight: bash

bioconductor-peca
=================

.. conda:recipe:: bioconductor-peca
   :replaces_section_title:
   :noindex:

   Probe\-level Expression Change Averaging

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/PECA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-peca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peca/meta.yaml>`_
   :links: biotools: :biotools:`peca`, doi: :doi:`10.1007/978-1-4939-6518-2_11`

   Calculates Probe\-level Expression Change Averages \(PECA\) to identify differential expression in Affymetrix gene expression microarray studies or in proteomic studies using peptide\-level mesurements respectively.


.. conda:package:: bioconductor-peca

   |downloads_bioconductor-peca| |docker_bioconductor-peca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.70.0,<1.71.0``
   :depends bioconductor-genefilter: ``>=1.74.0,<1.75.0``
   :depends bioconductor-limma: ``>=3.48.0,<3.49.0``
   :depends bioconductor-preprocesscore: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rots: ``>=1.20.0,<1.21.0``
   :depends r-aroma.affymetrix: 
   :depends r-aroma.core: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-peca

   and update with::

      conda update bioconductor-peca

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-peca:<tag>

   (see `bioconductor-peca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-peca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-peca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-peca
   :alt:   (downloads)
.. |docker_bioconductor-peca| image:: https://quay.io/repository/biocontainers/bioconductor-peca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-peca
.. _`bioconductor-peca/tags`: https://quay.io/repository/biocontainers/bioconductor-peca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-peca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-peca/README.html