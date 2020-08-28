:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'adam'
.. highlight: bash

adam
====

.. conda:recipe:: adam
   :replaces_section_title:
   :noindex:

   Genomics analysis platform built on Apache Avro\, Apache Spark\, and Apache Parquet

   :homepage: https://github.com/bigdatagenomics/adam
   :license: Apache 2
   :recipe: /`adam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adam/meta.yaml>`_

   


.. conda:package:: adam

   |downloads_adam| |docker_adam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.32.0-0</code>,  <code>0.31.0-0</code>,  <code>0.30.0-0</code>,  <code>0.29.0-0</code>,  <code>0.28.0-0</code>,  <code>0.27.0-1</code>,  <code>0.26.0-1</code>,  <code>0.25.0-1</code>,  <code>0.24.0-1</code>,  </span></summary>
      

      ``0.32.0-0``,  ``0.31.0-0``,  ``0.30.0-0``,  ``0.29.0-0``,  ``0.28.0-0``,  ``0.27.0-1``,  ``0.26.0-1``,  ``0.25.0-1``,  ``0.24.0-1``,  ``0.24.0-0``,  ``0.23.0-0``,  ``0.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
   :depends pyspark: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install adam

   and update with::

      conda update adam

   or use the docker container::

      docker pull quay.io/biocontainers/adam:<tag>

   (see `adam/tags`_ for valid values for ``<tag>``)


.. |downloads_adam| image:: https://img.shields.io/conda/dn/bioconda/adam.svg?style=flat
   :target: https://anaconda.org/bioconda/adam
   :alt:   (downloads)
.. |docker_adam| image:: https://quay.io/repository/biocontainers/adam/status
   :target: https://quay.io/repository/biocontainers/adam
.. _`adam/tags`: https://quay.io/repository/biocontainers/adam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adam/README.html