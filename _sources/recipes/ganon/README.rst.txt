:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ganon'
.. highlight: bash

ganon
=====

.. conda:recipe:: ganon
   :replaces_section_title:
   :noindex:

   ganon2 classifies genomic sequences against large sets of references efficiently\,

   :homepage: https://github.com/pirovc/ganon
   :license: MIT / MIT License
   :recipe: /`ganon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ganon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ganon/meta.yaml>`_
   :links: doi: :doi:`10.1101/406017`

   ganon2 classifies genomic sequences against large sets of references efficiently\, 
   with integrated download and update of databases \(refseq\/genbank\)\, taxonomic profiling 
   \(ncbi\/gtdb\)\, binning and hierarchical classification\, customized reporting and more



.. conda:package:: ganon

   |downloads_ganon| |docker_ganon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.9.0-0</code>,  <code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  </span></summary>
      

      ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends coreutils: 
   :depends curl: 
   :depends diffutils: 
   :depends genome_updater: ``>=0.6.3``
   :depends grep: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends multitax: ``>=1.3.1``
   :depends pandas: ``>=1.2.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends raptor: ``3.*``
   :depends raptor: ``>=3.0.1,<4.0a0``
   :depends seqan3: ``>=3.3.0,<4.0a0``
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

      mamba install ganon

   and update with::

      mamba update ganon

  To create a new environment, run::

      mamba create --name myenvname ganon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ganon:<tag>

   (see `ganon/tags`_ for valid values for ``<tag>``)


.. |downloads_ganon| image:: https://img.shields.io/conda/dn/bioconda/ganon.svg?style=flat
   :target: https://anaconda.org/bioconda/ganon
   :alt:   (downloads)
.. |docker_ganon| image:: https://quay.io/repository/biocontainers/ganon/status
   :target: https://quay.io/repository/biocontainers/ganon
.. _`ganon/tags`: https://quay.io/repository/biocontainers/ganon?tab=tags


.. raw:: html

    <script>
        var package = "ganon";
        var versions = ["2.1.0","2.0.1","2.0.0","1.9.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ganon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ganon/README.html