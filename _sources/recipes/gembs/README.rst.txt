:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gembs'
.. highlight: bash

gembs
=====

.. conda:recipe:: gembs
   :replaces_section_title:
   :noindex:

   gemBS is a bioinformatics pipeline designed for high throughput analysis of DNA methylation from Whole Genome Bisulfite Sequencing data \(WGBS\).

   :homepage: https://github.com/heathsc/gemBS
   :license: GPL-3.0
   :recipe: /`gembs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gembs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gembs/meta.yaml>`_
   :links: doi: :doi:`10.1101/201988`

   


.. conda:package:: gembs

   |downloads_gembs| |docker_gembs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.5_IHEC-7</code>,  <code>3.5.5_IHEC-6</code>,  <code>3.5.5_IHEC-5</code>,  <code>3.5.5_IHEC-4</code>,  <code>3.5.5_IHEC-3</code>,  <code>3.5.5_IHEC-2</code>,  <code>3.5.5_IHEC-1</code>,  <code>3.5.5_IHEC-0</code>,  <code>3.5.1_IHEC-0</code>,  </span></summary>
      

      ``3.5.5_IHEC-7``,  ``3.5.5_IHEC-6``,  ``3.5.5_IHEC-5``,  ``3.5.5_IHEC-4``,  ``3.5.5_IHEC-3``,  ``3.5.5_IHEC-2``,  ``3.5.5_IHEC-1``,  ``3.5.5_IHEC-0``,  ``3.5.1_IHEC-0``,  ``3.5.0-1``,  ``3.5.0-0``,  ``3.2.0-5``,  ``3.2.0-4``,  ``3.2.0-3``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends bs_call: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gem3-mapper: 
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends matplotlib-base: 
   :depends multiprocess: 
   :depends openssl: ``>=3.1.0,<4.0a0``
   :depends pigz: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
   :depends setuptools: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-wigtobigwig: 
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

      mamba install gembs

   and update with::

      mamba update gembs

  To create a new environment, run::

      mamba create --name myenvname gembs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gembs:<tag>

   (see `gembs/tags`_ for valid values for ``<tag>``)


.. |downloads_gembs| image:: https://img.shields.io/conda/dn/bioconda/gembs.svg?style=flat
   :target: https://anaconda.org/bioconda/gembs
   :alt:   (downloads)
.. |docker_gembs| image:: https://quay.io/repository/biocontainers/gembs/status
   :target: https://quay.io/repository/biocontainers/gembs
.. _`gembs/tags`: https://quay.io/repository/biocontainers/gembs?tab=tags


.. raw:: html

    <script>
        var package = "gembs";
        var versions = ["3.5.5_IHEC","3.5.5_IHEC","3.5.5_IHEC","3.5.5_IHEC","3.5.5_IHEC"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gembs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gembs/README.html