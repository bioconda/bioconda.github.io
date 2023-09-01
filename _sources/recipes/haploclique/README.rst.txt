:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haploclique'
.. highlight: bash

haploclique
===========

.. conda:recipe:: haploclique/1.3.1
   :replaces_section_title:
   :noindex:

   Viral quasispecies assembly via maximal clique finding. A method to reconstruct viral haplotypes and detect large insertions and deletions from NGS data.

   :homepage: https://github.com/cbg-ethz/haploclique
   :license: GPL3 / GPLv3+
   :recipe: /`haploclique <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploclique>`_/`1.3.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploclique/1.3.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haploclique/1.3.1/meta.yaml>`_

   


.. conda:package:: haploclique

   |downloads_haploclique| |docker_haploclique|

   :versions:
      
      

      ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends boost: ``>=1.66.0,<1.66.1.0a0``
   :depends bzip2: ``>=1.0.6,<2.0a0``
   :depends libstdcxx-ng: ``>=4.9``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install haploclique

   and update with::

      mamba update haploclique

  To create a new environment, run::

      mamba create --name myenvname haploclique

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haploclique:<tag>

   (see `haploclique/tags`_ for valid values for ``<tag>``)


.. |downloads_haploclique| image:: https://img.shields.io/conda/dn/bioconda/haploclique.svg?style=flat
   :target: https://anaconda.org/bioconda/haploclique
   :alt:   (downloads)
.. |docker_haploclique| image:: https://quay.io/repository/biocontainers/haploclique/status
   :target: https://quay.io/repository/biocontainers/haploclique
.. _`haploclique/tags`: https://quay.io/repository/biocontainers/haploclique?tab=tags


.. raw:: html

    <script>
        var package = "haploclique";
        var versions = ["1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haploclique/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haploclique/README.html