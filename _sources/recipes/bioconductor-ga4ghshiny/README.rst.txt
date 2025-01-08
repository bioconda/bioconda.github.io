:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ga4ghshiny'
.. highlight: bash

bioconductor-ga4ghshiny
=======================

.. conda:recipe:: bioconductor-ga4ghshiny
   :replaces_section_title:
   :noindex:

   Shiny application for interacting with GA4GH\-based data servers

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GA4GHshiny.html
   :license: GPL-3
   :recipe: /`bioconductor-ga4ghshiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghshiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ga4ghshiny/meta.yaml>`_

   GA4GHshiny package provides an easy way to interact with data servers based on Global Alliance for Genomics and Health \(GA4GH\) genomics API through a Shiny application. It also integrates with Beacon Network.


.. conda:package:: bioconductor-ga4ghshiny

   |downloads_bioconductor-ga4ghshiny| |docker_bioconductor-ga4ghshiny|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-ga4ghclient: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-openxlsx: 
   :depends r-purrr: 
   :depends r-shiny: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-tidyr: 
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

      mamba install bioconductor-ga4ghshiny

   and update with::

      mamba update bioconductor-ga4ghshiny

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ga4ghshiny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ga4ghshiny:<tag>

   (see `bioconductor-ga4ghshiny/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ga4ghshiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ga4ghshiny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ga4ghshiny
   :alt:   (downloads)
.. |docker_bioconductor-ga4ghshiny| image:: https://quay.io/repository/biocontainers/bioconductor-ga4ghshiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ga4ghshiny
.. _`bioconductor-ga4ghshiny/tags`: https://quay.io/repository/biocontainers/bioconductor-ga4ghshiny?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ga4ghshiny";
        var versions = ["1.28.0","1.24.0","1.22.0","1.20.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ga4ghshiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ga4ghshiny/README.html