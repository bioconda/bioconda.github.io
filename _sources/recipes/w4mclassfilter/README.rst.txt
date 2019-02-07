.. title:: Package Recipe 'w4mclassfilter'
.. highlight: bash


w4mclassfilter
==============

.. conda:recipe:: w4mclassfilter
   :replaces_section_title:

   Filter Workflow4Metabolomics dataMatrix\, sampleMetadata\, and variableMetadata files by sample\-class\, imputing zero for NA values and eliminating zero\-variance rows and columns from the data\-matrix. MIT Licence allows redistribution.

   :homepage: https://github.com/HegemanLab/w4mclassfilter
   :license: MIT
   :recipe: /`w4mclassfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/w4mclassfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/w4mclassfilter/meta.yaml>`_

   


.. conda:package:: w4mclassfilter

   |downloads_w4mclassfilter| |docker_w4mclassfilter|

   :versions: 0.98.9, 0.98.8, 0.98.7, 0.98.6, 0.98.3, 0.98.2, 0.98.1, 0.98.0

   :depends: :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 

   :required~by: |required_by_w4mclassfilter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install w4mclassfilter

   and update with::

      conda update w4mclassfilter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/w4mclassfilter


.. |required_by_w4mclassfilter| conda:required_by:: w4mclassfilter
.. |downloads_w4mclassfilter| image:: https://img.shields.io/conda/dn/bioconda/w4mclassfilter.svg?style=flat
   :alt:   (downloads)
.. |docker_w4mclassfilter| image:: https://quay.io/repository/biocontainers/w4mclassfilter/status
   :target: https://quay.io/repository/biocontainers/w4mclassfilter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/w4mclassfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/w4mclassfilter/README.html

