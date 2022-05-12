:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-destiny'
.. highlight: bash

bioconductor-destiny
====================

.. conda:recipe:: bioconductor-destiny
   :replaces_section_title:
   :noindex:

   Creates diffusion maps

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/destiny.html
   :license: GPL-3
   :recipe: /`bioconductor-destiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-destiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-destiny/meta.yaml>`_

   Create and plot diffusion maps.


.. conda:package:: bioconductor-destiny

   |downloads_bioconductor-destiny| |docker_bioconductor-destiny|

   :versions:
      
      

      ``3.8.1-0``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.2.0-0``,  ``2.15.0-0``,  ``2.14.0-1``,  ``2.12.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-pcamethods: ``>=1.86.0,<1.87.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot.multistats: 
   :depends r-ggplot2: 
   :depends r-ggthemes: 
   :depends r-irlba: 
   :depends r-knn.covertree: 
   :depends r-matrix: 
   :depends r-proxy: 
   :depends r-rcpp: ``>=0.10.3``
   :depends r-rcppeigen: 
   :depends r-rcpphnsw: 
   :depends r-rspectra: ``>=0.14-0``
   :depends r-scales: 
   :depends r-scatterplot3d: 
   :depends r-smoother: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-vim: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-destiny

   and update with::

      conda update bioconductor-destiny

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-destiny:<tag>

   (see `bioconductor-destiny/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-destiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-destiny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-destiny
   :alt:   (downloads)
.. |docker_bioconductor-destiny| image:: https://quay.io/repository/biocontainers/bioconductor-destiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-destiny
.. _`bioconductor-destiny/tags`: https://quay.io/repository/biocontainers/bioconductor-destiny?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-destiny";
        var versions = ["3.8.1","3.4.0","3.4.0","3.2.0","2.15.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-destiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-destiny/README.html