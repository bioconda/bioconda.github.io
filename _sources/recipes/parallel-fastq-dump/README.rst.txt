:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parallel-fastq-dump'
.. highlight: bash

parallel-fastq-dump
===================

.. conda:recipe:: parallel-fastq-dump
   :replaces_section_title:
   :noindex:

   parallel fastq\-dump wrapper

   :homepage: https://github.com/rvalieris/parallel-fastq-dump
   :license: MIT / MIT License
   :recipe: /`parallel-fastq-dump <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-fastq-dump>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-fastq-dump/meta.yaml>`_

   


.. conda:package:: parallel-fastq-dump

   |downloads_parallel-fastq-dump| |docker_parallel-fastq-dump|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.7-0</code>,  <code>0.6.6-1</code>,  <code>0.6.6-0</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-1</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  </span></summary>
      

      ``0.6.7-0``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3``
   :depends sra-tools: 
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

      mamba install parallel-fastq-dump

   and update with::

      mamba update parallel-fastq-dump

  To create a new environment, run::

      mamba create --name myenvname parallel-fastq-dump

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/parallel-fastq-dump:<tag>

   (see `parallel-fastq-dump/tags`_ for valid values for ``<tag>``)


.. |downloads_parallel-fastq-dump| image:: https://img.shields.io/conda/dn/bioconda/parallel-fastq-dump.svg?style=flat
   :target: https://anaconda.org/bioconda/parallel-fastq-dump
   :alt:   (downloads)
.. |docker_parallel-fastq-dump| image:: https://quay.io/repository/biocontainers/parallel-fastq-dump/status
   :target: https://quay.io/repository/biocontainers/parallel-fastq-dump
.. _`parallel-fastq-dump/tags`: https://quay.io/repository/biocontainers/parallel-fastq-dump?tab=tags


.. raw:: html

    <script>
        var package = "parallel-fastq-dump";
        var versions = ["0.6.7","0.6.6","0.6.6","0.6.5","0.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parallel-fastq-dump/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parallel-fastq-dump/README.html