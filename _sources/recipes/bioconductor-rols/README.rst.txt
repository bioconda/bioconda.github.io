:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rols'
.. highlight: bash

bioconductor-rols
=================

.. conda:recipe:: bioconductor-rols
   :replaces_section_title:
   :noindex:

   An R interface to the Ontology Lookup Service

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/rols.html
   :license: GPL-2
   :recipe: /`bioconductor-rols <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rols>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rols/meta.yaml>`_
   :links: biotools: :biotools:`rols`, doi: :doi:`10.1038/nmeth.3252`

   The rols package is an interface to the Ontology Lookup Service \(OLS\) to access and query hundred of ontolgies directly from R.


.. conda:package:: bioconductor-rols

   |downloads_bioconductor-rols| |docker_bioconductor-rols|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.20.0-0</code>,  <code>2.18.2-0</code>,  <code>2.18.0-0</code>,  <code>2.16.1-0</code>,  <code>2.14.0-0</code>,  <code>2.12.0-1</code>,  <code>2.10.1-0</code>,  <code>2.10.0-0</code>,  <code>2.8.2-0</code>,  </span></summary>
      

      ``2.20.0-0``,  ``2.18.2-0``,  ``2.18.0-0``,  ``2.16.1-0``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.8.2-0``,  ``2.6.0-0``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-progress: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rols

   and update with::

      conda update bioconductor-rols

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rols:<tag>

   (see `bioconductor-rols/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rols| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rols.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rols
   :alt:   (downloads)
.. |docker_bioconductor-rols| image:: https://quay.io/repository/biocontainers/bioconductor-rols/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rols
.. _`bioconductor-rols/tags`: https://quay.io/repository/biocontainers/bioconductor-rols?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rols/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rols/README.html