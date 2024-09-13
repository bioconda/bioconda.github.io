:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viral_consensus'
.. highlight: bash

viral_consensus
===============

.. conda:recipe:: viral_consensus
   :replaces_section_title:
   :noindex:

   Fast viral consensus genome reconstruction

   :homepage: https://niema.net/ViralConsensus/
   :developer docs: https://github.com/niemasd/ViralConsensus
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`viral_consensus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viral_consensus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viral_consensus/meta.yaml>`_
   :links: biotools: :biotools:`viral_consensus`, doi: :doi:`10.1093/bioinformatics/btad317`, doi: :doi:`10.1093/bioinformatics/btae018`

   


.. conda:package:: viral_consensus

   |downloads_viral_consensus| |docker_viral_consensus|

   :versions:
      
      

      ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends htslib: ``>=1.19.1,<1.22.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install viral_consensus

   and update with::

      mamba update viral_consensus

  To create a new environment, run::

      mamba create --name myenvname viral_consensus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/viral_consensus:<tag>

   (see `viral_consensus/tags`_ for valid values for ``<tag>``)


.. |downloads_viral_consensus| image:: https://img.shields.io/conda/dn/bioconda/viral_consensus.svg?style=flat
   :target: https://anaconda.org/bioconda/viral_consensus
   :alt:   (downloads)
.. |docker_viral_consensus| image:: https://quay.io/repository/biocontainers/viral_consensus/status
   :target: https://quay.io/repository/biocontainers/viral_consensus
.. _`viral_consensus/tags`: https://quay.io/repository/biocontainers/viral_consensus?tab=tags


.. raw:: html

    <script>
        var package = "viral_consensus";
        var versions = ["0.0.5","0.0.5","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viral_consensus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viral_consensus/README.html