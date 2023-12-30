:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnorfeeder'
.. highlight: bash

bioconductor-cnorfeeder
=======================

.. conda:recipe:: bioconductor-cnorfeeder
   :replaces_section_title:
   :noindex:

   Integration of CellNOptR to add missing links

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CNORfeeder.html
   :license: GPL-3
   :recipe: /`bioconductor-cnorfeeder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnorfeeder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnorfeeder/meta.yaml>`_

   This package integrates literature\-constrained and data\-driven methods to infer signalling networks from perturbation experiments. It permits to extends a given network with links derived from the data via various inference methods and uses information on physical interactions of proteins to guide and validate the integration of links.


.. conda:package:: bioconductor-cnorfeeder

   |downloads_bioconductor-cnorfeeder| |docker_bioconductor-cnorfeeder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-cellnoptr: ``>=1.48.0,<1.49.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
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

      mamba install bioconductor-cnorfeeder

   and update with::

      mamba update bioconductor-cnorfeeder

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cnorfeeder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnorfeeder:<tag>

   (see `bioconductor-cnorfeeder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnorfeeder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnorfeeder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnorfeeder
   :alt:   (downloads)
.. |docker_bioconductor-cnorfeeder| image:: https://quay.io/repository/biocontainers/bioconductor-cnorfeeder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnorfeeder
.. _`bioconductor-cnorfeeder/tags`: https://quay.io/repository/biocontainers/bioconductor-cnorfeeder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnorfeeder";
        var versions = ["1.42.0","1.40.0","1.38.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnorfeeder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnorfeeder/README.html