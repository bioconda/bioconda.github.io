.. title:: Package Recipe 'bioconductor-grmetrics'
.. highlight: bash


bioconductor-grmetrics
======================

.. conda:recipe:: bioconductor-grmetrics
   :replaces_section_title:

   Functions for calculating and visualizing growth\-rate inhibition \(GR\) metrics.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GRmetrics.html
   :license: GPL-3
   :recipe: /`bioconductor-grmetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grmetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-grmetrics/meta.yaml>`_
   :links: biotools: :biotools:`grmetrics`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-grmetrics

   |downloads_bioconductor-grmetrics| |docker_bioconductor-grmetrics|

   :versions: 1.8.0, 1.6.1, 1.4.1

   :depends: :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-drc`  :conda:package:`r-ggplot2`  :conda:package:`r-plotly`  

   :required~by: |required_by_bioconductor-grmetrics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-grmetrics

   and update with::

      conda update bioconductor-grmetrics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-grmetrics


.. |required_by_bioconductor-grmetrics| conda:required_by:: bioconductor-grmetrics
.. |downloads_bioconductor-grmetrics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-grmetrics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-grmetrics| image:: https://quay.io/repository/biocontainers/bioconductor-grmetrics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-grmetrics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-grmetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-grmetrics/README.html

