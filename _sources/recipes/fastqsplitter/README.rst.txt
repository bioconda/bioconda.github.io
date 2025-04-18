:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqsplitter'
.. highlight: bash

fastqsplitter
=============

.. conda:recipe:: fastqsplitter
   :replaces_section_title:
   :noindex:

   Splits FASTQ files evenly.

   :homepage: https://github.com/LUMC/fastqsplitter
   :documentation: https://fastqsplitter.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`fastqsplitter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqsplitter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqsplitter/meta.yaml>`_

   


.. conda:package:: fastqsplitter

   |downloads_fastqsplitter| |docker_fastqsplitter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-8</code>,  <code>1.2.0-7</code>,  <code>1.2.0-6</code>,  <code>1.2.0-5</code>,  <code>1.2.0-4</code>,  <code>1.2.0-3</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.2.0-8``,  ``1.2.0-7``,  ``1.2.0-6``,  ``1.2.0-5``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends pigz: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends xopen: ``>=0.8.1``
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

      mamba install fastqsplitter

   and update with::

      mamba update fastqsplitter

  To create a new environment, run::

      mamba create --name myenvname fastqsplitter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastqsplitter:<tag>

   (see `fastqsplitter/tags`_ for valid values for ``<tag>``)


.. |downloads_fastqsplitter| image:: https://img.shields.io/conda/dn/bioconda/fastqsplitter.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqsplitter
   :alt:   (downloads)
.. |docker_fastqsplitter| image:: https://quay.io/repository/biocontainers/fastqsplitter/status
   :target: https://quay.io/repository/biocontainers/fastqsplitter
.. _`fastqsplitter/tags`: https://quay.io/repository/biocontainers/fastqsplitter?tab=tags


.. raw:: html

    <script>
        var package = "fastqsplitter";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqsplitter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqsplitter/README.html