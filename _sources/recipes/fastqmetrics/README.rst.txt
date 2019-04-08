:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqmetrics'
.. highlight: bash

fastqmetrics
============

.. conda:recipe:: fastqmetrics
   :replaces_section_title:

   Extract metrics from a fastq file\, streaming

   :homepage: https://github.com/wdecoster/fastqmetrics
   :license: MIT / MIT License
   :recipe: /`fastqmetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqmetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqmetrics/meta.yaml>`_

   


.. conda:package:: fastqmetrics

   |downloads_fastqmetrics| |docker_fastqmetrics|

   :versions: 0.1.0-1, 0.1.0-0
   
   :depends nanoget: >=0.14.0
   :depends python: >=3.5,<3.6.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastqmetrics

   and update with::

      conda update fastqmetrics

   or use the docker container::

      docker pull quay.io/biocontainers/fastqmetrics:<tag>

   (see `fastqmetrics/tags`_ for valid values for ``<tag>``)


.. |downloads_fastqmetrics| image:: https://img.shields.io/conda/dn/bioconda/fastqmetrics.svg?style=flat
   :alt:   (downloads)
.. |docker_fastqmetrics| image:: https://quay.io/repository/biocontainers/fastqmetrics/status
   :target: https://quay.io/repository/biocontainers/fastqmetrics
.. _`fastqmetrics/tags`: https://quay.io/repository/biocontainers/fastqmetrics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqmetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqmetrics/README.html