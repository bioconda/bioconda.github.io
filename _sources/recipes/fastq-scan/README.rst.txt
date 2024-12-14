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

         <details><summary><span class="truncated-version-list"><code>1.0.1-4</code>,  <code>1.0.1-3</code>,  <code>1.0.1-2</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.4.4-1</code>,  <code>0.4.4-0</code>,  </span></summary>
      

      ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3-1``,  ``0.3-0``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends jq: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install fastq-scan

   and update with::

      mamba update fastq-scan

  To create a new environment, run::

      mamba create --name myenvname fastq-scan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
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