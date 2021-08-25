:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-count'
.. highlight: bash

fastq-count
===========

.. conda:recipe:: fastq-count
   :replaces_section_title:
   :noindex:

   Simple fastq read and base counter for paired data.

   :homepage: https://github.com/sndrtj/fastq-count
   :license: MIT
   :recipe: /`fastq-count <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-count>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-count/meta.yaml>`_

   


.. conda:package:: fastq-count

   |downloads_fastq-count| |docker_fastq-count|

   :versions:
      
      

      ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastq-count

   and update with::

      conda update fastq-count

   or use the docker container::

      docker pull quay.io/biocontainers/fastq-count:<tag>

   (see `fastq-count/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-count| image:: https://img.shields.io/conda/dn/bioconda/fastq-count.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-count
   :alt:   (downloads)
.. |docker_fastq-count| image:: https://quay.io/repository/biocontainers/fastq-count/status
   :target: https://quay.io/repository/biocontainers/fastq-count
.. _`fastq-count/tags`: https://quay.io/repository/biocontainers/fastq-count?tab=tags


.. raw:: html

    <script>
        var package = "fastq-count";
        var versions = ["0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-count/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-count/README.html