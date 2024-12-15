:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rimmport'
.. highlight: bash

bioconductor-rimmport
=====================

.. conda:recipe:: bioconductor-rimmport
   :replaces_section_title:
   :noindex:

   RImmPort\: Enabling Ready\-for\-analysis Immunology Research Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RImmPort.html
   :license: GPL-3
   :recipe: /`bioconductor-rimmport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rimmport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rimmport/meta.yaml>`_
   :links: biotools: :biotools:`rimmport`, doi: :doi:`10.1093/bioinformatics/btw719`

   The RImmPort package simplifies access to ImmPort data for analysis in the R environment. It provides a standards\-based interface to the ImmPort study data that is in a proprietary format.


.. conda:package:: bioconductor-rimmport

   |downloads_bioconductor-rimmport| |docker_bioconductor-rimmport|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-dbi: 
   :depends r-dplyr: 
   :depends r-plyr: 
   :depends r-reshape2: 
   :depends r-rsqlite: 
   :depends r-sqldf: 
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

      mamba install bioconductor-rimmport

   and update with::

      mamba update bioconductor-rimmport

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rimmport

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rimmport:<tag>

   (see `bioconductor-rimmport/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rimmport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rimmport.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rimmport
   :alt:   (downloads)
.. |docker_bioconductor-rimmport| image:: https://quay.io/repository/biocontainers/bioconductor-rimmport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rimmport
.. _`bioconductor-rimmport/tags`: https://quay.io/repository/biocontainers/bioconductor-rimmport?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rimmport";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rimmport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rimmport/README.html