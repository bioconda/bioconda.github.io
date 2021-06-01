:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pepxmltab'
.. highlight: bash

bioconductor-pepxmltab
======================

.. conda:recipe:: bioconductor-pepxmltab
   :replaces_section_title:
   :noindex:

   Parsing pepXML files and filter based on peptide FDR.

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/pepXMLTab.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pepxmltab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepxmltab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepxmltab/meta.yaml>`_
   :links: biotools: :biotools:`pepxmltab`, doi: :doi:`10.1038/nmeth.3252`

   Parsing pepXML files based one XML package. The package tries to handle pepXML files generated from different softwares. The output will be a peptide\-spectrum\-matching tabular file. The package also provide function to filter the PSMs based on FDR.


.. conda:package:: bioconductor-pepxmltab

   |downloads_bioconductor-pepxmltab| |docker_bioconductor-pepxmltab|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.1-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-xml: ``>=3.98-1.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pepxmltab

   and update with::

      conda update bioconductor-pepxmltab

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pepxmltab:<tag>

   (see `bioconductor-pepxmltab/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pepxmltab| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pepxmltab.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pepxmltab
   :alt:   (downloads)
.. |docker_bioconductor-pepxmltab| image:: https://quay.io/repository/biocontainers/bioconductor-pepxmltab/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pepxmltab
.. _`bioconductor-pepxmltab/tags`: https://quay.io/repository/biocontainers/bioconductor-pepxmltab?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pepxmltab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pepxmltab/README.html