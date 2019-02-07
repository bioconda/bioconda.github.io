.. title:: Package Recipe 'bioconductor-biotmledata'
.. highlight: bash


bioconductor-biotmledata
========================

.. conda:recipe:: bioconductor-biotmledata
   :replaces_section_title:

   Microarray data \(from the Illumina Ref\-8 BeadChips platform\) and phenotype\-level data from an epidemiological investigation of benzene exposure\, packaged using \"SummarizedExperiemnt\"\, for use as an example with the \"biotmle\" R package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/biotmleData.html
   :license: file LICENSE
   :recipe: /`bioconductor-biotmledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biotmledata/meta.yaml>`_

   


.. conda:package:: bioconductor-biotmledata

   |downloads_bioconductor-biotmledata| |docker_bioconductor-biotmledata|

   :versions: 1.6.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-biotmledata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biotmledata

   and update with::

      conda update bioconductor-biotmledata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biotmledata


.. |required_by_bioconductor-biotmledata| conda:required_by:: bioconductor-biotmledata
.. |downloads_bioconductor-biotmledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biotmledata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biotmledata| image:: https://quay.io/repository/biocontainers/bioconductor-biotmledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biotmledata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biotmledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biotmledata/README.html

