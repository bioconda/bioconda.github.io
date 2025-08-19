:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-tools'
.. highlight: bash

fastq-tools
===========

.. conda:recipe:: fastq-tools
   :replaces_section_title:
   :noindex:

   A collection of fastq manipulation scripts written in C for speed.

   :homepage: https://github.com/dcjones/fastq-tools
   :license: MIT / MIT
   :recipe: /`fastq-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-tools/meta.yaml>`_

   


.. conda:package:: fastq-tools

   |downloads_fastq-tools| |docker_fastq-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.3-6</code>,  <code>0.8.3-5</code>,  <code>0.8.3-4</code>,  <code>0.8.3-3</code>,  <code>0.8.3-2</code>,  <code>0.8.3-1</code>,  <code>0.8.3-0</code>,  <code>0.8.1-0</code>,  <code>0.8-3</code>,  </span></summary>
      

      ``0.8.3-6``,  ``0.8.3-5``,  ``0.8.3-4``,  ``0.8.3-3``,  ``0.8.3-2``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.1-0``,  ``0.8-3``,  ``0.8-2``,  ``0.8-1``,  ``0.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install fastq-tools

   and update with::

      mamba update fastq-tools

  To create a new environment, run::

      mamba create --name myenvname fastq-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastq-tools:<tag>

   (see `fastq-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-tools| image:: https://img.shields.io/conda/dn/bioconda/fastq-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-tools
   :alt:   (downloads)
.. |docker_fastq-tools| image:: https://quay.io/repository/biocontainers/fastq-tools/status
   :target: https://quay.io/repository/biocontainers/fastq-tools
.. _`fastq-tools/tags`: https://quay.io/repository/biocontainers/fastq-tools?tab=tags


.. raw:: html

    <script>
        var package = "fastq-tools";
        var versions = ["0.8.3","0.8.3","0.8.3","0.8.3","0.8.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-tools/README.html