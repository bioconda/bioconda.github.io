:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metavizr'
.. highlight: bash

bioconductor-metavizr
=====================

.. conda:recipe:: bioconductor-metavizr
   :replaces_section_title:

   This package provides Websocket communication to the metaviz web app \(http\:\/\/metaviz.cbcb.umd.edu\) for interactive visualization of metagenomics data. Objects in R\/bioc interactive sessions can be displayed in plots and data can be explored using a facetzoom visualization. Fundamental Bioconductor data structures are supported \(e.g.\, MRexperiment objects\)\, while providing an easy mechanism to support other data structures. Visualizations \(using d3.js\) can be easily added to the web app as well.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/metavizr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-metavizr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metavizr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metavizr/meta.yaml>`_

   


.. conda:package:: bioconductor-metavizr

   |downloads_bioconductor-metavizr| |docker_bioconductor-metavizr|

   :versions: 1.6.1-0, 1.2.1-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-epivizr: >=2.12.0,<2.13.0
   :depends bioconductor-epivizrdata: >=1.10.0,<1.11.0
   :depends bioconductor-epivizrserver: >=1.10.0,<1.11.0
   :depends bioconductor-epivizrstandalone: >=1.10.0,<1.11.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-metagenomeseq: >=1.24.0,<1.25.0
   :depends bioconductor-phyloseq: >=1.26.0,<1.27.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
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







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metavizr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metavizr/README.html