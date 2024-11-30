:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bridgedbr'
.. highlight: bash

bioconductor-bridgedbr
======================

.. conda:recipe:: bioconductor-bridgedbr
   :replaces_section_title:
   :noindex:

   Code for using BridgeDb identifier mapping framework from within R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/BridgeDbR.html
   :license: AGPL-3
   :recipe: /`bioconductor-bridgedbr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bridgedbr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bridgedbr/meta.yaml>`_

   Use BridgeDb functions and load identifier mapping databases in R. It uses GitHub\, Zenodo\, and Figshare if you use this package to download identifier mappings files.


.. conda:package:: bioconductor-bridgedbr

   |downloads_bioconductor-bridgedbr| |docker_bioconductor-bridgedbr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
   :depends r-rjava: 
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

      mamba install bioconductor-bridgedbr

   and update with::

      mamba update bioconductor-bridgedbr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bridgedbr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bridgedbr:<tag>

   (see `bioconductor-bridgedbr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bridgedbr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bridgedbr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bridgedbr
   :alt:   (downloads)
.. |docker_bioconductor-bridgedbr| image:: https://quay.io/repository/biocontainers/bioconductor-bridgedbr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bridgedbr
.. _`bioconductor-bridgedbr/tags`: https://quay.io/repository/biocontainers/bioconductor-bridgedbr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bridgedbr";
        var versions = ["2.12.0","2.10.0","2.8.0","2.4.0","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bridgedbr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bridgedbr/README.html