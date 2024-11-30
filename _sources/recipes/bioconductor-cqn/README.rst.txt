:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cqn'
.. highlight: bash

bioconductor-cqn
================

.. conda:recipe:: bioconductor-cqn
   :replaces_section_title:
   :noindex:

   Conditional quantile normalization

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cqn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cqn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cqn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cqn/meta.yaml>`_
   :links: biotools: :biotools:`cqn`

   A normalization tool for RNA\-Seq data\, implementing the conditional quantile normalization method.


.. conda:package:: bioconductor-cqn

   |downloads_bioconductor-cqn| |docker_bioconductor-cqn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mclust: 
   :depends r-nor1mix: 
   :depends r-quantreg: 
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

      mamba install bioconductor-cqn

   and update with::

      mamba update bioconductor-cqn

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cqn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cqn:<tag>

   (see `bioconductor-cqn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cqn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cqn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cqn
   :alt:   (downloads)
.. |docker_bioconductor-cqn| image:: https://quay.io/repository/biocontainers/bioconductor-cqn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cqn
.. _`bioconductor-cqn/tags`: https://quay.io/repository/biocontainers/bioconductor-cqn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cqn";
        var versions = ["1.48.0","1.46.0","1.44.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cqn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cqn/README.html