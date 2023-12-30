:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iterclust'
.. highlight: bash

bioconductor-iterclust
======================

.. conda:recipe:: bioconductor-iterclust
   :replaces_section_title:
   :noindex:

   Iterative Clustering

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/iterClust.html
   :license: file LICENSE
   :recipe: /`bioconductor-iterclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iterclust/meta.yaml>`_

   A framework for performing clustering analysis iteratively.


.. conda:package:: bioconductor-iterclust

   |downloads_bioconductor-iterclust| |docker_bioconductor-iterclust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
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

      mamba install bioconductor-iterclust

   and update with::

      mamba update bioconductor-iterclust

  To create a new environment, run::

      mamba create --name myenvname bioconductor-iterclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-iterclust:<tag>

   (see `bioconductor-iterclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-iterclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iterclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iterclust
   :alt:   (downloads)
.. |docker_bioconductor-iterclust| image:: https://quay.io/repository/biocontainers/bioconductor-iterclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iterclust
.. _`bioconductor-iterclust/tags`: https://quay.io/repository/biocontainers/bioconductor-iterclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iterclust";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iterclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iterclust/README.html