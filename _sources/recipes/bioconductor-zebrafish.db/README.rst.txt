:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-zebrafish.db'
.. highlight: bash

bioconductor-zebrafish.db
=========================

.. conda:recipe:: bioconductor-zebrafish.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix Zebrafish Array annotation data \(chip zebrafish\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/zebrafish.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-zebrafish.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zebrafish.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-zebrafish.db/meta.yaml>`_

   Affymetrix Affymetrix Zebrafish Array annotation data \(chip zebrafish\) assembled using data from public repositories


.. conda:package:: bioconductor-zebrafish.db

   |downloads_bioconductor-zebrafish.db| |docker_bioconductor-zebrafish.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.13.0-4</code>,  <code>3.13.0-3</code>,  <code>3.13.0-2</code>,  <code>3.13.0-1</code>,  <code>3.13.0-0</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  </span></summary>
      

      ``3.13.0-4``,  ``3.13.0-3``,  ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-org.dr.eg.db: ``>=3.18.0,<3.19.0``
   :depends curl: 
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

      mamba install bioconductor-zebrafish.db

   and update with::

      mamba update bioconductor-zebrafish.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-zebrafish.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-zebrafish.db:<tag>

   (see `bioconductor-zebrafish.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-zebrafish.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-zebrafish.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-zebrafish.db
   :alt:   (downloads)
.. |docker_bioconductor-zebrafish.db| image:: https://quay.io/repository/biocontainers/bioconductor-zebrafish.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-zebrafish.db
.. _`bioconductor-zebrafish.db/tags`: https://quay.io/repository/biocontainers/bioconductor-zebrafish.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-zebrafish.db";
        var versions = ["3.13.0","3.13.0","3.13.0","3.13.0","3.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-zebrafish.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-zebrafish.db/README.html