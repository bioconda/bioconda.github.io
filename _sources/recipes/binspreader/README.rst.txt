:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binspreader'
.. highlight: bash

binspreader
===========

.. conda:recipe:: binspreader
   :replaces_section_title:
   :noindex:

   BinSPreader is a tool for improving existing binning using assembly
   graph and other sources of connectivity information


   :homepage: https://cab.spbu.ru/software/binspreader/
   :license: GPL2 / GPL-2.0-only
   :recipe: /`binspreader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binspreader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binspreader/meta.yaml>`_
   :links: biotools: :biotools:`binspreader`, doi: :doi:`10.1016/j.isci.2022.104770`

   BinSPreader is a novel tool that attempts to refine metagenome\-assembled
   genomes \(MAGs\) obtained from existing tools. BinSPreader exploits the
   assembly graph topology and other connectivity information\, such as
   paired\-end and Hi\-C reads\, to refine the existing binning\, correct binning
   errors\, propagate binning from longer contigs to shorter contigs and infer
   contigs belonging to multiple bins.



.. conda:package:: binspreader

   |downloads_binspreader| |docker_binspreader|

   :versions:
      
      

      ``3.16.0.dev-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libcxx: ``>=14.0.6``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends llvm-openmp: ``>=14.0.6``
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

      mamba install binspreader

   and update with::

      mamba update binspreader

  To create a new environment, run::

      mamba create --name myenvname binspreader

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/binspreader:<tag>

   (see `binspreader/tags`_ for valid values for ``<tag>``)


.. |downloads_binspreader| image:: https://img.shields.io/conda/dn/bioconda/binspreader.svg?style=flat
   :target: https://anaconda.org/bioconda/binspreader
   :alt:   (downloads)
.. |docker_binspreader| image:: https://quay.io/repository/biocontainers/binspreader/status
   :target: https://quay.io/repository/biocontainers/binspreader
.. _`binspreader/tags`: https://quay.io/repository/biocontainers/binspreader?tab=tags


.. raw:: html

    <script>
        var package = "binspreader";
        var versions = ["3.16.0.dev"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binspreader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binspreader/README.html