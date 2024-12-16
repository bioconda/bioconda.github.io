:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coinfinder'
.. highlight: bash

coinfinder
==========

.. conda:recipe:: coinfinder
   :replaces_section_title:
   :noindex:

   A tool for the identification of coincident \(associating and dissociating\) genes in pangenomes.

   :homepage: https://github.com/fwhelan/coinfinder
   :license: GPL / GPL-3.0-only
   :recipe: /`coinfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coinfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coinfinder/meta.yaml>`_
   :links: doi: :doi:`10.1101/859371`

   


.. conda:package:: coinfinder

   |downloads_coinfinder| |docker_coinfinder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-3</code>,  <code>1.2.1-2</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.7-0</code>,  </span></summary>
      

      ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bioconductor-ggtree: ``>=2.0.0,<2.1.0``
   :depends boost-cpp: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-ape: ``>=5.4.1``
   :depends r-base: ``3.6.*``
   :depends r-caper: ``>=1.0.1``
   :depends r-cowplot: ``>=1.1.1``
   :depends r-data.table: ``>=1.14``
   :depends r-dplyr: ``>=1.0.2``
   :depends r-flock: ``>=0.7``
   :depends r-future: ``>=1.21``
   :depends r-getopt: ``>=1.20.3``
   :depends r-ggplot2: ``>=3.0.0``
   :depends r-ggraph: ``>=2.0.5``
   :depends r-igraph: ``>=1.2.6``
   :depends r-magrittr: ``>=2.0.1``
   :depends r-phytools: ``>=0.6_99``
   :depends r-purrr: ``>=0.3.4``
   :depends r-rlang: ``>=0.4.1``
   :depends r-rvcheck: ``>=0.1.8``
   :depends r-tidyr: ``>=1.1.2``
   :depends r-tidytree: ``>=0.2.6``
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

      mamba install coinfinder

   and update with::

      mamba update coinfinder

  To create a new environment, run::

      mamba create --name myenvname coinfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coinfinder:<tag>

   (see `coinfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_coinfinder| image:: https://img.shields.io/conda/dn/bioconda/coinfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/coinfinder
   :alt:   (downloads)
.. |docker_coinfinder| image:: https://quay.io/repository/biocontainers/coinfinder/status
   :target: https://quay.io/repository/biocontainers/coinfinder
.. _`coinfinder/tags`: https://quay.io/repository/biocontainers/coinfinder?tab=tags


.. raw:: html

    <script>
        var package = "coinfinder";
        var versions = ["1.2.1","1.2.1","1.2.1","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coinfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coinfinder/README.html