:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aliceasm'
.. highlight: bash

aliceasm
========

.. conda:recipe:: aliceasm
   :replaces_section_title:
   :noindex:

   Efficient HiFi genome assembler producing haplotype\-separated assemblies

   :homepage: https://github.com/RolandFaure/alice-asm
   :license: AGPL-3.0-only
   :recipe: /`aliceasm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aliceasm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aliceasm/meta.yaml>`_

   


.. conda:package:: aliceasm

   |downloads_aliceasm| |docker_aliceasm|

   :versions:
      
      

      ``0.6.36-0``,  ``0.6.34-0``,  ``0.6.33-0``,  ``0.6.32-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bcalm: 
   :depends gfatools: 
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
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

      mamba install aliceasm

   and update with::

      mamba update aliceasm

  To create a new environment, run::

      mamba create --name myenvname aliceasm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aliceasm:<tag>

   (see `aliceasm/tags`_ for valid values for ``<tag>``)


.. |downloads_aliceasm| image:: https://img.shields.io/conda/dn/bioconda/aliceasm.svg?style=flat
   :target: https://anaconda.org/bioconda/aliceasm
   :alt:   (downloads)
.. |docker_aliceasm| image:: https://quay.io/repository/biocontainers/aliceasm/status
   :target: https://quay.io/repository/biocontainers/aliceasm
.. _`aliceasm/tags`: https://quay.io/repository/biocontainers/aliceasm?tab=tags


.. raw:: html

    <script>
        var package = "aliceasm";
        var versions = ["0.6.36","0.6.34","0.6.33","0.6.32"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aliceasm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aliceasm/README.html