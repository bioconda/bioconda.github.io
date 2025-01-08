:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lionessr'
.. highlight: bash

bioconductor-lionessr
=====================

.. conda:recipe:: bioconductor-lionessr
   :replaces_section_title:
   :noindex:

   Modeling networks for individual samples using LIONESS

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lionessR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lionessr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lionessr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lionessr/meta.yaml>`_

   LIONESS\, or Linear Interpolation to Obtain Network Estimates for Single Samples\, can be used to reconstruct single\-sample networks \(https\:\/\/arxiv.org\/abs\/1505.06440\). This code implements the LIONESS equation in the lioness function in R to reconstruct single\-sample networks. The default network reconstruction method we use is based on Pearson correlation. However\, lionessR can run on any network reconstruction algorithms that returns a complete\, weighted adjacency matrix. lionessR works for both unipartite and bipartite networks.


.. conda:package:: bioconductor-lionessr

   |downloads_bioconductor-lionessr| |docker_bioconductor-lionessr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-lionessr

   and update with::

      mamba update bioconductor-lionessr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lionessr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lionessr:<tag>

   (see `bioconductor-lionessr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lionessr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lionessr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lionessr
   :alt:   (downloads)
.. |docker_bioconductor-lionessr| image:: https://quay.io/repository/biocontainers/bioconductor-lionessr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lionessr
.. _`bioconductor-lionessr/tags`: https://quay.io/repository/biocontainers/bioconductor-lionessr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lionessr";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lionessr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lionessr/README.html