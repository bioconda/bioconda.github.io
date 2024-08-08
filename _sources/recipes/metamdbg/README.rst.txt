:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metamdbg'
.. highlight: bash

metamdbg
========

.. conda:recipe:: metamdbg
   :replaces_section_title:
   :noindex:

   MetaMDBG\: a lightweight assembler for long and accurate metagenomics reads.

   :homepage: https://github.com/GaetanBenoitDev/metaMDBG
   :license: MIT
   :recipe: /`metamdbg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamdbg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamdbg/meta.yaml>`_

   


.. conda:package:: metamdbg

   |downloads_metamdbg| |docker_metamdbg|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``,  ``0.3-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libgomp: 
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends minimap2: ``2.28.*``
   :depends time: ``1.8.*``
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

      mamba install metamdbg

   and update with::

      mamba update metamdbg

  To create a new environment, run::

      mamba create --name myenvname metamdbg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metamdbg:<tag>

   (see `metamdbg/tags`_ for valid values for ``<tag>``)


.. |downloads_metamdbg| image:: https://img.shields.io/conda/dn/bioconda/metamdbg.svg?style=flat
   :target: https://anaconda.org/bioconda/metamdbg
   :alt:   (downloads)
.. |docker_metamdbg| image:: https://quay.io/repository/biocontainers/metamdbg/status
   :target: https://quay.io/repository/biocontainers/metamdbg
.. _`metamdbg/tags`: https://quay.io/repository/biocontainers/metamdbg?tab=tags


.. raw:: html

    <script>
        var package = "metamdbg";
        var versions = ["1.0","1.0","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metamdbg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metamdbg/README.html