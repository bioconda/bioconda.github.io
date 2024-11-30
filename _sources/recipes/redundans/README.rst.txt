:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'redundans'
.. highlight: bash

redundans
=========

.. conda:recipe:: redundans
   :replaces_section_title:
   :noindex:

   Redundans is a pipeline that assists an assembly of heterozygous\/polymorphic genomes.

   :homepage: https://github.com/Gabaldonlab/redundans/
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`redundans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/redundans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/redundans/meta.yaml>`_
   :links: biotools: :biotools:`redundans`

   


.. conda:package:: redundans

   |downloads_redundans| |docker_redundans|

   :versions:
      
      

      ``2.01-0``

      

   
   :depends bwa: ``>=0.7.12``
   :depends gfastats: ``>=1.3.6``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends matplotlib-base: ``>=3.7.3``
   :depends meryl: ``1.3.*``
   :depends miniasm: ``>=0.3``
   :depends minimap2: ``>=2.24``
   :depends numpy: ``>=1.24.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-argparse: ``>=2.0.1``
   :depends r-base: ``>=4``
   :depends r-ggplot2: ``>=3.3.2``
   :depends r-scales: ``>=1.1.1``
   :depends snap-aligner: ``>=2.0.3``
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

      mamba install redundans

   and update with::

      mamba update redundans

  To create a new environment, run::

      mamba create --name myenvname redundans

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/redundans:<tag>

   (see `redundans/tags`_ for valid values for ``<tag>``)


.. |downloads_redundans| image:: https://img.shields.io/conda/dn/bioconda/redundans.svg?style=flat
   :target: https://anaconda.org/bioconda/redundans
   :alt:   (downloads)
.. |docker_redundans| image:: https://quay.io/repository/biocontainers/redundans/status
   :target: https://quay.io/repository/biocontainers/redundans
.. _`redundans/tags`: https://quay.io/repository/biocontainers/redundans?tab=tags


.. raw:: html

    <script>
        var package = "redundans";
        var versions = ["2.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/redundans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/redundans/README.html