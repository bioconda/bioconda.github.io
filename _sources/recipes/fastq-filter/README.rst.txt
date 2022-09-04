:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-filter'
.. highlight: bash

fastq-filter
============

.. conda:recipe:: fastq-filter
   :replaces_section_title:
   :noindex:

   A fast FASTQ filter program.

   :homepage: https://github.com/LUMC/fastq-filter
   :license: MIT / MIT
   :recipe: /`fastq-filter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-filter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-filter/meta.yaml>`_

   


.. conda:package:: fastq-filter

   |downloads_fastq-filter| |docker_fastq-filter|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends dnaio: ``>=0.6.0``
   :depends libgcc-ng: ``>=12``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends xopen: ``>=1.2.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastq-filter

   and update with::

      conda update fastq-filter

   or use the docker container::

      docker pull quay.io/biocontainers/fastq-filter:<tag>

   (see `fastq-filter/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-filter| image:: https://img.shields.io/conda/dn/bioconda/fastq-filter.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-filter
   :alt:   (downloads)
.. |docker_fastq-filter| image:: https://quay.io/repository/biocontainers/fastq-filter/status
   :target: https://quay.io/repository/biocontainers/fastq-filter
.. _`fastq-filter/tags`: https://quay.io/repository/biocontainers/fastq-filter?tab=tags


.. raw:: html

    <script>
        var package = "fastq-filter";
        var versions = ["0.3.0","0.2.0","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-filter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-filter/README.html