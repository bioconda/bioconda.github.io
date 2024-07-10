:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamhash'
.. highlight: bash

bamhash
=======

.. conda:recipe:: bamhash/1.0
   :replaces_section_title:
   :noindex:

   Hash BAM and FASTQ files to verify data integrity

   :homepage: https://github.com/DecodeGenetics/BamHash
   :license: GPL-3-0
   :recipe: /`bamhash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamhash>`_/`1.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamhash/1.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamhash/1.0/meta.yaml>`_

   


.. conda:package:: bamhash

   |downloads_bamhash| |docker_bamhash|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1-8</code>,  <code>1.1-7</code>,  <code>1.1-6</code>,  <code>1.1-5</code>,  <code>1.1-4</code>,  <code>1.1-3</code>,  <code>1.1-2</code>,  <code>1.1-1</code>,  <code>1.1-0</code>,  </span></summary>
      

      ``1.1-8``,  ``1.1-7``,  ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openssl: ``>=3.1.0,<4.0a0``
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

      mamba install bamhash

   and update with::

      mamba update bamhash

  To create a new environment, run::

      mamba create --name myenvname bamhash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamhash:<tag>

   (see `bamhash/tags`_ for valid values for ``<tag>``)


.. |downloads_bamhash| image:: https://img.shields.io/conda/dn/bioconda/bamhash.svg?style=flat
   :target: https://anaconda.org/bioconda/bamhash
   :alt:   (downloads)
.. |docker_bamhash| image:: https://quay.io/repository/biocontainers/bamhash/status
   :target: https://quay.io/repository/biocontainers/bamhash
.. _`bamhash/tags`: https://quay.io/repository/biocontainers/bamhash?tab=tags


.. raw:: html

    <script>
        var package = "bamhash";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamhash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamhash/README.html