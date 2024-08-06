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

         <details><summary><span class="truncated-version-list"><code>0.0.29-0</code>,  <code>0.0.28-0</code>,  <code>0.0.27-0</code>,  <code>0.0.26-0</code>,  <code>0.0.25-0</code>,  <code>0.0.24-0</code>,  <code>0.0.23-0</code>,  <code>0.0.22-0</code>,  <code>0.0.21-0</code>,  </span></summary>
      

      ``0.0.29-0``,  ``0.0.28-0``,  ``0.0.27-0``,  ``0.0.26-0``,  ``0.0.25-0``,  ``0.0.24-0``,  ``0.0.23-0``,  ``0.0.22-0``,  ``0.0.21-0``,  ``0.0.20-0``,  ``0.0.19-0``,  ``0.0.18-0``,  ``0.0.17-0``,  ``0.0.14-0``,  ``0.0.13-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends defusedxml: 
   :depends duckdb: 
   :depends pandas: 
   :depends pandas_schema: 
   :depends pyaml: 
   :depends pyarrow: 
   :depends pytest: 
   :depends python: ``>=3.5``
   :depends rdflib: 
   :depends requests: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sdrf-pipelines

   and update with::

      mamba update sdrf-pipelines

  To create a new environment, run::

      mamba create --name myenvname sdrf-pipelines

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["0.0.29","0.0.28","0.0.27","0.0.26","0.0.25"];
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