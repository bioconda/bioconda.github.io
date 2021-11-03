:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-connectivitymap'
.. highlight: bash

bioconductor-connectivitymap
============================

.. conda:recipe:: bioconductor-connectivitymap
   :replaces_section_title:
   :noindex:

   Functional connections between drugs\, genes and diseases as revealed by common gene\-expression changes

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/ConnectivityMap.html
   :license: GPL-3
   :recipe: /`bioconductor-connectivitymap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-connectivitymap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-connectivitymap/meta.yaml>`_

   The Broad Institute\'s Connectivity Map \(cmap02\) is a \"large reference catalogue of gene\-expression data from cultured human cells perturbed with many chemicals and genetic reagents\"\, containing more than 7000 gene expression profiles and 1300 small molecules.


.. conda:package:: bioconductor-connectivitymap

   |downloads_bioconductor-connectivitymap| |docker_bioconductor-connectivitymap|

   :versions:
      
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``

      

   
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-connectivitymap

   and update with::

      conda update bioconductor-connectivitymap

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-connectivitymap:<tag>

   (see `bioconductor-connectivitymap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-connectivitymap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-connectivitymap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-connectivitymap
   :alt:   (downloads)
.. |docker_bioconductor-connectivitymap| image:: https://quay.io/repository/biocontainers/bioconductor-connectivitymap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-connectivitymap
.. _`bioconductor-connectivitymap/tags`: https://quay.io/repository/biocontainers/bioconductor-connectivitymap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-connectivitymap";
        var versions = ["1.30.0","1.28.0","1.26.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-connectivitymap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-connectivitymap/README.html