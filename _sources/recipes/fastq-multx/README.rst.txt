:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-multx'
.. highlight: bash

fastq-multx
===========

.. conda:recipe:: fastq-multx
   :replaces_section_title:
   :noindex:

   Demultiplexes a fastq. Capable of auto\-determining barcode id\'s based on a master set fields. Keeps multiple reads in\-sync during demultiplexing. Can verify that the reads are in\-sync as well\, and fail if they\'re not.

   :homepage: https://github.com/brwnj/fastq-multx
   :license: MIT
   :recipe: /`fastq-multx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-multx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-multx/meta.yaml>`_

   


.. conda:package:: fastq-multx

   |downloads_fastq-multx| |docker_fastq-multx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-4</code>,  <code>1.4.2-3</code>,  <code>1.4.2-2</code>,  <code>1.4.2-1</code>,  <code>1.4.2-0</code>,  <code>1.4.0-0</code>,  <code>1.3.1-3</code>,  <code>1.3.1-2</code>,  <code>1.3.0-2</code>,  </span></summary>
      

      ``1.4.2-4``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.0-2``,  ``1.3.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install fastq-multx

   and update with::

      mamba update fastq-multx

  To create a new environment, run::

      mamba create --name myenvname fastq-multx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastq-multx:<tag>

   (see `fastq-multx/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-multx| image:: https://img.shields.io/conda/dn/bioconda/fastq-multx.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-multx
   :alt:   (downloads)
.. |docker_fastq-multx| image:: https://quay.io/repository/biocontainers/fastq-multx/status
   :target: https://quay.io/repository/biocontainers/fastq-multx
.. _`fastq-multx/tags`: https://quay.io/repository/biocontainers/fastq-multx?tab=tags


.. raw:: html

    <script>
        var package = "fastq-multx";
        var versions = ["1.4.2","1.4.2","1.4.2","1.4.2","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-multx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-multx/README.html