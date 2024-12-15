:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcftools'
.. highlight: bash

bcftools
========

.. conda:recipe:: bcftools
   :replaces_section_title:
   :noindex:

   BCFtools is a set of utilities that manipulate variant calls in the Variant Call Format \(VCF\) and its binary counterpart BCF. All commands work transparently with both VCFs and BCFs\, both uncompressed and BGZF\-compressed.  Most commands accept VCF\, bgzipped VCF and BCF with filetype detected automatically even when streaming from a pipe. Indexed VCF and BCF will work in all situations. Un\-indexed VCF and BCF and streams will work in most\, but not all situations.

   :homepage: https://github.com/samtools/bcftools
   :license: GPL
   :recipe: /`bcftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcftools/meta.yaml>`_
   :links: biotools: :biotools:`bcftools`, usegalaxy-eu: :usegalaxy-eu:`bcftools_merge`, doi: :doi:`10.1093/bioinformatics/btp352`

   


.. conda:package:: bcftools

   |downloads_bcftools| |docker_bcftools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.21-1</code>,  <code>1.21-0</code>,  <code>1.20-1</code>,  <code>1.20-0</code>,  <code>1.19-1</code>,  <code>1.19-0</code>,  <code>1.18-0</code>,  <code>1.17-1</code>,  <code>1.17-0</code>,  </span></summary>
      

      ``1.21-1``,  ``1.21-0``,  ``1.20-1``,  ``1.20-0``,  ``1.19-1``,  ``1.19-0``,  ``1.18-0``,  ``1.17-1``,  ``1.17-0``,  ``1.16-2``,  ``1.16-1``,  ``1.16-0``,  ``1.15.1-1``,  ``1.15.1-0``,  ``1.15-2``,  ``1.15-1``,  ``1.15-0``,  ``1.14-1``,  ``1.14-0``,  ``1.13-0``,  ``1.12-1``,  ``1.12-0``,  ``1.11-0``,  ``1.10.2-3``,  ``1.10.2-2``,  ``1.10.2-1``,  ``1.10.2-0``,  ``1.10.1-0``,  ``1.10-0``,  ``1.9-9``,  ``1.9-8``,  ``1.9-7``,  ``1.9-6``,  ``1.9-5``,  ``1.9-4``,  ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.8-3``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``,  ``1.7-0``,  ``1.6-1``,  ``1.6-0``,  ``1.5-4``,  ``1.5-3``,  ``1.5-2``,  ``1.5-1``,  ``1.5-0``,  ``1.4.1-0``,  ``1.4-0``,  ``1.3.1-7``,  ``1.3.1-6``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-9``,  ``1.3-8``,  ``1.3-7``,  ``1.3-6``,  ``1.3-5``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: 
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

      mamba install bcftools

   and update with::

      mamba update bcftools

  To create a new environment, run::

      mamba create --name myenvname bcftools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bcftools:<tag>

   (see `bcftools/tags`_ for valid values for ``<tag>``)


.. |downloads_bcftools| image:: https://img.shields.io/conda/dn/bioconda/bcftools.svg?style=flat
   :target: https://anaconda.org/bioconda/bcftools
   :alt:   (downloads)
.. |docker_bcftools| image:: https://quay.io/repository/biocontainers/bcftools/status
   :target: https://quay.io/repository/biocontainers/bcftools
.. _`bcftools/tags`: https://quay.io/repository/biocontainers/bcftools?tab=tags


.. raw:: html

    <script>
        var package = "bcftools";
        var versions = ["1.21","1.21","1.20","1.20","1.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcftools/README.html