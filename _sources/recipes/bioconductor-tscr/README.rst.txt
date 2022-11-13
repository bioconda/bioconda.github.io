:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tscr'
.. highlight: bash

bioconductor-tscr
=================

.. conda:recipe:: bioconductor-tscr
   :replaces_section_title:
   :noindex:

   A time series clustering package combining slope and Frechet distances

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/tscR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tscr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tscr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tscr/meta.yaml>`_

   Clustering for time series data using slope distance and\/or shape distance.


.. conda:package:: bioconductor-tscr

   |downloads_bioconductor-tscr| |docker_bioconductor-tscr|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-class: 
   :depends r-cluster: 
   :depends r-dplyr: 
   :depends r-dtw: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-kmlshape: 
   :depends r-knitr: 
   :depends r-latex2exp: 
   :depends r-prettydoc: 
   :depends r-rcolorbrewer: 
   :depends r-rmarkdown: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tscr

   and update with::

      conda update bioconductor-tscr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tscr:<tag>

   (see `bioconductor-tscr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tscr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tscr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tscr
   :alt:   (downloads)
.. |docker_bioconductor-tscr| image:: https://quay.io/repository/biocontainers/bioconductor-tscr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tscr
.. _`bioconductor-tscr/tags`: https://quay.io/repository/biocontainers/bioconductor-tscr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tscr";
        var versions = ["1.10.0","1.6.1","1.6.1","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tscr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tscr/README.html