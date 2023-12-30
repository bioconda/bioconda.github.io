:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nucleosim'
.. highlight: bash

bioconductor-nucleosim
======================

.. conda:recipe:: bioconductor-nucleosim
   :replaces_section_title:
   :noindex:

   Generate synthetic nucleosome maps

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/nucleoSim.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-nucleosim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucleosim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nucleosim/meta.yaml>`_
   :links: biotools: :biotools:`nucleosim`, doi: :doi:`10.1515/sagmb-2014-0098`

   This package can generate a synthetic map with reads covering the nucleosome regions as well as a synthetic map with forward and reverse reads emulating next\-generation sequencing. The synthetic hybridization data of “Tiling Arrays” can also be generated. The user has choice between three different distributions for the read positioning\: Normal\, Student and Uniform. In addition\, a visualization tool is provided to explore the synthetic nucleosome maps.


.. conda:package:: bioconductor-nucleosim

   |downloads_bioconductor-nucleosim| |docker_bioconductor-nucleosim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-nucleosim

   and update with::

      mamba update bioconductor-nucleosim

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nucleosim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nucleosim:<tag>

   (see `bioconductor-nucleosim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nucleosim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nucleosim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nucleosim
   :alt:   (downloads)
.. |docker_bioconductor-nucleosim| image:: https://quay.io/repository/biocontainers/bioconductor-nucleosim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nucleosim
.. _`bioconductor-nucleosim/tags`: https://quay.io/repository/biocontainers/bioconductor-nucleosim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nucleosim";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nucleosim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nucleosim/README.html