.. title:: Package Recipe 'bioconductor-qcmetrics'
.. highlight: bash


bioconductor-qcmetrics
======================

.. conda:recipe:: bioconductor-qcmetrics
   :replaces_section_title:

   The package provides a framework for generic quality control of data. It permits to create\, manage and visualise individual or sets of quality control metrics and generate quality control reports in various formats.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/qcmetrics.html
   :license: GPL-2
   :recipe: /`bioconductor-qcmetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qcmetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qcmetrics/meta.yaml>`_
   :links: biotools: :biotools:`qcmetrics`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-qcmetrics

   |downloads_bioconductor-qcmetrics| |docker_bioconductor-qcmetrics|

   :versions: 1.20.0, 1.18.0, 1.16.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-knitr`  :conda:package:`r-nozzle.r1`  :conda:package:`r-pander`  :conda:package:`r-xtable`  

   :required~by: |required_by_bioconductor-qcmetrics|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qcmetrics

   and update with::

      conda update bioconductor-qcmetrics

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-qcmetrics


.. |required_by_bioconductor-qcmetrics| conda:required_by:: bioconductor-qcmetrics
.. |downloads_bioconductor-qcmetrics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qcmetrics.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-qcmetrics| image:: https://quay.io/repository/biocontainers/bioconductor-qcmetrics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qcmetrics







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qcmetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qcmetrics/README.html

