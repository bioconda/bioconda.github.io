:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mrbayes_volpiano'
.. highlight: bash

mrbayes_volpiano
================

.. conda:recipe:: mrbayes_volpiano
   :replaces_section_title:
   :noindex:

   Bayesian Inference of Phylogeny \(Volpiano edition\)

   :homepage: https://github.com/gaballench/mrbayes_volpiano
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mrbayes_volpiano <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrbayes_volpiano>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrbayes_volpiano/meta.yaml>`_
   :links: biotools: :biotools:`mrbayes_volpiano`

   This is a fork of MrBayes v3.2.7a\, a programme for estimation of phylogenetic trees using
   Bayesian inference. This fork differs from the original in that the standard character
   coding is no longer intended for morphology in biological datasets but rather for the encoding
   of plainchant melodies in the volpiano format. The original README is provided below as well
   as the license and modified source code. A note has been added to the greeting text to make it
   clear that this is a fork only intended to be used for analysing plainchant melodies in volpiano
   format rather than the original biological sequence data.



.. conda:package:: mrbayes_volpiano

   |downloads_mrbayes_volpiano| |docker_mrbayes_volpiano|

   :versions:
      
      

      ``3.2.7a-0``

      

   
   :depends beagle-lib: ``<4``
   :depends beagle-lib: ``>=3.1.2,<4.0a0``
   :depends libgcc: ``>=13``
   :depends ncurses: ``>=6.5,<7.0a0``
   :depends openmpi: ``>=4.1.6,<5.0a0``
   :depends readline: ``>=8.2,<9.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mrbayes_volpiano

   and update with::

      mamba update mrbayes_volpiano

  To create a new environment, run::

      mamba create --name myenvname mrbayes_volpiano

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mrbayes_volpiano:<tag>

   (see `mrbayes_volpiano/tags`_ for valid values for ``<tag>``)


.. |downloads_mrbayes_volpiano| image:: https://img.shields.io/conda/dn/bioconda/mrbayes_volpiano.svg?style=flat
   :target: https://anaconda.org/bioconda/mrbayes_volpiano
   :alt:   (downloads)
.. |docker_mrbayes_volpiano| image:: https://quay.io/repository/biocontainers/mrbayes_volpiano/status
   :target: https://quay.io/repository/biocontainers/mrbayes_volpiano
.. _`mrbayes_volpiano/tags`: https://quay.io/repository/biocontainers/mrbayes_volpiano?tab=tags


.. raw:: html

    <script>
        var package = "mrbayes_volpiano";
        var versions = ["3.2.7a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mrbayes_volpiano/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mrbayes_volpiano/README.html