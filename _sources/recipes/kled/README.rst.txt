:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kled'
.. highlight: bash

kled
====

.. conda:recipe:: kled
   :replaces_section_title:
   :noindex:

   An ultra\-fast and sensitive structural variant detection tool for long\-read sequencing data.

   :homepage: https://github.com/CoREse/kled
   :documentation: https://github.com/CoREse/kled/blob/v1.2.9H11/README.md
   
   :license: MIT / MIT
   :recipe: /`kled <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kled>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kled/meta.yaml>`_
   :links: biotools: :biotools:`kled`, doi: :doi:`10.1093/bib/bbae049`, doi: :doi:`10.3389/fgene.2024.1435087`

   Kled is designed to call SVs nicely and quickly using long\-read sequencing data. 
   It takes mapped reads file \(bam\) as input and reports SVs to the stdout in the 
   VCF file format. Kled can yield precise and comprehensive SV detection results 
   within minutes and can run on any modern computer without needing of any field 
   knowledge of the user to perform the SV detection.



.. conda:package:: kled

   |downloads_kled| |docker_kled|

   :versions:
      
      

      ``1.2.9H11-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: ``>=1.84``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gmp: ``>=6.3.0,<7.0a0``
   :depends libcurl: ``>=8.14.1,<9.0a0``
   :depends libdeflate: ``>=1.22,<1.23.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openmpi: ``>=4.1.6,<5.0a0``
   :depends openssl: ``>=3.5.1,<4.0a0``
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

      mamba install kled

   and update with::

      mamba update kled

  To create a new environment, run::

      mamba create --name myenvname kled

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kled:<tag>

   (see `kled/tags`_ for valid values for ``<tag>``)


.. |downloads_kled| image:: https://img.shields.io/conda/dn/bioconda/kled.svg?style=flat
   :target: https://anaconda.org/bioconda/kled
   :alt:   (downloads)
.. |docker_kled| image:: https://quay.io/repository/biocontainers/kled/status
   :target: https://quay.io/repository/biocontainers/kled
.. _`kled/tags`: https://quay.io/repository/biocontainers/kled?tab=tags


.. raw:: html

    <script>
        var package = "kled";
        var versions = ["1.2.9H11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kled/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kled/README.html