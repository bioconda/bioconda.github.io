:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-immunespacer'
.. highlight: bash

bioconductor-immunespacer
=========================

.. conda:recipe:: bioconductor-immunespacer
   :replaces_section_title:
   :noindex:

   A Thin Wrapper around the ImmuneSpace Database

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ImmuneSpaceR.html
   :license: GPL-2
   :recipe: /`bioconductor-immunespacer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunespacer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunespacer/meta.yaml>`_

   Provides a convenient API for accessing data sets within ImmuneSpace \(www.immunespace.org\)\, the data repository and analysis platform of the Human Immunology Project Consortium \(HIPC\).


.. conda:package:: bioconductor-immunespacer

   |downloads_bioconductor-immunespacer| |docker_bioconductor-immunespacer|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.10.5-0``,  ``1.10.1-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-flowcore: ``>=2.0.0,<2.1.0``
   :depends bioconductor-flowworkspace: ``>=4.0.0,<4.1.0``
   :depends bioconductor-preprocesscore: ``>=1.50.0,<1.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-curl: 
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-ggplot2: ``>=3.2.0``
   :depends r-gplots: 
   :depends r-heatmaply: ``>=0.7.0``
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-pheatmap: 
   :depends r-plotly: 
   :depends r-r6: 
   :depends r-rlabkey: ``>=2.3.1``
   :depends r-rmarkdown: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-immunespacer

   and update with::

      conda update bioconductor-immunespacer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-immunespacer:<tag>

   (see `bioconductor-immunespacer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-immunespacer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-immunespacer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-immunespacer
   :alt:   (downloads)
.. |docker_bioconductor-immunespacer| image:: https://quay.io/repository/biocontainers/bioconductor-immunespacer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-immunespacer
.. _`bioconductor-immunespacer/tags`: https://quay.io/repository/biocontainers/bioconductor-immunespacer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-immunespacer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-immunespacer/README.html