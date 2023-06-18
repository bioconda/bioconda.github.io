:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-dl'
.. highlight: bash

fastq-dl
========

.. conda:recipe:: fastq-dl
   :replaces_section_title:
   :noindex:

   A tool to download FASTQs associated with Study\, Experiment\, or Run accessions.

   :homepage: https://github.com/rpetit3/fastq-dl
   :license: MIT
   :recipe: /`fastq-dl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-dl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-dl/meta.yaml>`_

   


.. conda:package:: fastq-dl

   |downloads_fastq-dl| |docker_fastq-dl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  </span></summary>
      

      ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends executor: 
   :depends pigz: 
   :depends pysradb: ``>=1.4``
   :depends python: ``>=3.7``
   :depends requests: 
   :depends rich-click: ``>=1.6.0``
   :depends sra-tools: ``>=3.0.1``
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastq-dl

   and update with::

      conda update fastq-dl

   or use the docker container::

      docker pull quay.io/biocontainers/fastq-dl:<tag>

   (see `fastq-dl/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-dl| image:: https://img.shields.io/conda/dn/bioconda/fastq-dl.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-dl
   :alt:   (downloads)
.. |docker_fastq-dl| image:: https://quay.io/repository/biocontainers/fastq-dl/status
   :target: https://quay.io/repository/biocontainers/fastq-dl
.. _`fastq-dl/tags`: https://quay.io/repository/biocontainers/fastq-dl?tab=tags


.. raw:: html

    <script>
        var package = "fastq-dl";
        var versions = ["2.0.2","2.0.1","2.0.0","1.2.0","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-dl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-dl/README.html