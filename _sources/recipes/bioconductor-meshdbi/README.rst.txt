:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meshdbi'
.. highlight: bash

bioconductor-meshdbi
====================

.. conda:recipe:: bioconductor-meshdbi
   :replaces_section_title:
   :noindex:

   DBI to construct MeSH\-related package from sqlite file

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/MeSHDbi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-meshdbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshdbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshdbi/meta.yaml>`_
   :links: biotools: :biotools:`meshdbi`

   The package is unified implementation of MeSH.db\, MeSH.AOR.db\, and MeSH.PCR.db and also is interface to construct Gene\-MeSH package \(MeSH.XXX.eg.db\). loadMeSHDbiPkg import sqlite file and generate MeSH.XXX.eg.db.


.. conda:package:: bioconductor-meshdbi

   |downloads_bioconductor-meshdbi| |docker_bioconductor-meshdbi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-meshdbi

   and update with::

      conda update bioconductor-meshdbi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-meshdbi:<tag>

   (see `bioconductor-meshdbi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-meshdbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meshdbi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meshdbi
   :alt:   (downloads)
.. |docker_bioconductor-meshdbi| image:: https://quay.io/repository/biocontainers/bioconductor-meshdbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meshdbi
.. _`bioconductor-meshdbi/tags`: https://quay.io/repository/biocontainers/bioconductor-meshdbi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meshdbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meshdbi/README.html