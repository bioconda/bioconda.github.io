:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'w4mclassfilter'
.. highlight: bash

w4mclassfilter
==============

.. conda:recipe:: w4mclassfilter
   :replaces_section_title:

   Filter Workflow4Metabolomics feature list\, optionally imputing NA values.

   :homepage: https://github.com/HegemanLab/w4mclassfilter
   :license: MIT
   :recipe: /`w4mclassfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/w4mclassfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/w4mclassfilter/meta.yaml>`_

   Filter Workflow4Metabolomics dataMatrix\, sampleMetadata\, and variableMetadata files by sample\-class\, eliminating zero\-variance rows and columns from the data\-matrix and\, optionally\, imputing NA values. MIT Licence allows redistribution.


.. conda:package:: w4mclassfilter

   |downloads_w4mclassfilter| |docker_w4mclassfilter|

   :versions: 0.98.14-0, 0.98.13-0, 0.98.12-0, 0.98.9-0, 0.98.8-1, 0.98.7-1, 0.98.7-0, 0.98.6-1, 0.98.6-0, 0.98.3-1, 0.98.3-0, 0.98.2-1, 0.98.2-0, 0.98.1-1, 0.98.1-0, 0.98.0-1, 0.98.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install w4mclassfilter

   and update with::

      conda update w4mclassfilter

   or use the docker container::

      docker pull quay.io/biocontainers/w4mclassfilter:<tag>

   (see `w4mclassfilter/tags`_ for valid values for ``<tag>``)


.. |downloads_w4mclassfilter| image:: https://img.shields.io/conda/dn/bioconda/w4mclassfilter.svg?style=flat
   :target: https://anaconda.org/bioconda/w4mclassfilter
   :alt:   (downloads)
.. |docker_w4mclassfilter| image:: https://quay.io/repository/biocontainers/w4mclassfilter/status
   :target: https://quay.io/repository/biocontainers/w4mclassfilter
.. _`w4mclassfilter/tags`: https://quay.io/repository/biocontainers/w4mclassfilter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/w4mclassfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/w4mclassfilter/README.html