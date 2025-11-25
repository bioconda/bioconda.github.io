:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lr_gapcloser'
.. highlight: bash

lr_gapcloser
============

.. conda:recipe:: lr_gapcloser
   :replaces_section_title:
   :noindex:

   Use long sequenced reads to close gaps in assemblies.

   :homepage: https://github.com/CAFS-bioinformatics/LR_Gapcloser
   :documentation: https://github.com/CAFS-bioinformatics/LR_Gapcloser/blob/master/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`lr_gapcloser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lr_gapcloser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lr_gapcloser/meta.yaml>`_
   :links: biotools: :biotools:`lrgapcloser`, doi: :doi:`10.1093/gigascience/giy157`

   


.. conda:package:: lr_gapcloser

   |downloads_lr_gapcloser| |docker_lr_gapcloser|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends bwa: 
   :depends minimap2: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install lr_gapcloser

   and update with::

      mamba update lr_gapcloser

  To create a new environment, run::

      mamba create --name myenvname lr_gapcloser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lr_gapcloser:<tag>

   (see `lr_gapcloser/tags`_ for valid values for ``<tag>``)


.. |downloads_lr_gapcloser| image:: https://img.shields.io/conda/dn/bioconda/lr_gapcloser.svg?style=flat
   :target: https://anaconda.org/bioconda/lr_gapcloser
   :alt:   (downloads)
.. |docker_lr_gapcloser| image:: https://quay.io/repository/biocontainers/lr_gapcloser/status
   :target: https://quay.io/repository/biocontainers/lr_gapcloser
.. _`lr_gapcloser/tags`: https://quay.io/repository/biocontainers/lr_gapcloser?tab=tags


.. raw:: html

    <script>
        var package = "lr_gapcloser";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lr_gapcloser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lr_gapcloser/README.html