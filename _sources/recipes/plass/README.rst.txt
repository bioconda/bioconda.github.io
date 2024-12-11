:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plass'
.. highlight: bash

plass
=====

.. conda:recipe:: plass
   :replaces_section_title:
   :noindex:

   Plass \(Protein\-Level ASSembler\) and PenguiN \(Protein\-guided Nucleotide assembler\) are methods to assemble short read sequencing data on a protein level to proteins or DNA contigs

   :homepage: https://github.com/soedinglab/plass
   :license: GPLv3
   :recipe: /`plass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plass/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-019-0437-4`, doi: :doi:`10.1101/2024.03.29.587318`, biotools: :biotools:`plass`

   


.. conda:package:: plass

   |downloads_plass| |docker_plass|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.cf8933-2</code>,  <code>5.cf8933-1</code>,  <code>5.cf8933-0</code>,  <code>4.687d7-5</code>,  <code>4.687d7-4</code>,  <code>4.687d7-3</code>,  <code>4.687d7-2</code>,  <code>4.687d7-1</code>,  <code>4.687d7-0</code>,  </span></summary>
      

      ``5.cf8933-2``,  ``5.cf8933-1``,  ``5.cf8933-0``,  ``4.687d7-5``,  ``4.687d7-4``,  ``4.687d7-3``,  ``4.687d7-2``,  ``4.687d7-1``,  ``4.687d7-0``,  ``3.764a3-0``,  ``2.c7e35-1``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gawk: 
   :depends libcxx: ``>=18``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends llvm-openmp: ``>=18.1.8``
   :depends llvm-openmp: ``>=19.1.5``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends zlib: 
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

      mamba install plass

   and update with::

      mamba update plass

  To create a new environment, run::

      mamba create --name myenvname plass

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plass:<tag>

   (see `plass/tags`_ for valid values for ``<tag>``)


.. |downloads_plass| image:: https://img.shields.io/conda/dn/bioconda/plass.svg?style=flat
   :target: https://anaconda.org/bioconda/plass
   :alt:   (downloads)
.. |docker_plass| image:: https://quay.io/repository/biocontainers/plass/status
   :target: https://quay.io/repository/biocontainers/plass
.. _`plass/tags`: https://quay.io/repository/biocontainers/plass?tab=tags


.. raw:: html

    <script>
        var package = "plass";
        var versions = ["5.cf8933","5.cf8933","5.cf8933","4.687d7","4.687d7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plass/README.html