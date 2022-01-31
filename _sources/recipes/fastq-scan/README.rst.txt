:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-scan'
.. highlight: bash

fastq-scan
==========

.. conda:recipe:: fastq-scan
   :replaces_section_title:
   :noindex:

   FASTQ summary statistics in JSON format

   :homepage: https://github.com/rpetit3/fastq-scan
   :license: MIT
   :recipe: /`fastq-scan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-scan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-scan/meta.yaml>`_

   


.. conda:package:: fastq-scan

   |downloads_fastq-scan| |docker_fastq-scan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.4-1</code>,  <code>0.4.4-0</code>,  <code>0.4.3-1</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3-1</code>,  <code>0.3-0</code>,  </span></summary>
      

      ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3-1``,  ``0.3-0``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends jq: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastq-scan

   and update with::

      conda update fastq-scan

   or use the docker container::

      docker pull quay.io/biocontainers/fastq-scan:<tag>

   (see `fastq-scan/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-scan| image:: https://img.shields.io/conda/dn/bioconda/fastq-scan.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-scan
   :alt:   (downloads)
.. |docker_fastq-scan| image:: https://quay.io/repository/biocontainers/fastq-scan/status
   :target: https://quay.io/repository/biocontainers/fastq-scan
.. _`fastq-scan/tags`: https://quay.io/repository/biocontainers/fastq-scan?tab=tags


.. raw:: html

    <script>
        var package = "fastq-scan";
        var versions = ["0.4.4","0.4.4","0.4.3","0.4.3","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-scan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-scan/README.html