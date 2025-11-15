:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bali-phy'
.. highlight: bash

bali-phy
========

.. conda:recipe:: bali-phy
   :replaces_section_title:
   :noindex:

   Phylogenetics \- Bayesian estimation of phylogenies and multiple sequence alignments.

   :homepage: http://www.bali-phy.org
   :developer docs: https://github.com/bredelings/BAli-Phy/
   :license: GPL2
   :recipe: /`bali-phy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bali-phy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bali-phy/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab129`, biotools: :biotools:`bali-phy`

   


.. conda:package:: bali-phy

   |downloads_bali-phy| |docker_bali-phy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1-0</code>,  <code>4.0-0</code>,  <code>4.0beta17-0</code>,  <code>4.0beta16-1</code>,  <code>4.0beta16-0</code>,  <code>4.0beta15-1</code>,  <code>4.0beta15-0</code>,  <code>4.0beta14-0</code>,  <code>4.0beta13-0</code>,  </span></summary>
      

      ``4.1-0``,  ``4.0-0``,  ``4.0beta17-0``,  ``4.0beta16-1``,  ``4.0beta16-0``,  ``4.0beta15-1``,  ``4.0beta15-0``,  ``4.0beta14-0``,  ``4.0beta13-0``,  ``3.6.0-2``,  ``3.6.0-1``,  ``3.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.83.0``
   :depends cairo: ``>=1.18.4,<2.0a0``
   :depends eigen: ``>=3.3.7``
   :depends fmt: ``>=10,<12``
   :depends fmt: ``>=11.2.0,<11.3.0a0``
   :depends glib: 
   :depends gnuplot: 
   :depends libgcc: ``>=13``
   :depends libglib: ``>=2.86.1,<3.0a0``
   :depends libstdcxx: ``>=13``
   :depends pandoc: 
   :depends perl: 
   :depends python: ``>=3.14,<3.15.0a0``
   :depends r-base: 
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

      mamba install bali-phy

   and update with::

      mamba update bali-phy

  To create a new environment, run::

      mamba create --name myenvname bali-phy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bali-phy:<tag>

   (see `bali-phy/tags`_ for valid values for ``<tag>``)


.. |downloads_bali-phy| image:: https://img.shields.io/conda/dn/bioconda/bali-phy.svg?style=flat
   :target: https://anaconda.org/bioconda/bali-phy
   :alt:   (downloads)
.. |docker_bali-phy| image:: https://quay.io/repository/biocontainers/bali-phy/status
   :target: https://quay.io/repository/biocontainers/bali-phy
.. _`bali-phy/tags`: https://quay.io/repository/biocontainers/bali-phy?tab=tags


.. raw:: html

    <script>
        var package = "bali-phy";
        var versions = ["4.1","4.0","4.0beta17","4.0beta16","4.0beta16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bali-phy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bali-phy/README.html