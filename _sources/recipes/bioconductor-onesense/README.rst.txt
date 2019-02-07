.. title:: Package Recipe 'bioconductor-onesense'
.. highlight: bash


bioconductor-onesense
=====================

.. conda:recipe:: bioconductor-onesense
   :replaces_section_title:

   A graphical user interface that facilitates the dimensional reduction method based on the t\-distributed stochastic neighbor embedding \(t\-SNE\) algorithm\, for categorical analysis of mass cytometry data. With One\-SENSE\, measured parameters are grouped into predefined categories\, and cells are projected onto a space composed of one dimension for each category. Each dimension is informative and can be annotated through the use of heatplots aligned in parallel to each axis\, allowing for simultaneous visualization of two catergories across a two\-dimensional plot. The cellular occupancy of the resulting plots alllows for direct assessment of the relationships between the categories.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/oneSENSE.html
   :license: GPL (>=3)
   :recipe: /`bioconductor-onesense <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onesense>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-onesense/meta.yaml>`_

   


.. conda:package:: bioconductor-onesense

   |downloads_bioconductor-onesense| |docker_bioconductor-onesense|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-gplots`  :conda:package:`r-plotly`  :conda:package:`r-rtsne`  :conda:package:`r-scatterplot3d`  :conda:package:`r-shiny`  :conda:package:`r-shinyfiles`  :conda:package:`r-webshot`  

   :required~by: |required_by_bioconductor-onesense|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-onesense

   and update with::

      conda update bioconductor-onesense

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-onesense


.. |required_by_bioconductor-onesense| conda:required_by:: bioconductor-onesense
.. |downloads_bioconductor-onesense| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-onesense.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-onesense| image:: https://quay.io/repository/biocontainers/bioconductor-onesense/status
   :target: https://quay.io/repository/biocontainers/bioconductor-onesense







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-onesense/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-onesense/README.html

