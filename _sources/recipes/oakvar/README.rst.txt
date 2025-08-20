:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oakvar'
.. highlight: bash

oakvar
======

.. conda:recipe:: oakvar
   :replaces_section_title:
   :noindex:

   OakVar \- Genomic Variant Analysis Platform

   :homepage: https://github.com/rkimoakbioinformatics/oakvar
   :documentation: https://rkimoakbioinformatics.github.io/oakvar/
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`oakvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oakvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oakvar/meta.yaml>`_
   :links: biotools: :biotools:`oakvar`

   


.. conda:package:: oakvar

   |downloads_oakvar| |docker_oakvar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.20-0</code>,  <code>2.12.19-0</code>,  <code>2.12.18-0</code>,  <code>2.12.17-0</code>,  <code>2.12.15-0</code>,  <code>2.12.12-0</code>,  <code>2.12.11-0</code>,  <code>2.12.10-0</code>,  <code>2.12.9-0</code>,  </span></summary>
      

      ``2.12.20-0``,  ``2.12.19-0``,  ``2.12.18-0``,  ``2.12.17-0``,  ``2.12.15-0``,  ``2.12.12-0``,  ``2.12.11-0``,  ``2.12.10-0``,  ``2.12.9-0``,  ``2.12.7-0``,  ``2.12.6-0``,  ``2.12.5-0``,  ``2.12.4-0``,  ``2.12.3-0``,  ``2.12.2-0``,  ``2.11.26-0``,  ``2.11.25-0``,  ``2.11.24-0``,  ``2.11.21-0``,  ``2.11.14-0``,  ``2.11.11-0``,  ``2.11.10-0``,  ``2.11.9-0``,  ``2.11.8-0``,  ``2.11.5-0``,  ``2.11.4-0``,  ``2.11.3-0``,  ``2.11.2-0``,  ``2.11.1-0``,  ``2.11.0-0``,  ``2.10.4-0``,  ``2.10.3-0``,  ``2.10.2-0``,  ``2.10.1-0``,  ``2.9.128-0``,  ``2.9.127-0``,  ``2.9.123-0``,  ``2.9.122-0``,  ``2.9.119-0``,  ``2.9.116-0``,  ``2.9.114-0``,  ``2.9.112-0``,  ``2.9.111-0``,  ``2.9.110-0``,  ``2.9.109-0``,  ``2.9.106-0``,  ``2.9.97-0``,  ``2.9.96-0``,  ``2.9.95-0``,  ``2.9.94-0``,  ``2.9.93-0``,  ``2.9.92-0``,  ``2.9.91-0``,  ``2.9.90-0``,  ``2.9.89-0``,  ``2.9.88-0``,  ``2.9.87-0``,  ``2.9.85-0``,  ``2.9.83-0``,  ``2.9.82-0``,  ``2.9.81-0``,  ``2.9.80-0``,  ``2.9.78-0``,  ``2.9.77-0``,  ``2.9.75-0``,  ``2.9.72-0``,  ``2.9.71-0``,  ``2.9.69-0``,  ``2.9.68-0``,  ``2.9.64-0``,  ``2.9.62-0``,  ``2.9.60-0``,  ``2.9.59-0``,  ``2.9.58-0``,  ``2.9.57-0``,  ``2.9.56-0``,  ``2.9.55-0``,  ``2.9.54-0``,  ``2.9.53-0``,  ``2.9.52-0``,  ``2.9.51-0``,  ``2.9.49-0``,  ``2.9.43-0``,  ``2.9.41-0``,  ``2.9.39-0``,  ``2.9.37-0``,  ``2.9.36-0``,  ``2.9.34-0``,  ``2.9.3-0``,  ``2.9.2-0``,  ``2.9.1-0``,  ``2.8.40-0``,  ``2.8.38-0``,  ``2.8.37-0``,  ``2.8.36-0``,  ``2.8.35-0``,  ``2.8.28-0``,  ``2.7.40-0``

      
      .. raw:: html

         </details>
      

   
   :depends aiohttp: ``<4.0.0``
   :depends aiohttp-cors: 
   :depends aiosqlite: 
   :depends chardet: ``>=3.0.4``
   :depends connectorx: 
   :depends download: 
   :depends duckdb: 
   :depends gdown: 
   :depends intervaltree: 
   :depends liftover: 
   :depends markdown: 
   :depends mpmath: 
   :depends multiprocess: 
   :depends nest-asyncio: 
   :depends oyaml: 
   :depends packaging: 
   :depends pillow: 
   :depends polars: 
   :depends psutil: 
   :depends pyarrow: 
   :depends pyjwt: 
   :depends pysimplegui: 
   :depends python: ``>=3.8``
   :depends python-dateutil: 
   :depends requests: 
   :depends requests-toolbelt: 
   :depends rich: 
   :depends split-file-reader: 
   :depends twobitreader: 
   :depends ujson: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install oakvar

   and update with::

      mamba update oakvar

  To create a new environment, run::

      mamba create --name myenvname oakvar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/oakvar:<tag>

   (see `oakvar/tags`_ for valid values for ``<tag>``)


.. |downloads_oakvar| image:: https://img.shields.io/conda/dn/bioconda/oakvar.svg?style=flat
   :target: https://anaconda.org/bioconda/oakvar
   :alt:   (downloads)
.. |docker_oakvar| image:: https://quay.io/repository/biocontainers/oakvar/status
   :target: https://quay.io/repository/biocontainers/oakvar
.. _`oakvar/tags`: https://quay.io/repository/biocontainers/oakvar?tab=tags


.. raw:: html

    <script>
        var package = "oakvar";
        var versions = ["2.12.20","2.12.19","2.12.18","2.12.17","2.12.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oakvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oakvar/README.html