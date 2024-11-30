:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowsom'
.. highlight: bash

bioconductor-flowsom
====================

.. conda:recipe:: bioconductor-flowsom
   :replaces_section_title:
   :noindex:

   Using self\-organizing maps for visualization and interpretation of cytometry data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/FlowSOM.html
   :license: GPL-3.0-or-later
   :recipe: /`bioconductor-flowsom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsom/meta.yaml>`_
   :links: biotools: :biotools:`flowsom`, doi: :doi:`10.1002/cyto.a.22625`

   FlowSOM offers visualization options for cytometry data\, by using Self\-Organizing Map clustering and Minimal Spanning Trees.


.. conda:package:: bioconductor-flowsom

   |downloads_bioconductor-flowsom| |docker_bioconductor-flowsom|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.2.0-2</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-consensusclusterplus: ``>=1.66.0,<1.67.0``
   :depends bioconductor-consensusclusterplus: ``>=1.66.0,<1.67.0a0``
   :depends bioconductor-flowcore: ``>=2.14.0,<2.15.0``
   :depends bioconductor-flowcore: ``>=2.14.0,<2.15.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-colorramps: 
   :depends r-dplyr: 
   :depends r-ggforce: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-rlang: 
   :depends r-rtsne: 
   :depends r-tidyr: 
   :depends r-xml: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-flowsom

   and update with::

      mamba update bioconductor-flowsom

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowsom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowsom:<tag>

   (see `bioconductor-flowsom/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowsom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowsom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowsom
   :alt:   (downloads)
.. |docker_bioconductor-flowsom| image:: https://quay.io/repository/biocontainers/bioconductor-flowsom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowsom
.. _`bioconductor-flowsom/tags`: https://quay.io/repository/biocontainers/bioconductor-flowsom?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowsom";
        var versions = ["2.10.0","2.10.0","2.8.0","2.6.0","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowsom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowsom/README.html