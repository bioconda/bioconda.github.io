:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xina'
.. highlight: bash

bioconductor-xina
=================

.. conda:recipe:: bioconductor-xina
   :replaces_section_title:
   :noindex:

   Multiplexes Isobaric Mass Tagged\-based Kinetics Data for Network Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/XINA.html
   :license: GPL-3
   :recipe: /`bioconductor-xina <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xina>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xina/meta.yaml>`_

   The aim of XINA is to determine which proteins exhibit similar patterns within and across experimental conditions\, since proteins with co\-abundance patterns may have common molecular functions. XINA imports multiple datasets\, tags dataset in silico\, and combines the data for subsequent subgrouping into multiple clusters. The result is a single output depicting the variation across all conditions. XINA\, not only extracts coabundance profiles within and across experiments\, but also incorporates protein\-protein interaction databases and integrative resources such as KEGG to infer interactors and molecular functions\, respectively\, and produces intuitive graphical outputs.


.. conda:package:: bioconductor-xina

   |downloads_bioconductor-xina| |docker_bioconductor-xina|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-stringdb: ``>=2.14.0,<2.15.0``
   :depends r-alluvial: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-igraph: 
   :depends r-mclust: 
   :depends r-plyr: 
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

      mamba install bioconductor-xina

   and update with::

      mamba update bioconductor-xina

  To create a new environment, run::

      mamba create --name myenvname bioconductor-xina

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xina:<tag>

   (see `bioconductor-xina/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xina| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xina.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xina
   :alt:   (downloads)
.. |docker_bioconductor-xina| image:: https://quay.io/repository/biocontainers/bioconductor-xina/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xina
.. _`bioconductor-xina/tags`: https://quay.io/repository/biocontainers/bioconductor-xina?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xina";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xina/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xina/README.html