:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowmap'
.. highlight: bash

bioconductor-flowmap
====================

.. conda:recipe:: bioconductor-flowmap
   :replaces_section_title:
   :noindex:

   Mapping cell populations in flow cytometry data for cross\-sample comparisons using the Friedman\-Rafsky Test

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/flowMap.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-flowmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowmap/meta.yaml>`_
   :links: biotools: :biotools:`flowmap`, doi: :doi:`10.1002/cyto.a.22735`

   flowMap quantifies the similarity of cell populations across multiple flow cytometry samples using a nonparametric multivariate statistical test. The method is able to map cell populations of different size\, shape\, and proportion across multiple flow cytometry samples. The algorithm can be incorporate in any flow cytometry work flow that requires accurat quantification of similarity between cell populations.


.. conda:package:: bioconductor-flowmap

   |downloads_bioconductor-flowmap| |docker_bioconductor-flowmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.1-0``,  ``1.18.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-abind: ``>=1.4.0``
   :depends r-ade4: ``>=1.5-2``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: ``>=1.0.3``
   :depends r-matrix: ``>=1.1-4``
   :depends r-reshape2: ``>=1.2.2``
   :depends r-scales: ``>=0.2.3``
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

      mamba install bioconductor-flowmap

   and update with::

      mamba update bioconductor-flowmap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowmap:<tag>

   (see `bioconductor-flowmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowmap
   :alt:   (downloads)
.. |docker_bioconductor-flowmap| image:: https://quay.io/repository/biocontainers/bioconductor-flowmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowmap
.. _`bioconductor-flowmap/tags`: https://quay.io/repository/biocontainers/bioconductor-flowmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowmap";
        var versions = ["1.38.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowmap/README.html