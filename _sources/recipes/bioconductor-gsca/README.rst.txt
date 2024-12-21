:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsca'
.. highlight: bash

bioconductor-gsca
=================

.. conda:recipe:: bioconductor-gsca
   :replaces_section_title:
   :noindex:

   GSCA\: Gene Set Context Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GSCA.html
   :license: GPL(>=2)
   :recipe: /`bioconductor-gsca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsca/meta.yaml>`_
   :links: biotools: :biotools:`gsca`

   GSCA takes as input several lists of activated and repressed genes. GSCA then searches through a compendium of publicly available gene expression profiles for biological contexts that are enriched with a specified pattern of gene expression. GSCA provides both traditional R functions and interactive\, user\-friendly user interface.


.. conda:package:: bioconductor-gsca

   |downloads_bioconductor-gsca| |docker_bioconductor-gsca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.36.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  <code>2.17.0-0</code>,  </span></summary>
      

      ``2.36.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.17.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rhdf5: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-sp: 
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

      mamba install bioconductor-gsca

   and update with::

      mamba update bioconductor-gsca

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gsca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsca:<tag>

   (see `bioconductor-gsca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsca
   :alt:   (downloads)
.. |docker_bioconductor-gsca| image:: https://quay.io/repository/biocontainers/bioconductor-gsca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsca
.. _`bioconductor-gsca/tags`: https://quay.io/repository/biocontainers/bioconductor-gsca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gsca";
        var versions = ["2.36.0","2.32.0","2.30.0","2.28.0","2.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsca/README.html