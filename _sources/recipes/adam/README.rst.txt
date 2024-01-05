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
   :license: Apache-2.0
   :recipe: /`adam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adam/meta.yaml>`_

   


.. conda:package:: adam

   |downloads_adam| |docker_adam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-0</code>,  <code>1.0-0</code>,  <code>0.37.0-0</code>,  <code>0.36.0-0</code>,  <code>0.35.0-0</code>,  <code>0.34.0-1</code>,  <code>0.34.0-0</code>,  <code>0.33.0-0</code>,  <code>0.32.0-0</code>,  </span></summary>
      

      ``1.0.1-0``,  ``1.0-0``,  ``0.37.0-0``,  ``0.36.0-0``,  ``0.35.0-0``,  ``0.34.0-1``,  ``0.34.0-0``,  ``0.33.0-0``,  ``0.32.0-0``,  ``0.31.0-0``,  ``0.30.0-0``,  ``0.29.0-0``,  ``0.28.0-0``,  ``0.27.0-1``,  ``0.26.0-1``,  ``0.25.0-1``,  ``0.24.0-1``,  ``0.24.0-0``,  ``0.23.0-0``,  ``0.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
   :depends pyspark: ``>=3.2.1``
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

      mamba install adam

   and update with::

      mamba update adam

  To create a new environment, run::

      mamba create --name myenvname adam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/adam:<tag>

   (see `adam/tags`_ for valid values for ``<tag>``)


.. |downloads_adam| image:: https://img.shields.io/conda/dn/bioconda/adam.svg?style=flat
   :target: https://anaconda.org/bioconda/adam
   :alt:   (downloads)
.. |docker_adam| image:: https://quay.io/repository/biocontainers/adam/status
   :target: https://quay.io/repository/biocontainers/adam
.. _`adam/tags`: https://quay.io/repository/biocontainers/adam?tab=tags


.. raw:: html

    <script>
        var package = "adam";
        var versions = ["1.0.1","1.0","0.37.0","0.36.0","0.35.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adam/README.html