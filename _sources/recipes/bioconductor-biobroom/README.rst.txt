:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biobroom'
.. highlight: bash

bioconductor-biobroom
=====================

.. conda:recipe:: bioconductor-biobroom
   :replaces_section_title:
   :noindex:

   Turn Bioconductor objects into tidy data frames

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/biobroom.html
   :license: LGPL
   :recipe: /`bioconductor-biobroom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobroom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobroom/meta.yaml>`_

   This package contains methods for converting standard objects constructed by bioinformatics packages\, especially those in Bioconductor\, and converting them to tidy data. It thus serves as a complement to the broom package\, and follows the same the tidy\, augment\, glance division of tidying methods. Tidying data makes it easy to recombine\, reshape and visualize bioinformatics analyses.


.. conda:package:: bioconductor-biobroom

   |downloads_bioconductor-biobroom| |docker_bioconductor-biobroom|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-broom: 
   :depends r-dplyr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-biobroom

   and update with::

      mamba update bioconductor-biobroom

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biobroom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biobroom:<tag>

   (see `bioconductor-biobroom/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biobroom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biobroom.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biobroom
   :alt:   (downloads)
.. |docker_bioconductor-biobroom| image:: https://quay.io/repository/biocontainers/bioconductor-biobroom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biobroom
.. _`bioconductor-biobroom/tags`: https://quay.io/repository/biocontainers/bioconductor-biobroom?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biobroom";
        var versions = ["1.32.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biobroom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biobroom/README.html