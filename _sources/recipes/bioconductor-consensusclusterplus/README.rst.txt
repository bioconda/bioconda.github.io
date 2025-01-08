:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-consensusclusterplus'
.. highlight: bash

bioconductor-consensusclusterplus
=================================

.. conda:recipe:: bioconductor-consensusclusterplus
   :replaces_section_title:
   :noindex:

   ConsensusClusterPlus

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ConsensusClusterPlus.html
   :license: GPL version 2
   :recipe: /`bioconductor-consensusclusterplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusclusterplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusclusterplus/meta.yaml>`_
   :links: biotools: :biotools:`consensusclusterplus`

   algorithm for determining cluster count and membership by stability evidence in unsupervised analysis


.. conda:package:: bioconductor-consensusclusterplus

   |downloads_bioconductor-consensusclusterplus| |docker_bioconductor-consensusclusterplus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.48.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-all: ``>=1.48.0,<1.49.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
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

      mamba install bioconductor-consensusclusterplus

   and update with::

      mamba update bioconductor-consensusclusterplus

  To create a new environment, run::

      mamba create --name myenvname bioconductor-consensusclusterplus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-consensusclusterplus:<tag>

   (see `bioconductor-consensusclusterplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-consensusclusterplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-consensusclusterplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-consensusclusterplus
   :alt:   (downloads)
.. |docker_bioconductor-consensusclusterplus| image:: https://quay.io/repository/biocontainers/bioconductor-consensusclusterplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-consensusclusterplus
.. _`bioconductor-consensusclusterplus/tags`: https://quay.io/repository/biocontainers/bioconductor-consensusclusterplus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-consensusclusterplus";
        var versions = ["1.70.0","1.66.0","1.64.0","1.62.0","1.58.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-consensusclusterplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-consensusclusterplus/README.html