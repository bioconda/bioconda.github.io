:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgraphviz'
.. highlight: bash

bioconductor-rgraphviz
======================

.. conda:recipe:: bioconductor-rgraphviz
   :replaces_section_title:
   :noindex:

   Provides plotting capabilities for R graph objects

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/Rgraphviz.html
   :license: EPL
   :recipe: /`bioconductor-rgraphviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraphviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgraphviz/meta.yaml>`_

   Interfaces R with the AT and T graphviz library for plotting R graph objects from the graph package.


.. conda:package:: bioconductor-rgraphviz

   |downloads_bioconductor-rgraphviz| |docker_bioconductor-rgraphviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.0-1</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-1</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  </span></summary>
      

      ``2.34.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-1``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.13.0-1``,  ``2.13.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgraphviz

   and update with::

      conda update bioconductor-rgraphviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgraphviz:<tag>

   (see `bioconductor-rgraphviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgraphviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgraphviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgraphviz
   :alt:   (downloads)
.. |docker_bioconductor-rgraphviz| image:: https://quay.io/repository/biocontainers/bioconductor-rgraphviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgraphviz
.. _`bioconductor-rgraphviz/tags`: https://quay.io/repository/biocontainers/bioconductor-rgraphviz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgraphviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgraphviz/README.html