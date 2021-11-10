:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metavizr'
.. highlight: bash

bioconductor-metavizr
=====================

.. conda:recipe:: bioconductor-metavizr
   :replaces_section_title:
   :noindex:

   R Interface to the metaviz web app for interactive metagenomics data analysis and visualization

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/metavizr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-metavizr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metavizr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metavizr/meta.yaml>`_

   This package provides Websocket communication to the metaviz web app \(http\:\/\/metaviz.cbcb.umd.edu\) for interactive visualization of metagenomics data. Objects in R\/bioc interactive sessions can be displayed in plots and data can be explored using a facetzoom visualization. Fundamental Bioconductor data structures are supported \(e.g.\, MRexperiment objects\)\, while providing an easy mechanism to support other data structures. Visualizations \(using d3.js\) can be easily added to the web app as well.


.. conda:package:: bioconductor-metavizr

   |downloads_bioconductor-metavizr| |docker_bioconductor-metavizr|

   :versions:
      
      

      ``1.18.0-0``,  ``1.15.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.1-0``,  ``1.2.1-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-epivizr: ``>=2.24.0,<2.25.0``
   :depends bioconductor-epivizrdata: ``>=1.22.0,<1.23.0``
   :depends bioconductor-epivizrserver: ``>=1.22.0,<1.23.0``
   :depends bioconductor-epivizrstandalone: ``>=1.22.0,<1.23.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-metagenomeseq: ``>=1.36.0,<1.37.0``
   :depends bioconductor-phyloseq: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-httr: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metavizr

   and update with::

      conda update bioconductor-metavizr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metavizr:<tag>

   (see `bioconductor-metavizr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metavizr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metavizr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metavizr
   :alt:   (downloads)
.. |docker_bioconductor-metavizr| image:: https://quay.io/repository/biocontainers/bioconductor-metavizr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metavizr
.. _`bioconductor-metavizr/tags`: https://quay.io/repository/biocontainers/bioconductor-metavizr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metavizr";
        var versions = ["1.18.0","1.15.0","1.14.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metavizr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metavizr/README.html