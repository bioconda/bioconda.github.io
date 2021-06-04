:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgadem'
.. highlight: bash

bioconductor-rgadem
===================

.. conda:recipe:: bioconductor-rgadem
   :replaces_section_title:
   :noindex:

   de novo motif discovery

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/rGADEM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgadem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgadem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgadem/meta.yaml>`_
   :links: biotools: :biotools:`rgadem`, doi: :doi:`10.1371/journal.pone.0016432`

   rGADEM is an efficient de novo motif discovery tool for large\-scale genomic sequence data. It is an open\-source R package\, which is based on the GADEM software.


.. conda:package:: bioconductor-rgadem

   |downloads_bioconductor-rgadem| |docker_bioconductor-rgadem|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.40.0-0</code>,  <code>2.38.0-1</code>,  <code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-1</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.26.0-0</code>,  </span></summary>
      

      ``2.40.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-seqlogo: ``>=1.58.0,<1.59.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgadem

   and update with::

      conda update bioconductor-rgadem

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgadem:<tag>

   (see `bioconductor-rgadem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgadem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgadem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgadem
   :alt:   (downloads)
.. |docker_bioconductor-rgadem| image:: https://quay.io/repository/biocontainers/bioconductor-rgadem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgadem
.. _`bioconductor-rgadem/tags`: https://quay.io/repository/biocontainers/bioconductor-rgadem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgadem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgadem/README.html