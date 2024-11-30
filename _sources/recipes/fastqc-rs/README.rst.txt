:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqc-rs'
.. highlight: bash

fastqc-rs
=========

.. conda:recipe:: fastqc-rs
   :replaces_section_title:
   :noindex:

   A fast quality control tool for FASTQ files written in rust.

   :homepage: https://fastqc-rs.github.io
   :developer docs: https://github.com/fastqc-rs/fastqc-rs
   :license: MIT
   :recipe: /`fastqc-rs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqc-rs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqc-rs/meta.yaml>`_

   


.. conda:package:: fastqc-rs

   |downloads_fastqc-rs| |docker_fastqc-rs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.4-0</code>,  <code>0.3.2-2</code>,  <code>0.3.2-1</code>,  <code>0.3.2-0</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-2</code>,  </span></summary>
      

      ``0.3.4-0``,  ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends freetype: ``>=2.12.1,<3.0a0``
   :depends libexpat: ``>=2.6.2,<3.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends openssl: ``>=3.3.1,<4.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install fastqc-rs

   and update with::

      mamba update fastqc-rs

  To create a new environment, run::

      mamba create --name myenvname fastqc-rs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastqc-rs:<tag>

   (see `fastqc-rs/tags`_ for valid values for ``<tag>``)


.. |downloads_fastqc-rs| image:: https://img.shields.io/conda/dn/bioconda/fastqc-rs.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqc-rs
   :alt:   (downloads)
.. |docker_fastqc-rs| image:: https://quay.io/repository/biocontainers/fastqc-rs/status
   :target: https://quay.io/repository/biocontainers/fastqc-rs
.. _`fastqc-rs/tags`: https://quay.io/repository/biocontainers/fastqc-rs?tab=tags


.. raw:: html

    <script>
        var package = "fastqc-rs";
        var versions = ["0.3.4","0.3.2","0.3.2","0.3.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqc-rs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqc-rs/README.html