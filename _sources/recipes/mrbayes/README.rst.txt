:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mrbayes'
.. highlight: bash

mrbayes
=======

.. conda:recipe:: mrbayes
   :replaces_section_title:
   :noindex:

   Bayesian Inference of Phylogeny

   :homepage: https://github.com/NBISweden/MrBayes
   :documentation: https://nbisweden.github.io/MrBayes/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mrbayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrbayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrbayes/meta.yaml>`_
   :links: biotools: :biotools:`mrbayes`

   MrBayes is a program for Bayesian inference and model choice across a wide
   range of phylogenetic and evolutionary models. MrBayes uses Markov chain
   Monte Carlo \(MCMC\) methods to estimate the posterior distribution of model
   parameters.



.. conda:package:: mrbayes

   |downloads_mrbayes| |docker_mrbayes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.7-7</code>,  <code>3.2.7-6</code>,  <code>3.2.7-5</code>,  <code>3.2.7-4</code>,  <code>3.2.7-3</code>,  <code>3.2.7-2</code>,  <code>3.2.7-1</code>,  <code>3.2.7-0</code>,  <code>3.2.7a-0</code>,  </span></summary>
      

      ``3.2.7-7``,  ``3.2.7-6``,  ``3.2.7-5``,  ``3.2.7-4``,  ``3.2.7-3``,  ``3.2.7-2``,  ``3.2.7-1``,  ``3.2.7-0``,  ``3.2.7a-0``,  ``3.2.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends beagle-lib: ``<4``
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

      mamba install mrbayes

   and update with::

      mamba update mrbayes

  To create a new environment, run::

      mamba create --name myenvname mrbayes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mrbayes:<tag>

   (see `mrbayes/tags`_ for valid values for ``<tag>``)


.. |downloads_mrbayes| image:: https://img.shields.io/conda/dn/bioconda/mrbayes.svg?style=flat
   :target: https://anaconda.org/bioconda/mrbayes
   :alt:   (downloads)
.. |docker_mrbayes| image:: https://quay.io/repository/biocontainers/mrbayes/status
   :target: https://quay.io/repository/biocontainers/mrbayes
.. _`mrbayes/tags`: https://quay.io/repository/biocontainers/mrbayes?tab=tags


.. raw:: html

    <script>
        var package = "mrbayes";
        var versions = ["3.2.7","3.2.7","3.2.7","3.2.7","3.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mrbayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mrbayes/README.html