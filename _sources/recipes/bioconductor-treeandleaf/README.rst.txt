:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-treeandleaf'
.. highlight: bash

bioconductor-treeandleaf
========================

.. conda:recipe:: bioconductor-treeandleaf
   :replaces_section_title:
   :noindex:

   An alternative to dendrogram visualization and insertion of multiple layers of information

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/TreeAndLeaf.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-treeandleaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treeandleaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-treeandleaf/meta.yaml>`_

   TreeAndLeaf package comes as an alternative to solve problems regarding dendrogram plotting\, such as the lack of space when the dendrogram is too large and the need for adding more layers of information. It treats a whole dendrogram as a tree\, in which the observations are represented by the leaves.


.. conda:package:: bioconductor-treeandleaf

   |downloads_bioconductor-treeandleaf| |docker_bioconductor-treeandleaf|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-reder: ``>=1.38.0,<1.39.0``
   :depends r-ape: 
   :depends r-base: ``>=4.0,<4.1.0a0``
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







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-treeandleaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-treeandleaf/README.html