:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-randomwalkrestartmh'
.. highlight: bash

bioconductor-randomwalkrestartmh
================================

.. conda:recipe:: bioconductor-randomwalkrestartmh
   :replaces_section_title:
   :noindex:

   Random walk with restart on multiplex and heterogeneous Networks

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RandomWalkRestartMH.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-randomwalkrestartmh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randomwalkrestartmh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-randomwalkrestartmh/meta.yaml>`_

   This package performs Random Walk with Restart on multiplex and heterogeneous networks. It is described in the following article\: \"Random Walk With Restart On Multiplex And Heterogeneous Biological Networks\" \<https\:\/\/academic.oup.com\/bioinformatics\/article\/35\/3\/497\/5055408\>.


.. conda:package:: bioconductor-randomwalkrestartmh

   |downloads_bioconductor-randomwalkrestartmh| |docker_bioconductor-randomwalkrestartmh|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dnet: 
   :depends r-igraph: 
   :depends r-matrix: 
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

      mamba install bioconductor-randomwalkrestartmh

   and update with::

      mamba update bioconductor-randomwalkrestartmh

  To create a new environment, run::

      mamba create --name myenvname bioconductor-randomwalkrestartmh

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-randomwalkrestartmh:<tag>

   (see `bioconductor-randomwalkrestartmh/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-randomwalkrestartmh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-randomwalkrestartmh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-randomwalkrestartmh
   :alt:   (downloads)
.. |docker_bioconductor-randomwalkrestartmh| image:: https://quay.io/repository/biocontainers/bioconductor-randomwalkrestartmh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-randomwalkrestartmh
.. _`bioconductor-randomwalkrestartmh/tags`: https://quay.io/repository/biocontainers/bioconductor-randomwalkrestartmh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-randomwalkrestartmh";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-randomwalkrestartmh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-randomwalkrestartmh/README.html