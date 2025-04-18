:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genome2tree'
.. highlight: bash

genome2tree
===========

.. conda:recipe:: genome2tree
   :replaces_section_title:
   :noindex:

   A pipeline to build phylogenetic trees from genome comparisons

   :homepage: https://github.com/RicoLeiser/Genome2Tree
   :license: Apache-2.0
   :recipe: /`genome2tree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome2tree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome2tree/meta.yaml>`_

   


.. conda:package:: genome2tree

   |downloads_genome2tree| |docker_genome2tree|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: ``>=1.79``
   :depends clipkit: 
   :depends mafft: 
   :depends numpy: ``>=1.21.0``
   :depends orthofinder: 
   :depends phykit: 
   :depends python: ``>=3.7``
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

      mamba install genome2tree

   and update with::

      mamba update genome2tree

  To create a new environment, run::

      mamba create --name myenvname genome2tree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genome2tree:<tag>

   (see `genome2tree/tags`_ for valid values for ``<tag>``)


.. |downloads_genome2tree| image:: https://img.shields.io/conda/dn/bioconda/genome2tree.svg?style=flat
   :target: https://anaconda.org/bioconda/genome2tree
   :alt:   (downloads)
.. |docker_genome2tree| image:: https://quay.io/repository/biocontainers/genome2tree/status
   :target: https://quay.io/repository/biocontainers/genome2tree
.. _`genome2tree/tags`: https://quay.io/repository/biocontainers/genome2tree?tab=tags


.. raw:: html

    <script>
        var package = "genome2tree";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genome2tree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genome2tree/README.html