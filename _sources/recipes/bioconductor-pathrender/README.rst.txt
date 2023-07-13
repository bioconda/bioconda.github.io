:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathrender'
.. highlight: bash

bioconductor-pathrender
=======================

.. conda:recipe:: bioconductor-pathrender
   :replaces_section_title:
   :noindex:

   Render molecular pathways

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/pathRender.html
   :license: LGPL
   :recipe: /`bioconductor-pathrender <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathrender>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathrender/meta.yaml>`_
   :links: biotools: :biotools:`pathrender`, doi: :doi:`10.1038/nmeth.3252`

   build graphs from pathway databases\, render them by Rgraphviz.


.. conda:package:: bioconductor-pathrender

   |downloads_bioconductor-pathrender| |docker_bioconductor-pathrender|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-cmap: ``>=1.15.0,<1.16.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends bioconductor-rgraphviz: ``>=2.44.0,<2.45.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pathrender

   and update with::

      conda update bioconductor-pathrender

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathrender:<tag>

   (see `bioconductor-pathrender/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathrender| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathrender.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathrender
   :alt:   (downloads)
.. |docker_bioconductor-pathrender| image:: https://quay.io/repository/biocontainers/bioconductor-pathrender/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathrender
.. _`bioconductor-pathrender/tags`: https://quay.io/repository/biocontainers/bioconductor-pathrender?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pathrender";
        var versions = ["1.68.0","1.66.0","1.62.0","1.60.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathrender/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathrender/README.html