:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-onesense'
.. highlight: bash

bioconductor-onesense
=====================

.. conda:recipe:: bioconductor-onesense
   :replaces_section_title:
   :noindex:

   One\-Dimensional Soli\-Expression by Nonlinear Stochastic Embedding \(OneSENSE\)

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/oneSENSE.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-onesense <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onesense>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onesense/meta.yaml>`_

   A graphical user interface that facilitates the dimensional reduction method based on the t\-distributed stochastic neighbor embedding \(t\-SNE\) algorithm\, for categorical analysis of mass cytometry data. With One\-SENSE\, measured parameters are grouped into predefined categories\, and cells are projected onto a space composed of one dimension for each category. Each dimension is informative and can be annotated through the use of heatplots aligned in parallel to each axis\, allowing for simultaneous visualization of two catergories across a two\-dimensional plot. The cellular occupancy of the resulting plots alllows for direct assessment of the relationships between the categories.


.. conda:package:: bioconductor-onesense

   |downloads_bioconductor-onesense| |docker_bioconductor-onesense|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-flowcore: ``>=2.4.0,<2.5.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gplots: 
   :depends r-plotly: 
   :depends r-rtsne: 
   :depends r-scatterplot3d: 
   :depends r-shiny: 
   :depends r-shinyfiles: 
   :depends r-webshot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-onesense

   and update with::

      conda update bioconductor-onesense

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-onesense:<tag>

   (see `bioconductor-onesense/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-onesense| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-onesense.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-onesense
   :alt:   (downloads)
.. |docker_bioconductor-onesense| image:: https://quay.io/repository/biocontainers/bioconductor-onesense/status
   :target: https://quay.io/repository/biocontainers/bioconductor-onesense
.. _`bioconductor-onesense/tags`: https://quay.io/repository/biocontainers/bioconductor-onesense?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-onesense/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-onesense/README.html