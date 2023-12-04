:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rdgidb'
.. highlight: bash

bioconductor-rdgidb
===================

.. conda:recipe:: bioconductor-rdgidb
   :replaces_section_title:
   :noindex:

   R Wrapper for DGIdb

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/rDGIdb.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rdgidb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rdgidb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rdgidb/meta.yaml>`_
   :links: biotools: :biotools:`rdgidb`, doi: :doi:`10.12688/f1000research.9357.1`

   The rDGIdb package provides a wrapper for the Drug Gene Interaction Database \(DGIdb\). For simplicity\, the wrapper query function and output resembles the user interface and results format provided on the DGIdb website \(https\:\/\/www.dgidb.org\/\).


.. conda:package:: bioconductor-rdgidb

   |downloads_bioconductor-rdgidb| |docker_bioconductor-rdgidb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: 
   :depends r-jsonlite: 
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

      mamba install bioconductor-rdgidb

   and update with::

      mamba update bioconductor-rdgidb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rdgidb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rdgidb:<tag>

   (see `bioconductor-rdgidb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rdgidb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rdgidb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rdgidb
   :alt:   (downloads)
.. |docker_bioconductor-rdgidb| image:: https://quay.io/repository/biocontainers/bioconductor-rdgidb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rdgidb
.. _`bioconductor-rdgidb/tags`: https://quay.io/repository/biocontainers/bioconductor-rdgidb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rdgidb";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rdgidb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rdgidb/README.html