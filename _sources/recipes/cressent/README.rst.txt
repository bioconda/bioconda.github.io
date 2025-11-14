:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cressent'
.. highlight: bash

cressent
========

.. conda:recipe:: cressent
   :replaces_section_title:
   :noindex:

   A comprehensive toolkit for ssDNA virus analysis

   :homepage: https://github.com/ricrocha82/cressent
   :documentation: https://cressent.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`cressent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cressent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cressent/meta.yaml>`_

   cressent is a tool for analyzing ssDNA viruses\, providing modules for 
   sequence alignment\, phylogenetic analysis\, motif discovery\, visualization and more.



.. conda:package:: cressent

   |downloads_cressent| |docker_cressent|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0``
   :depends bioconductor-decipher: ``>=3.2.0``
   :depends bioconductor-ggtree: ``>=3.14.0``
   :depends bioconductor-ggtreeextra: ``>=1.16.0``
   :depends bioconductor-treeio: ``>=1.30.0``
   :depends biopython: ``>=1.85``
   :depends blast: ``>=2.16.0``
   :depends cd-hit: ``>=4.5``
   :depends click: 
   :depends diamond: ``>=2.0``
   :depends gffutils: ``>=0.13``
   :depends iqtree: ``>=2.3.6``
   :depends mafft: ``>=7.0``
   :depends matplotlib-base: ``>=3.10.0``
   :depends mcl: ``>=22.0``
   :depends meme: ``>=5.5``
   :depends numpy: ``>=1.21.0``
   :depends pandas: ``>=2.2``
   :depends pytest: ``>=8.3``
   :depends python: ``>=3.6``
   :depends r-ape: ``>=5.5``
   :depends r-base: ``>=4.0``
   :depends r-dendextend: ``>=1.19.0``
   :depends r-dplyr: ``>=1.1.4``
   :depends r-gggenes: ``>=0.5``
   :depends r-ggplot2: ``>=3.5``
   :depends r-ggseqlogo: ``>=0.2``
   :depends r-rcolorbrewer: ``>=1.1.3``
   :depends r-rlang: ``>=1.1.4``
   :depends r-tidyr: ``>=1.3.1``
   :depends r-tidytree: ``>=0.4.6``
   :depends scipy: ``>=1.15.2``
   :depends seaborn: ``>=0.13.2``
   :depends seqkit: ``>=2.9.0``
   :depends trimal: ``>=1.5.0``
   :depends viennarna: 
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

      mamba install cressent

   and update with::

      mamba update cressent

  To create a new environment, run::

      mamba create --name myenvname cressent

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cressent:<tag>

   (see `cressent/tags`_ for valid values for ``<tag>``)


.. |downloads_cressent| image:: https://img.shields.io/conda/dn/bioconda/cressent.svg?style=flat
   :target: https://anaconda.org/bioconda/cressent
   :alt:   (downloads)
.. |docker_cressent| image:: https://quay.io/repository/biocontainers/cressent/status
   :target: https://quay.io/repository/biocontainers/cressent
.. _`cressent/tags`: https://quay.io/repository/biocontainers/cressent?tab=tags


.. raw:: html

    <script>
        var package = "cressent";
        var versions = ["1.0.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cressent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cressent/README.html