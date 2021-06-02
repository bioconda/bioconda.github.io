:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-keggrest'
.. highlight: bash

bioconductor-keggrest
=====================

.. conda:recipe:: bioconductor-keggrest
   :replaces_section_title:
   :noindex:

   Client\-side REST access to the Kyoto Encyclopedia of Genes and Genomes \(KEGG\)

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/KEGGREST.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-keggrest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggrest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-keggrest/meta.yaml>`_
   :links: biotools: :biotools:`keggrest`, doi: :doi:`10.1007/s11845-015-1283-8`

   A package that provides a client interface to the Kyoto Encyclopedia of Genes and Genomes \(KEGG\) REST server. Based on KEGGSOAP by J. Zhang\, R. Gentleman\, and Marc Carlson\, and KEGG \(python package\) by Aurelien Mazurie.


.. conda:package:: bioconductor-keggrest

   |downloads_bioconductor-keggrest| |docker_bioconductor-keggrest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.1-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.2-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.2-0``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.1-0``,  ``1.12.3-0``,  ``1.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-httr: 
   :depends r-png: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-keggrest

   and update with::

      conda update bioconductor-keggrest

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-keggrest:<tag>

   (see `bioconductor-keggrest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-keggrest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-keggrest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-keggrest
   :alt:   (downloads)
.. |docker_bioconductor-keggrest| image:: https://quay.io/repository/biocontainers/bioconductor-keggrest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-keggrest
.. _`bioconductor-keggrest/tags`: https://quay.io/repository/biocontainers/bioconductor-keggrest?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-keggrest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-keggrest/README.html