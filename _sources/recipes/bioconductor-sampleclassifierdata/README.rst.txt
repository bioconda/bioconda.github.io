.. title:: Package Recipe 'bioconductor-sampleclassifierdata'
.. highlight: bash


bioconductor-sampleclassifierdata
=================================

.. conda:recipe:: bioconductor-sampleclassifierdata
   :replaces_section_title:

   This package contains two microarray and two RNA\-seq datasets that have been preprocessed for use with the sampleClassifier package. The RNA\-seq data are derived from Fagerberg et al. \(2014\) and the Illumina Body Map 2.0 data. The microarray data are derived from Roth et al. \(2006\) and Ge et al. \(2005\).

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/sampleClassifierData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sampleclassifierdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sampleclassifierdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sampleclassifierdata/meta.yaml>`_

   


.. conda:package:: bioconductor-sampleclassifierdata

   |downloads_bioconductor-sampleclassifierdata| |docker_bioconductor-sampleclassifierdata|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-sampleclassifierdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sampleclassifierdata

   and update with::

      conda update bioconductor-sampleclassifierdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sampleclassifierdata


.. |required_by_bioconductor-sampleclassifierdata| conda:required_by:: bioconductor-sampleclassifierdata
.. |downloads_bioconductor-sampleclassifierdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sampleclassifierdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sampleclassifierdata| image:: https://quay.io/repository/biocontainers/bioconductor-sampleclassifierdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sampleclassifierdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sampleclassifierdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sampleclassifierdata/README.html

