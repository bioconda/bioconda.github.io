:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathrender'
.. highlight: bash

bioconductor-pathrender
=======================

.. conda:recipe:: bioconductor-pathrender
   :replaces_section_title:
   :noindex:

   Render molecular pathways

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/pathRender.html
   :license: LGPL
   :recipe: /`bioconductor-pathrender <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathrender>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathrender/meta.yaml>`_
   :links: biotools: :biotools:`pathrender`, doi: :doi:`10.1038/nmeth.3252`

   build graphs from pathway databases\, render them by Rgraphviz.


.. conda:package:: bioconductor-pathrender

   |downloads_bioconductor-pathrender| |docker_bioconductor-pathrender|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-cmap: ``>=1.15.0,<1.16.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-pathrender

   and update with::

      mamba update bioconductor-pathrender

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pathrender

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathrender:<tag>

   (see `bioconductor-pathrender/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathrender| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathrender.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pathrender
   :alt:   (downloads)
.. |docker_bioconductor-pathrender| image:: https://quay.io/repository/biocontainers/bioconductor-pathrender/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathrender
.. _`bioconductor-pathrender/tags`: https://quay.io/repository/biocontainers/bioconductor-pathrender?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pathrender";
        var versions = ["1.70.0","1.68.0","1.66.0","1.62.0","1.60.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathrender/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathrender/README.html