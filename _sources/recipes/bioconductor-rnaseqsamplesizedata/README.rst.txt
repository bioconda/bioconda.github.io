.. title:: Package Recipe 'bioconductor-rnaseqsamplesizedata'
.. highlight: bash


bioconductor-rnaseqsamplesizedata
=================================

.. conda:recipe:: bioconductor-rnaseqsamplesizedata
   :replaces_section_title:

   RnaSeqSampleSizeData package provides the read counts and dispersion distribution from real RNA\-seq experiments. It can be used by RnaSeqSampleSize package to estimate sample size and power for RNA\-seq experiment design.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/RnaSeqSampleSizeData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rnaseqsamplesizedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqsamplesizedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaseqsamplesizedata/meta.yaml>`_

   


.. conda:package:: bioconductor-rnaseqsamplesizedata

   |downloads_bioconductor-rnaseqsamplesizedata| |docker_bioconductor-rnaseqsamplesizedata|

   :versions: 1.14.0, 1.12.0

   :depends: :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-rnaseqsamplesizedata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rnaseqsamplesizedata

   and update with::

      conda update bioconductor-rnaseqsamplesizedata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rnaseqsamplesizedata


.. |required_by_bioconductor-rnaseqsamplesizedata| conda:required_by:: bioconductor-rnaseqsamplesizedata
.. |downloads_bioconductor-rnaseqsamplesizedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaseqsamplesizedata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rnaseqsamplesizedata| image:: https://quay.io/repository/biocontainers/bioconductor-rnaseqsamplesizedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaseqsamplesizedata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaseqsamplesizedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaseqsamplesizedata/README.html

