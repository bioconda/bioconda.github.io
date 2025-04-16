:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastp'
.. highlight: bash

fastp
=====

.. conda:recipe:: fastp
   :replaces_section_title:
   :noindex:

   A ultra\-fast FASTQ preprocessor with full features \(QC\/adapters\/trimming\/filtering\/splitting...\).

   :homepage: https://github.com/OpenGene/fastp
   :documentation: https://github.com/OpenGene/fastp/blob/v0.24.1/README.md
   
   :license: MIT / MIT
   :recipe: /`fastp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastp/meta.yaml>`_
   :links: biotools: :biotools:`fastp`, usegalaxy-eu: :usegalaxy-eu:`fastp`, doi: :doi:`10.1002/imt2.107`

   


.. conda:package:: fastp

   |downloads_fastp| |docker_fastp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.24.1-0</code>,  <code>0.24.0-1</code>,  <code>0.24.0-0</code>,  <code>0.23.4-5</code>,  <code>0.23.4-4</code>,  <code>0.23.4-3</code>,  <code>0.23.4-2</code>,  <code>0.23.4-1</code>,  <code>0.23.4-0</code>,  </span></summary>
      

      ``0.24.1-0``,  ``0.24.0-1``,  ``0.24.0-0``,  ``0.23.4-5``,  ``0.23.4-4``,  ``0.23.4-3``,  ``0.23.4-2``,  ``0.23.4-1``,  ``0.23.4-0``,  ``0.23.3-0``,  ``0.23.2-5``,  ``0.23.2-4``,  ``0.23.2-3``,  ``0.23.2-2``,  ``0.23.2-1``,  ``0.23.2-0``,  ``0.23.1-0``,  ``0.23.0-0``,  ``0.22.0-0``,  ``0.20.1-1``,  ``0.20.1-0``,  ``0.20.0-0``,  ``0.19.7-0``,  ``0.19.6-0``,  ``0.19.5-0``,  ``0.19.4-0``,  ``0.19.3-0``,  ``0.18.0-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.14.1-0``,  ``0.13.1-0``,  ``0.12.5-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-1``,  ``0.12.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends isa-l: ``>=2.31.1,<3.0a0``
   :depends libdeflate: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install fastp

   and update with::

      mamba update fastp

  To create a new environment, run::

      mamba create --name myenvname fastp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastp:<tag>

   (see `fastp/tags`_ for valid values for ``<tag>``)


.. |downloads_fastp| image:: https://img.shields.io/conda/dn/bioconda/fastp.svg?style=flat
   :target: https://anaconda.org/bioconda/fastp
   :alt:   (downloads)
.. |docker_fastp| image:: https://quay.io/repository/biocontainers/fastp/status
   :target: https://quay.io/repository/biocontainers/fastp
.. _`fastp/tags`: https://quay.io/repository/biocontainers/fastp?tab=tags


.. raw:: html

    <script>
        var package = "fastp";
        var versions = ["0.24.1","0.24.0","0.24.0","0.23.4","0.23.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastp/README.html