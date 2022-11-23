:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sdrf-pipelines'
.. highlight: bash

sdrf-pipelines
==============

.. conda:recipe:: sdrf-pipelines
   :replaces_section_title:
   :noindex:

   Translate\, convert SDRF to configuration pipelines

   :homepage: https://github.com/bigbio/sdrf-pipelines
   :license: Apache 2
   :recipe: /`sdrf-pipelines <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdrf-pipelines>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sdrf-pipelines/meta.yaml>`_

   


.. conda:package:: sdrf-pipelines

   |downloads_sdrf-pipelines| |docker_sdrf-pipelines|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.22-0</code>,  <code>0.0.21-0</code>,  <code>0.0.20-0</code>,  <code>0.0.19-0</code>,  <code>0.0.18-0</code>,  <code>0.0.17-0</code>,  <code>0.0.14-0</code>,  <code>0.0.13-0</code>,  <code>0.0.12-0</code>,  </span></summary>
      

      ``0.0.22-0``,  ``0.0.21-0``,  ``0.0.20-0``,  ``0.0.19-0``,  ``0.0.18-0``,  ``0.0.17-0``,  ``0.0.14-0``,  ``0.0.13-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends pandas: 
   :depends pandas_schema: 
   :depends pyaml: 
   :depends pytest: 
   :depends python: ``>=3.5``
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sdrf-pipelines

   and update with::

      conda update sdrf-pipelines

   or use the docker container::

      docker pull quay.io/biocontainers/sdrf-pipelines:<tag>

   (see `sdrf-pipelines/tags`_ for valid values for ``<tag>``)


.. |downloads_sdrf-pipelines| image:: https://img.shields.io/conda/dn/bioconda/sdrf-pipelines.svg?style=flat
   :target: https://anaconda.org/bioconda/sdrf-pipelines
   :alt:   (downloads)
.. |docker_sdrf-pipelines| image:: https://quay.io/repository/biocontainers/sdrf-pipelines/status
   :target: https://quay.io/repository/biocontainers/sdrf-pipelines
.. _`sdrf-pipelines/tags`: https://quay.io/repository/biocontainers/sdrf-pipelines?tab=tags


.. raw:: html

    <script>
        var package = "sdrf-pipelines";
        var versions = ["0.0.22","0.0.21","0.0.20","0.0.19","0.0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sdrf-pipelines/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sdrf-pipelines/README.html