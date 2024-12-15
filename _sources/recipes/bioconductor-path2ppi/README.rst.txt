:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-path2ppi'
.. highlight: bash

bioconductor-path2ppi
=====================

.. conda:recipe:: bioconductor-path2ppi
   :replaces_section_title:
   :noindex:

   Prediction of pathway\-related protein\-protein interaction networks

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Path2PPI.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-path2ppi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-path2ppi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-path2ppi/meta.yaml>`_
   :links: biotools: :biotools:`path2ppi`

   Package to predict protein\-protein interaction \(PPI\) networks in target organisms for which only a view information about PPIs is available. Path2PPI predicts PPI networks based on sets of proteins which can belong to a certain pathway from well\-established model organisms. It helps to combine and transfer information of a certain pathway or biological process from several reference organisms to one target organism. Path2PPI only depends on the sequence similarity of the involved proteins.


.. conda:package:: bioconductor-path2ppi

   |downloads_bioconductor-path2ppi| |docker_bioconductor-path2ppi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-igraph: ``>=1.0.1``
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

      mamba install bioconductor-path2ppi

   and update with::

      mamba update bioconductor-path2ppi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-path2ppi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-path2ppi:<tag>

   (see `bioconductor-path2ppi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-path2ppi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-path2ppi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-path2ppi
   :alt:   (downloads)
.. |docker_bioconductor-path2ppi| image:: https://quay.io/repository/biocontainers/bioconductor-path2ppi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-path2ppi
.. _`bioconductor-path2ppi/tags`: https://quay.io/repository/biocontainers/bioconductor-path2ppi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-path2ppi";
        var versions = ["1.36.0","1.32.0","1.30.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-path2ppi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-path2ppi/README.html