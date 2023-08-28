:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tfutils'
.. highlight: bash

bioconductor-tfutils
====================

.. conda:recipe:: bioconductor-tfutils
   :replaces_section_title:
   :noindex:

   TFutils

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TFutils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tfutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfutils/meta.yaml>`_

   This package helps users to work with TF metadata from various sources. Significant catalogs of TFs and classifications thereof are made available. Tools for working with motif scans are also provided.


.. conda:package:: bioconductor-tfutils

   |downloads_bioconductor-tfutils| |docker_bioconductor-tfutils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-gseabase: ``>=1.62.0,<1.63.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-httr: 
   :depends r-magrittr: 
   :depends r-miniui: 
   :depends r-readxl: 
   :depends r-rjson: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-tfutils

   and update with::

      mamba update bioconductor-tfutils

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tfutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tfutils:<tag>

   (see `bioconductor-tfutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tfutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tfutils
   :alt:   (downloads)
.. |docker_bioconductor-tfutils| image:: https://quay.io/repository/biocontainers/bioconductor-tfutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfutils
.. _`bioconductor-tfutils/tags`: https://quay.io/repository/biocontainers/bioconductor-tfutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tfutils";
        var versions = ["1.20.0","1.18.0","1.14.0","1.12.0","1.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfutils/README.html