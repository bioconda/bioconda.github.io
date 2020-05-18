:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macsquantifyr'
.. highlight: bash

bioconductor-macsquantifyr
==========================

.. conda:recipe:: bioconductor-macsquantifyr
   :replaces_section_title:

   Fast treatment of MACSQuantify FACS data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/MACSQuantifyR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-macsquantifyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macsquantifyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macsquantifyr/meta.yaml>`_

   Automatically process the metadata of MACSQuantify FACS sorter. It runs multiple modules\: i\) imports of raw file and graphical selection of duplicates in well plate\, ii\) computes statistics on data and iii\) can compute combination index.


.. conda:package:: bioconductor-macsquantifyr

   |downloads_bioconductor-macsquantifyr| |docker_bioconductor-macsquantifyr|

   :versions: 1.2.0-0, 1.0.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-png: 
   :depends r-prettydoc: 
   :depends r-readxl: 
   :depends r-rmarkdown: 
   :depends r-rvest: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-macsquantifyr

   and update with::

      conda update bioconductor-macsquantifyr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-macsquantifyr:<tag>

   (see `bioconductor-macsquantifyr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macsquantifyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macsquantifyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macsquantifyr
   :alt:   (downloads)
.. |docker_bioconductor-macsquantifyr| image:: https://quay.io/repository/biocontainers/bioconductor-macsquantifyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macsquantifyr
.. _`bioconductor-macsquantifyr/tags`: https://quay.io/repository/biocontainers/bioconductor-macsquantifyr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macsquantifyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macsquantifyr/README.html