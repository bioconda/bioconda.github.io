:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cmap'
.. highlight: bash

bioconductor-cmap
=================

.. conda:recipe:: bioconductor-cmap
   :replaces_section_title:
   :noindex:

   A data package containing annotation data for cMAP

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/cMAP.html
   :license: LGPL
   :recipe: /`bioconductor-cmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cmap/meta.yaml>`_

   Annotation data file for cMAP assembled using data from public data repositories


.. conda:package:: bioconductor-cmap

   |downloads_bioconductor-cmap| |docker_bioconductor-cmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.15.1-15</code>,  <code>1.15.1-14</code>,  <code>1.15.1-13</code>,  <code>1.15.1-12</code>,  <code>1.15.1-11</code>,  <code>1.15.1-10</code>,  <code>1.15.1-9</code>,  <code>1.15.1-8</code>,  <code>1.15.1-7</code>,  </span></summary>
      

      ``1.15.1-15``,  ``1.15.1-14``,  ``1.15.1-13``,  ``1.15.1-12``,  ``1.15.1-11``,  ``1.15.1-10``,  ``1.15.1-9``,  ``1.15.1-8``,  ``1.15.1-7``,  ``1.15.1-6``,  ``1.15.1-5``,  ``1.15.1-4``,  ``1.15.1-3``,  ``1.15.1-2``,  ``1.15.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-cmap

   and update with::

      mamba update bioconductor-cmap

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cmap:<tag>

   (see `bioconductor-cmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cmap
   :alt:   (downloads)
.. |docker_bioconductor-cmap| image:: https://quay.io/repository/biocontainers/bioconductor-cmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cmap
.. _`bioconductor-cmap/tags`: https://quay.io/repository/biocontainers/bioconductor-cmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cmap";
        var versions = ["1.15.1","1.15.1","1.15.1","1.15.1","1.15.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cmap/README.html