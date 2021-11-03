:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-treeandleaf'
.. highlight: bash

bioconductor-treeandleaf
========================

.. conda:recipe:: bioconductor-treeandleaf
   :replaces_section_title:
   :noindex:

   Displaying binary trees with focus on dendrogram leaves

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/TreeAndLeaf.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-treeandleaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treeandleaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treeandleaf/meta.yaml>`_

   The TreeAndLeaf package combines unrooted and force\-directed graph algorithms in order to layout binary trees\, aiming to represent multiple layers of information onto dendrogram leaves.


.. conda:package:: bioconductor-treeandleaf

   |downloads_bioconductor-treeandleaf| |docker_bioconductor-treeandleaf|

   :versions:
      
      

      ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-reder: ``>=1.42.0,<1.43.0``
   :depends r-ape: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-igraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-treeandleaf

   and update with::

      conda update bioconductor-treeandleaf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-treeandleaf:<tag>

   (see `bioconductor-treeandleaf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-treeandleaf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-treeandleaf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-treeandleaf
   :alt:   (downloads)
.. |docker_bioconductor-treeandleaf| image:: https://quay.io/repository/biocontainers/bioconductor-treeandleaf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-treeandleaf
.. _`bioconductor-treeandleaf/tags`: https://quay.io/repository/biocontainers/bioconductor-treeandleaf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-treeandleaf";
        var versions = ["1.6.1","1.4.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-treeandleaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-treeandleaf/README.html