:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-neuca'
.. highlight: bash

bioconductor-neuca
==================

.. conda:recipe:: bioconductor-neuca
   :replaces_section_title:
   :noindex:

   NEUral network\-based single\-Cell Annotation tool

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/NeuCA.html
   :license: GPL-2
   :recipe: /`bioconductor-neuca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-neuca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-neuca/meta.yaml>`_

   NeuCA is is a neural\-network based method for scRNA\-seq data annotation. It can automatically adjust its classification strategy depending on cell type correlations\, to accurately annotate cell. NeuCA can automatically utilize the structure information of the cell types through a hierarchical tree to improve the annotation accuracy. It is especially helpful when the data contain closely correlated cell types.


.. conda:package:: bioconductor-neuca

   |downloads_bioconductor-neuca| |docker_bioconductor-neuca|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-keras: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-neuca

   and update with::

      conda update bioconductor-neuca

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-neuca:<tag>

   (see `bioconductor-neuca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-neuca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-neuca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-neuca
   :alt:   (downloads)
.. |docker_bioconductor-neuca| image:: https://quay.io/repository/biocontainers/bioconductor-neuca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-neuca
.. _`bioconductor-neuca/tags`: https://quay.io/repository/biocontainers/bioconductor-neuca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-neuca";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-neuca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-neuca/README.html