:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bactopia-assembler'
.. highlight: bash

bactopia-assembler
==================

.. conda:recipe:: bactopia-assembler
   :replaces_section_title:
   :noindex:

   The assembly process used by Bactopia.

   :homepage: https://bactopia.github.io/
   :developer docs: https://github.com/bactopia/bactopia-assembler/
   :license: MIT
   :recipe: /`bactopia-assembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-assembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-assembler/meta.yaml>`_
   :links: biotools: :biotools:`bactopia`, doi: :doi:`10.1128/mSystems.00190-20`

   


.. conda:package:: bactopia-assembler

   |downloads_bactopia-assembler| |docker_bactopia-assembler|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends assembly-scan: ``>=1.0.0``
   :depends coreutils: 
   :depends dragonflye: ``>=1.1.1``
   :depends importlib-metadata: ``<5``
   :depends nanoq: ``>=0.9.0``
   :depends pigz: 
   :depends python: ``>3.6,<3.11``
   :depends sed: 
   :depends shovill-se: ``>=1.1.0se``
   :depends unicycler: 
   :depends wget: 
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

      mamba install bactopia-assembler

   and update with::

      mamba update bactopia-assembler

  To create a new environment, run::

      mamba create --name myenvname bactopia-assembler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bactopia-assembler:<tag>

   (see `bactopia-assembler/tags`_ for valid values for ``<tag>``)


.. |downloads_bactopia-assembler| image:: https://img.shields.io/conda/dn/bioconda/bactopia-assembler.svg?style=flat
   :target: https://anaconda.org/bioconda/bactopia-assembler
   :alt:   (downloads)
.. |docker_bactopia-assembler| image:: https://quay.io/repository/biocontainers/bactopia-assembler/status
   :target: https://quay.io/repository/biocontainers/bactopia-assembler
.. _`bactopia-assembler/tags`: https://quay.io/repository/biocontainers/bactopia-assembler?tab=tags


.. raw:: html

    <script>
        var package = "bactopia-assembler";
        var versions = ["1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bactopia-assembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bactopia-assembler/README.html