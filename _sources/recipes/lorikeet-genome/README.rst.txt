:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lorikeet-genome'
.. highlight: bash

lorikeet-genome
===============

.. conda:recipe:: lorikeet-genome
   :replaces_section_title:
   :noindex:

   Metagenomic Variant Calling \& Diversity Analysis

   :homepage: https://github.com/rhysnewell/Lorikeet
   :documentation: https://rhysnewell.github.io/Lorikeet/
   
   :license: GPL3
   :recipe: /`lorikeet-genome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorikeet-genome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorikeet-genome/meta.yaml>`_

   Lorikeet aims to call variants in metagenomes using local reassembly of haplotypes.


.. conda:package:: lorikeet-genome

   |downloads_lorikeet-genome| |docker_lorikeet-genome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.2-0</code>,  <code>0.7.3-1</code>,  <code>0.7.3-0</code>,  <code>0.7.2-1</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.6-0</code>,  <code>0.5.0-0</code>,  </span></summary>
      

      ``0.8.2-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.6-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends bwa: ``>=0.7.17``
   :depends bwa-mem2: 
   :depends cmake: ``>=3.21``
   :depends coreutils: 
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends minimap2: ``>=2.24``
   :depends numpy: 
   :depends openssl: ``>=3.2.0,<4.0a0``
   :depends pip: 
   :depends polars: ``>=0.18``
   :depends prodigal: 
   :depends python: ``3.10``
   :depends samtools: ``>=1.9``
   :depends scikit-allel: ``>=1.3.6``
   :depends scipy: ``>=1.11``
   :depends svim: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install lorikeet-genome

   and update with::

      mamba update lorikeet-genome

  To create a new environment, run::

      mamba create --name myenvname lorikeet-genome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lorikeet-genome:<tag>

   (see `lorikeet-genome/tags`_ for valid values for ``<tag>``)


.. |downloads_lorikeet-genome| image:: https://img.shields.io/conda/dn/bioconda/lorikeet-genome.svg?style=flat
   :target: https://anaconda.org/bioconda/lorikeet-genome
   :alt:   (downloads)
.. |docker_lorikeet-genome| image:: https://quay.io/repository/biocontainers/lorikeet-genome/status
   :target: https://quay.io/repository/biocontainers/lorikeet-genome
.. _`lorikeet-genome/tags`: https://quay.io/repository/biocontainers/lorikeet-genome?tab=tags


.. raw:: html

    <script>
        var package = "lorikeet-genome";
        var versions = ["0.8.2","0.7.3","0.7.3","0.7.2","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lorikeet-genome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lorikeet-genome/README.html