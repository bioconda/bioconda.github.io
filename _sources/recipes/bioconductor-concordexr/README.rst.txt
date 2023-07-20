:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-concordexr'
.. highlight: bash

bioconductor-concordexr
=======================

.. conda:recipe:: bioconductor-concordexr
   :replaces_section_title:
   :noindex:

   Calculate the concordex coefficient

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/concordexR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-concordexr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-concordexr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-concordexr/meta.yaml>`_

   Many analysis workflows include approximation of a nearest neighbors graph followed by clustering of the graph structure. The concordex coefficient estimates the concordance between the graph and clustering results. The package \'concordexR\' is an R implementation of the original concordex Python\-based command line tool.


.. conda:package:: bioconductor-concordexr

   |downloads_bioconductor-concordexr| |docker_bioconductor-concordexr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cli: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-pheatmap: 
   :depends r-rlang: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-concordexr

   and update with::

      conda update bioconductor-concordexr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-concordexr:<tag>

   (see `bioconductor-concordexr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-concordexr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-concordexr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-concordexr
   :alt:   (downloads)
.. |docker_bioconductor-concordexr| image:: https://quay.io/repository/biocontainers/bioconductor-concordexr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-concordexr
.. _`bioconductor-concordexr/tags`: https://quay.io/repository/biocontainers/bioconductor-concordexr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-concordexr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-concordexr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-concordexr/README.html