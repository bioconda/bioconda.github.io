:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drosgenome1.db'
.. highlight: bash

bioconductor-drosgenome1.db
===========================

.. conda:recipe:: bioconductor-drosgenome1.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix DrosGenome1 Array annotation data \(chip drosgenome1\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/drosgenome1.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-drosgenome1.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drosgenome1.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drosgenome1.db/meta.yaml>`_

   Affymetrix Affymetrix DrosGenome1 Array annotation data \(chip drosgenome1\) assembled using data from public repositories


.. conda:package:: bioconductor-drosgenome1.db

   |downloads_bioconductor-drosgenome1.db| |docker_bioconductor-drosgenome1.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.13.0-4</code>,  <code>3.13.0-3</code>,  <code>3.13.0-2</code>,  <code>3.13.0-1</code>,  <code>3.13.0-0</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  </span></summary>
      

      ``3.13.0-4``,  ``3.13.0-3``,  ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-org.dm.eg.db: ``>=3.18.0,<3.19.0``
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

      mamba install bioconductor-drosgenome1.db

   and update with::

      mamba update bioconductor-drosgenome1.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-drosgenome1.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drosgenome1.db:<tag>

   (see `bioconductor-drosgenome1.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drosgenome1.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drosgenome1.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drosgenome1.db
   :alt:   (downloads)
.. |docker_bioconductor-drosgenome1.db| image:: https://quay.io/repository/biocontainers/bioconductor-drosgenome1.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drosgenome1.db
.. _`bioconductor-drosgenome1.db/tags`: https://quay.io/repository/biocontainers/bioconductor-drosgenome1.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-drosgenome1.db";
        var versions = ["3.13.0","3.13.0","3.13.0","3.13.0","3.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drosgenome1.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drosgenome1.db/README.html