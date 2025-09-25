:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ggcaller'
.. highlight: bash

ggcaller
========

.. conda:recipe:: ggcaller
   :replaces_section_title:
   :noindex:

   A de Bruijn graph\-based gene\-caller and pangenome analysis tool

   :homepage: https://github.com/bacpop/ggCaller
   :license: MIT / MIT
   :recipe: /`ggcaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggcaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggcaller/meta.yaml>`_

   


.. conda:package:: ggcaller

   |downloads_ggcaller| |docker_ggcaller|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-0</code>,  <code>1.3.7-0</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  </span></summary>
      

      ``1.4.1-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.4-2``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bcbio-gff: 
   :depends bifrost: ``>=1.2``
   :depends bifrost: ``>=1.3.5,<2.0a0``
   :depends biopython: ``1.80.*``
   :depends boost-cpp: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends cd-hit: 
   :depends diamond: ``>=2.0``
   :depends gffutils: 
   :depends hmmer: 
   :depends intbitset: 
   :depends joblib: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mafft: 
   :depends matplotlib-base: 
   :depends mkl: ``>=2022.2.1,<2023.0a0``
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends pthread-stubs: 
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python-edlib: 
   :depends python-wget: 
   :depends python_abi: ``3.9.* *_cp39``
   :depends pytorch: ``1.10.*``
   :depends pytorch: ``>=1.10.2,<1.11.0a0``
   :depends pytorch-cpu: ``1.10.*``
   :depends rapidnj: 
   :depends scipy: 
   :depends seaborn: 
   :depends snp-sites: 
   :depends tbb: ``>=2021.13.0``
   :depends tqdm: 
   :depends uncertainties: 
   :depends xorg-libxaw: 
   :depends xorg-libxcomposite: 
   :depends xorg-libxcursor: 
   :depends xorg-libxdamage: 
   :depends xorg-libxfixes: 
   :depends xorg-libxi: 
   :depends xorg-libxinerama: 
   :depends xorg-libxpm: 
   :depends xorg-libxrandr: 
   :depends zlib: 
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

      mamba install ggcaller

   and update with::

      mamba update ggcaller

  To create a new environment, run::

      mamba create --name myenvname ggcaller

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ggcaller:<tag>

   (see `ggcaller/tags`_ for valid values for ``<tag>``)


.. |downloads_ggcaller| image:: https://img.shields.io/conda/dn/bioconda/ggcaller.svg?style=flat
   :target: https://anaconda.org/bioconda/ggcaller
   :alt:   (downloads)
.. |docker_ggcaller| image:: https://quay.io/repository/biocontainers/ggcaller/status
   :target: https://quay.io/repository/biocontainers/ggcaller
.. _`ggcaller/tags`: https://quay.io/repository/biocontainers/ggcaller?tab=tags


.. raw:: html

    <script>
        var package = "ggcaller";
        var versions = ["1.4.1","1.3.7","1.3.6","1.3.5","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ggcaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ggcaller/README.html