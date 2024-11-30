:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-goprofiles'
.. highlight: bash

bioconductor-goprofiles
=======================

.. conda:recipe:: bioconductor-goprofiles
   :replaces_section_title:
   :noindex:

   goProfiles\: an R package for the statistical analysis of functional profiles

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/goProfiles.html
   :license: GPL-2
   :recipe: /`bioconductor-goprofiles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goprofiles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-goprofiles/meta.yaml>`_

   The package implements methods to compare lists of genes based on comparing the corresponding \'functional profiles\'.


.. conda:package:: bioconductor-goprofiles

   |downloads_bioconductor-goprofiles| |docker_bioconductor-goprofiles|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  </span></summary>
      

      ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-1``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-compquadform: 
   :depends r-stringr: 
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

      mamba install bioconductor-goprofiles

   and update with::

      mamba update bioconductor-goprofiles

  To create a new environment, run::

      mamba create --name myenvname bioconductor-goprofiles

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-goprofiles:<tag>

   (see `bioconductor-goprofiles/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-goprofiles| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-goprofiles.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-goprofiles
   :alt:   (downloads)
.. |docker_bioconductor-goprofiles| image:: https://quay.io/repository/biocontainers/bioconductor-goprofiles/status
   :target: https://quay.io/repository/biocontainers/bioconductor-goprofiles
.. _`bioconductor-goprofiles/tags`: https://quay.io/repository/biocontainers/bioconductor-goprofiles?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-goprofiles";
        var versions = ["1.64.0","1.62.0","1.60.0","1.56.0","1.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-goprofiles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-goprofiles/README.html