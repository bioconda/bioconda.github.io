:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqpuri'
.. highlight: bash

fastqpuri
=========

.. conda:recipe:: fastqpuri
   :replaces_section_title:
   :noindex:

   fastq quality assessment and filtering tool

   :homepage: https://github.com/jengelmann/FastqPuri
   :license: GPL3.0
   :recipe: /`fastqpuri <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqpuri>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqpuri/meta.yaml>`_

   


.. conda:package:: fastqpuri

   |downloads_fastqpuri| |docker_fastqpuri|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-8</code>,  <code>1.0.7-7</code>,  <code>1.0.7-6</code>,  <code>1.0.7-5</code>,  <code>1.0.7-4</code>,  <code>1.0.7-3</code>,  <code>1.0.7-2</code>,  <code>1.0.7-1</code>,  <code>1.0.7-0</code>,  </span></summary>
      

      ``1.0.7-8``,  ``1.0.7-7``,  ``1.0.7-6``,  ``1.0.7-5``,  ``1.0.7-4``,  ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-6``,  ``1.0.6b-7``,  ``1.0.5-5``,  ``1.0.5-3``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends pandoc: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends zlib: 
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

      mamba install fastqpuri

   and update with::

      mamba update fastqpuri

  To create a new environment, run::

      mamba create --name myenvname fastqpuri

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastqpuri:<tag>

   (see `fastqpuri/tags`_ for valid values for ``<tag>``)


.. |downloads_fastqpuri| image:: https://img.shields.io/conda/dn/bioconda/fastqpuri.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqpuri
   :alt:   (downloads)
.. |docker_fastqpuri| image:: https://quay.io/repository/biocontainers/fastqpuri/status
   :target: https://quay.io/repository/biocontainers/fastqpuri
.. _`fastqpuri/tags`: https://quay.io/repository/biocontainers/fastqpuri?tab=tags


.. raw:: html

    <script>
        var package = "fastqpuri";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqpuri/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqpuri/README.html