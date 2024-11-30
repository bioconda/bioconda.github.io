:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rqubic'
.. highlight: bash

bioconductor-rqubic
===================

.. conda:recipe:: bioconductor-rqubic
   :replaces_section_title:
   :noindex:

   Qualitative biclustering algorithm for expression data analysis in R

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/rqubic.html
   :license: GPL-2
   :recipe: /`bioconductor-rqubic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqubic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rqubic/meta.yaml>`_

   This package implements the QUBIC algorithm introduced by Li et al. for the qualitative biclustering with gene expression data.


.. conda:package:: bioconductor-rqubic

   |downloads_bioconductor-rqubic| |docker_bioconductor-rqubic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biclust: 
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

      mamba install bioconductor-rqubic

   and update with::

      mamba update bioconductor-rqubic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rqubic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rqubic:<tag>

   (see `bioconductor-rqubic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rqubic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rqubic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rqubic
   :alt:   (downloads)
.. |docker_bioconductor-rqubic| image:: https://quay.io/repository/biocontainers/bioconductor-rqubic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rqubic
.. _`bioconductor-rqubic/tags`: https://quay.io/repository/biocontainers/bioconductor-rqubic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rqubic";
        var versions = ["1.48.0","1.46.0","1.44.0","1.44.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rqubic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rqubic/README.html