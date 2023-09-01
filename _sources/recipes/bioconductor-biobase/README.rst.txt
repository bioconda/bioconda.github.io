:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biobase'
.. highlight: bash

bioconductor-biobase
====================

.. conda:recipe:: bioconductor-biobase
   :replaces_section_title:
   :noindex:

   Biobase\: Base functions for Bioconductor

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Biobase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biobase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biobase/meta.yaml>`_
   :links: biotools: :biotools:`biobase`

   Functions that are needed by many other packages or which replace R functions.


.. conda:package:: bioconductor-biobase

   |downloads_bioconductor-biobase| |docker_bioconductor-biobase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.60.0-0</code>,  <code>2.58.0-1</code>,  <code>2.58.0-0</code>,  <code>2.54.0-2</code>,  <code>2.54.0-1</code>,  <code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-1</code>,  <code>2.50.0-0</code>,  </span></summary>
      

      ``2.60.0-0``,  ``2.58.0-1``,  ``2.58.0-0``,  ``2.54.0-2``,  ``2.54.0-1``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-1``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-1``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.40.0-1``,  ``2.40.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.2-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-biobase

   and update with::

      mamba update bioconductor-biobase

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biobase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biobase:<tag>

   (see `bioconductor-biobase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biobase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biobase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biobase
   :alt:   (downloads)
.. |docker_bioconductor-biobase| image:: https://quay.io/repository/biocontainers/bioconductor-biobase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biobase
.. _`bioconductor-biobase/tags`: https://quay.io/repository/biocontainers/bioconductor-biobase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biobase";
        var versions = ["2.60.0","2.58.0","2.58.0","2.54.0","2.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biobase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biobase/README.html