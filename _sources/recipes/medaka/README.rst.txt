:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'medaka'
.. highlight: bash

medaka
======

.. conda:recipe:: medaka
   :replaces_section_title:
   :noindex:

   A tool to create consensus sequences and variant calls from nanopore sequencing data using neural networks.

   :homepage: https://github.com/nanoporetech/medaka
   :documentation: https://github.com/nanoporetech/medaka/blob/v2.0.1/README.md
   
   :license: OTHER / MPL-2.0
   :recipe: /`medaka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medaka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medaka/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`medaka_consensus`, usegalaxy-eu: :usegalaxy-eu:`medaka_consensus_pipeline`, usegalaxy-eu: :usegalaxy-eu:`medaka_variant`, usegalaxy-eu: :usegalaxy-eu:`medaka_variant_pipeline`, biotools: :biotools:`medaka`

   


.. conda:package:: medaka

   |downloads_medaka| |docker_medaka|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-2</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.11.3-0</code>,  <code>1.11.2-0</code>,  <code>1.11.1-0</code>,  <code>1.11.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``2.0.1-2``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.11.3-0``,  ``1.11.2-0``,  ``1.11.1-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.7.2-1``,  ``1.7.2-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.1-2``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.6-1``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.12.1-0``,  ``0.11.5-1``,  ``0.11.5-0``,  ``0.11.4-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-1``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.2-0``,  ``0.6.0-0``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``>=1.14``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends cffi: 
   :depends grpcio: 
   :depends h5py: 
   :depends htslib: ``>=1.20``
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends intervaltree: 
   :depends libcurl: ``>=8.13.0,<9.0a0``
   :depends libgcc: ``>=13``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mappy: 
   :depends minimap2: ``>=2.28``
   :depends numpy: ``>=1.21.0,<2.0.0``
   :depends ont-fast5-api: 
   :depends parasail-python: 
   :depends pyabpoa: 
   :depends pysam: ``>=0.16.0.1``
   :depends pyspoa: ``>=0.2.1``
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python-edlib: 
   :depends python_abi: ``3.8.* *_cp38``
   :depends pytorch: ``>=2.3,<2.4``
   :depends requests: 
   :depends samtools: ``>=1.14``
   :depends tqdm: 
   :depends wurlitzer: 
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

      mamba install medaka

   and update with::

      mamba update medaka

  To create a new environment, run::

      mamba create --name myenvname medaka

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/medaka:<tag>

   (see `medaka/tags`_ for valid values for ``<tag>``)


.. |downloads_medaka| image:: https://img.shields.io/conda/dn/bioconda/medaka.svg?style=flat
   :target: https://anaconda.org/bioconda/medaka
   :alt:   (downloads)
.. |docker_medaka| image:: https://quay.io/repository/biocontainers/medaka/status
   :target: https://quay.io/repository/biocontainers/medaka
.. _`medaka/tags`: https://quay.io/repository/biocontainers/medaka?tab=tags


.. raw:: html

    <script>
        var package = "medaka";
        var versions = ["2.0.1","2.0.1","2.0.0","1.11.3","1.11.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/medaka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/medaka/README.html