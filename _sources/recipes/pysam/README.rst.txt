:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysam'
.. highlight: bash

pysam
=====

.. conda:recipe:: pysam
   :replaces_section_title:
   :noindex:

   Pysam is a Python module for reading and manipulating SAM\/BAM\/VCF\/BCF files. It\'s a lightweight wrapper of the htslib C\-API\, the same one that powers samtools\, bcftools\, and tabix.

   :homepage: https://github.com/pysam-developers/pysam
   :license: MIT
   :recipe: /`pysam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysam/meta.yaml>`_
   :links: biotools: :biotools:`pysam`, doi: :doi:`10.1093/bioinformatics/btp352`

   


.. conda:package:: pysam

   |downloads_pysam| |docker_pysam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.22.1-1</code>,  <code>0.22.1-0</code>,  <code>0.22.0-1</code>,  <code>0.22.0-0</code>,  <code>0.21.0-1</code>,  <code>0.21.0-0</code>,  <code>0.20.0-0</code>,  <code>0.19.1-1</code>,  <code>0.19.1-0</code>,  </span></summary>
      

      ``0.22.1-1``,  ``0.22.1-0``,  ``0.22.0-1``,  ``0.22.0-0``,  ``0.21.0-1``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.1-1``,  ``0.19.1-0``,  ``0.19.0-0``,  ``0.18.0-2``,  ``0.18.0-1``,  ``0.18.0-0``,  ``0.17.0-1``,  ``0.17.0-0``,  ``0.16.0.1-3``,  ``0.16.0.1-2``,  ``0.16.0.1-1``,  ``0.16.0.1-0``,  ``0.16.0-1``,  ``0.16.0-0``,  ``0.15.4-1``,  ``0.15.4-0``,  ``0.15.3-3``,  ``0.15.3-1``,  ``0.15.3-0``,  ``0.15.2-11``,  ``0.15.2-10``,  ``0.15.2-9``,  ``0.15.2-8``,  ``0.15.2-7``,  ``0.15.2-6``,  ``0.15.2-5``,  ``0.15.2-4``,  ``0.15.2-3``,  ``0.15.2-2``,  ``0.15.2-1``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.15.0.1-1``,  ``0.15.0.1-0``,  ``0.15.0-0``,  ``0.14.1-1``,  ``0.14.1-0``,  ``0.14.0-2``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0.1-2``,  ``0.12.0.1-1``,  ``0.12.0.1-0``,  ``0.11.2.2-2``,  ``0.11.2.2-1``,  ``0.11.2.2-0``,  ``0.11.2.1-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.0-13``,  ``0.10.0-12``,  ``0.10.0-11``,  ``0.10.0-10``,  ``0.10.0-9``,  ``0.10.0-8``,  ``0.10.0-7``,  ``0.10.0-6``,  ``0.10.0-5``,  ``0.10.0-4``,  ``0.10.0-3``,  ``0.10.0-1``,  ``0.9.1.4-1``,  ``0.9.1.4-0``,  ``0.9.1-12``,  ``0.9.1-11``,  ``0.9.1-10``,  ``0.9.1-9``,  ``0.9.1-8``,  ``0.9.1-7``,  ``0.9.1-6``,  ``0.9.1-5``,  ``0.9.1-4``,  ``0.9.1-3``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.4pre0-0``,  ``0.8.3-9``,  ``0.8.3-8``,  ``0.8.3-7``,  ``0.8.3-6``,  ``0.8.3-5``,  ``0.8.3-4``,  ``0.8.3-3``,  ``0.8.3-2``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.7.7-6``,  ``0.7.7-5``,  ``0.7.7-4``,  ``0.7.7-3``,  ``0.7.7-2``,  ``0.7.7-1``,  ``0.7.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcurl: ``>=8.8.0,<9.0a0``
   :depends libdeflate: ``>=1.20,<1.21.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends openssl: ``>=3.3.1,<4.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install pysam

   and update with::

      mamba update pysam

  To create a new environment, run::

      mamba create --name myenvname pysam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pysam:<tag>

   (see `pysam/tags`_ for valid values for ``<tag>``)


.. |downloads_pysam| image:: https://img.shields.io/conda/dn/bioconda/pysam.svg?style=flat
   :target: https://anaconda.org/bioconda/pysam
   :alt:   (downloads)
.. |docker_pysam| image:: https://quay.io/repository/biocontainers/pysam/status
   :target: https://quay.io/repository/biocontainers/pysam
.. _`pysam/tags`: https://quay.io/repository/biocontainers/pysam?tab=tags


.. raw:: html

    <script>
        var package = "pysam";
        var versions = ["0.22.1","0.22.1","0.22.0","0.22.0","0.21.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysam/README.html