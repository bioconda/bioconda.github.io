:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-maqcexpression4plex'
.. highlight: bash

bioconductor-maqcexpression4plex
================================

.. conda:recipe:: bioconductor-maqcexpression4plex
   :replaces_section_title:
   :noindex:

   Sample Expression Data \- MAQC \/ HG18 \- NimbleGen

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/maqcExpression4plex.html
   :license: GPL
   :recipe: /`bioconductor-maqcexpression4plex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maqcexpression4plex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-maqcexpression4plex/meta.yaml>`_

   Data from human \(HG18\) 4plex NimbleGen array. It has 24k genes with 3 60mer probes per gene.


.. conda:package:: bioconductor-maqcexpression4plex

   |downloads_bioconductor-maqcexpression4plex| |docker_bioconductor-maqcexpression4plex|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.41.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.41.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.33.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends curl: 
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

      mamba install bioconductor-maqcexpression4plex

   and update with::

      mamba update bioconductor-maqcexpression4plex

  To create a new environment, run::

      mamba create --name myenvname bioconductor-maqcexpression4plex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-maqcexpression4plex:<tag>

   (see `bioconductor-maqcexpression4plex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-maqcexpression4plex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-maqcexpression4plex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-maqcexpression4plex
   :alt:   (downloads)
.. |docker_bioconductor-maqcexpression4plex| image:: https://quay.io/repository/biocontainers/bioconductor-maqcexpression4plex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-maqcexpression4plex
.. _`bioconductor-maqcexpression4plex/tags`: https://quay.io/repository/biocontainers/bioconductor-maqcexpression4plex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-maqcexpression4plex";
        var versions = ["1.50.0","1.46.0","1.44.0","1.41.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-maqcexpression4plex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-maqcexpression4plex/README.html