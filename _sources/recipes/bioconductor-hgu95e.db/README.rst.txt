:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu95e.db'
.. highlight: bash

bioconductor-hgu95e.db
======================

.. conda:recipe:: bioconductor-hgu95e.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix HG U95E Array annotation data \(chip hgu95e\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/hgu95e.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgu95e.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95e.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95e.db/meta.yaml>`_

   Affymetrix Affymetrix HG U95E Array annotation data \(chip hgu95e\) assembled using data from public repositories


.. conda:package:: bioconductor-hgu95e.db

   |downloads_bioconductor-hgu95e.db| |docker_bioconductor-hgu95e.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.13.0-4</code>,  <code>3.13.0-3</code>,  <code>3.13.0-2</code>,  <code>3.13.0-1</code>,  <code>3.13.0-0</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  </span></summary>
      

      ``3.13.0-4``,  ``3.13.0-3``,  ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
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

      mamba install bioconductor-hgu95e.db

   and update with::

      mamba update bioconductor-hgu95e.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hgu95e.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu95e.db:<tag>

   (see `bioconductor-hgu95e.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu95e.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95e.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu95e.db
   :alt:   (downloads)
.. |docker_bioconductor-hgu95e.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95e.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95e.db
.. _`bioconductor-hgu95e.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu95e.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu95e.db";
        var versions = ["3.13.0","3.13.0","3.13.0","3.13.0","3.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95e.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95e.db/README.html