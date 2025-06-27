:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-and-furious'
.. highlight: bash

fastq-and-furious
=================

.. conda:recipe:: fastq-and-furious
   :replaces_section_title:
   :noindex:

   Fast handling of FASTQ files

   :homepage: https://github.com/lgautier/fastq-and-furious
   :license: MIT / MIT License
   :recipe: /`fastq-and-furious <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-and-furious>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-and-furious/meta.yaml>`_

   


.. conda:package:: fastq-and-furious

   |downloads_fastq-and-furious| |docker_fastq-and-furious|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.2-6</code>,  <code>0.3.2-5</code>,  <code>0.3.2-4</code>,  <code>0.3.2-3</code>,  <code>0.3.2-1</code>,  <code>0.3.2-0</code>,  <code>0.3.1-3</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  </span></summary>
      

      ``0.3.2-6``,  ``0.3.2-5``,  ``0.3.2-4``,  ``0.3.2-3``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install fastq-and-furious

   and update with::

      mamba update fastq-and-furious

  To create a new environment, run::

      mamba create --name myenvname fastq-and-furious

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastq-and-furious:<tag>

   (see `fastq-and-furious/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-and-furious| image:: https://img.shields.io/conda/dn/bioconda/fastq-and-furious.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-and-furious
   :alt:   (downloads)
.. |docker_fastq-and-furious| image:: https://quay.io/repository/biocontainers/fastq-and-furious/status
   :target: https://quay.io/repository/biocontainers/fastq-and-furious
.. _`fastq-and-furious/tags`: https://quay.io/repository/biocontainers/fastq-and-furious?tab=tags


.. raw:: html

    <script>
        var package = "fastq-and-furious";
        var versions = ["0.3.2","0.3.2","0.3.2","0.3.2","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-and-furious/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-and-furious/README.html