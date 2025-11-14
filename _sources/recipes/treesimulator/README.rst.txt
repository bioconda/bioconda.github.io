:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treesimulator'
.. highlight: bash

treesimulator
=============

.. conda:recipe:: treesimulator
   :replaces_section_title:
   :noindex:

   Simulation of rooted phylogenetic trees under a given Multitype Birth–Death \(MTBD\) model.

   :homepage: https://github.com/evolbioinfo/treesimulator
   :documentation: https://github.com/evolbioinfo/treesimulator/blob/0.2.24/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`treesimulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treesimulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treesimulator/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.09.09.24313296`, biotools: :biotools:`treesimulator`

   Treesimulator provides fast methods for simulation of rooted phylogenetic trees under 
   Multitype Birth–Death \(MTBD\) models\, in particular the classical BD model\, 
   the BD Exposed\-Infectious \(BDEI\) model\, and BD with superspreading \(BDSS\).



.. conda:package:: treesimulator

   |downloads_treesimulator| |docker_treesimulator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.24-0</code>,  <code>0.2.20-0</code>,  <code>0.2.19-0</code>,  <code>0.2.18-0</code>,  <code>0.2.17-0</code>,  <code>0.2.15-0</code>,  <code>0.2.8-0</code>,  <code>0.2.4-0</code>,  <code>0.2.3-0</code>,  </span></summary>
      

      ``0.2.24-0``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.15-0``,  ``0.2.8-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.22-0``

      
      .. raw:: html

         </details>
      

   
   :depends ete3: 
   :depends legacy-cgi: 
   :depends lifelines: 
   :depends numpy: 
   :depends python: ``>=3.9``
   :depends python-build: 
   :depends scipy: 
   :depends six: 
   :depends sympy: 
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

      mamba install treesimulator

   and update with::

      mamba update treesimulator

  To create a new environment, run::

      mamba create --name myenvname treesimulator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/treesimulator:<tag>

   (see `treesimulator/tags`_ for valid values for ``<tag>``)


.. |downloads_treesimulator| image:: https://img.shields.io/conda/dn/bioconda/treesimulator.svg?style=flat
   :target: https://anaconda.org/bioconda/treesimulator
   :alt:   (downloads)
.. |docker_treesimulator| image:: https://quay.io/repository/biocontainers/treesimulator/status
   :target: https://quay.io/repository/biocontainers/treesimulator
.. _`treesimulator/tags`: https://quay.io/repository/biocontainers/treesimulator?tab=tags


.. raw:: html

    <script>
        var package = "treesimulator";
        var versions = ["0.2.24","0.2.20","0.2.19","0.2.18","0.2.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treesimulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treesimulator/README.html