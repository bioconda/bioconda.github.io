:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-neighbornet'
.. highlight: bash

bioconductor-neighbornet
========================

.. conda:recipe:: bioconductor-neighbornet
   :replaces_section_title:
   :noindex:

   Neighbor\_net analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/NeighborNet.html
   :license: CC BY-NC-ND 4.0
   :recipe: /`bioconductor-neighbornet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-neighbornet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-neighbornet/meta.yaml>`_

   Identify the putative mechanism explaining the active interactions between genes in the investigated phenotype.


.. conda:package:: bioconductor-neighbornet

   |downloads_bioconductor-neighbornet| |docker_bioconductor-neighbornet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-neighbornet

   and update with::

      mamba update bioconductor-neighbornet

  To create a new environment, run::

      mamba create --name myenvname bioconductor-neighbornet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-neighbornet:<tag>

   (see `bioconductor-neighbornet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-neighbornet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-neighbornet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-neighbornet
   :alt:   (downloads)
.. |docker_bioconductor-neighbornet| image:: https://quay.io/repository/biocontainers/bioconductor-neighbornet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-neighbornet
.. _`bioconductor-neighbornet/tags`: https://quay.io/repository/biocontainers/bioconductor-neighbornet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-neighbornet";
        var versions = ["1.18.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-neighbornet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-neighbornet/README.html