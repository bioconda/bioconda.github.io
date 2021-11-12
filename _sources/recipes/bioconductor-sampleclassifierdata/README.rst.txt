:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sampleclassifierdata'
.. highlight: bash

bioconductor-sampleclassifierdata
=================================

.. conda:recipe:: bioconductor-sampleclassifierdata
   :replaces_section_title:
   :noindex:

   Pre\-processed data for use with the sampleClassifier package

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/sampleClassifierData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sampleclassifierdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sampleclassifierdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sampleclassifierdata/meta.yaml>`_

   This package contains two microarray and two RNA\-seq datasets that have been preprocessed for use with the sampleClassifier package. The RNA\-seq data are derived from Fagerberg et al. \(2014\) and the Illumina Body Map 2.0 data. The microarray data are derived from Roth et al. \(2006\) and Ge et al. \(2005\).


.. conda:package:: bioconductor-sampleclassifierdata

   |downloads_bioconductor-sampleclassifierdata| |docker_bioconductor-sampleclassifierdata|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sampleclassifierdata

   and update with::

      conda update bioconductor-sampleclassifierdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sampleclassifierdata:<tag>

   (see `bioconductor-sampleclassifierdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sampleclassifierdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sampleclassifierdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sampleclassifierdata
   :alt:   (downloads)
.. |docker_bioconductor-sampleclassifierdata| image:: https://quay.io/repository/biocontainers/bioconductor-sampleclassifierdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sampleclassifierdata
.. _`bioconductor-sampleclassifierdata/tags`: https://quay.io/repository/biocontainers/bioconductor-sampleclassifierdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sampleclassifierdata";
        var versions = ["1.18.0","1.16.0","1.14.1","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sampleclassifierdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sampleclassifierdata/README.html