:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-graphite'
.. highlight: bash

bioconductor-graphite
=====================

.. conda:recipe:: bioconductor-graphite
   :replaces_section_title:
   :noindex:

   GRAPH Interaction from pathway Topological Environment

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/graphite.html
   :license: AGPL-3
   :recipe: /`bioconductor-graphite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-graphite/meta.yaml>`_
   :links: biotools: :biotools:`graphite`

   Graph objects from pathway topology derived from KEGG\, Panther\, PathBank\, PharmGKB\, Reactome SMPDB and WikiPathways databases.


.. conda:package:: bioconductor-graphite

   |downloads_bioconductor-graphite| |docker_bioconductor-graphite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.2-0``,  ``1.28.1-0``,  ``1.26.3-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: 
   :depends r-purrr: 
   :depends r-rappdirs: 
   :depends r-rlang: 
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

      mamba install bioconductor-graphite

   and update with::

      mamba update bioconductor-graphite

  To create a new environment, run::

      mamba create --name myenvname bioconductor-graphite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-graphite:<tag>

   (see `bioconductor-graphite/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-graphite| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-graphite.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-graphite
   :alt:   (downloads)
.. |docker_bioconductor-graphite| image:: https://quay.io/repository/biocontainers/bioconductor-graphite/status
   :target: https://quay.io/repository/biocontainers/bioconductor-graphite
.. _`bioconductor-graphite/tags`: https://quay.io/repository/biocontainers/bioconductor-graphite?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-graphite";
        var versions = ["1.48.0","1.46.0","1.44.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-graphite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-graphite/README.html