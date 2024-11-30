:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-quantro'
.. highlight: bash

bioconductor-quantro
====================

.. conda:recipe:: bioconductor-quantro
   :replaces_section_title:
   :noindex:

   A test for when to use quantile normalization

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/quantro.html
   :license: GPL-3
   :recipe: /`bioconductor-quantro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quantro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quantro/meta.yaml>`_
   :links: biotools: :biotools:`quantro`

   A data\-driven test for the assumptions of quantile normalization using raw data such as objects that inherit eSets \(e.g. ExpressionSet\, MethylSet\). Group level information about each sample \(such as Tumor \/ Normal status\) must also be provided because the test assesses if there are global differences in the distributions between the user\-defined groups.


.. conda:package:: bioconductor-quantro

   |downloads_bioconductor-quantro| |docker_bioconductor-quantro|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-minfi: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-iterators: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-quantro

   and update with::

      mamba update bioconductor-quantro

  To create a new environment, run::

      mamba create --name myenvname bioconductor-quantro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-quantro:<tag>

   (see `bioconductor-quantro/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-quantro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-quantro.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-quantro
   :alt:   (downloads)
.. |docker_bioconductor-quantro| image:: https://quay.io/repository/biocontainers/bioconductor-quantro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-quantro
.. _`bioconductor-quantro/tags`: https://quay.io/repository/biocontainers/bioconductor-quantro?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-quantro";
        var versions = ["1.36.0","1.34.0","1.32.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-quantro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-quantro/README.html