:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hta20probeset.db'
.. highlight: bash

bioconductor-hta20probeset.db
=============================

.. conda:recipe:: bioconductor-hta20probeset.db
   :replaces_section_title:
   :noindex:

   Affymetrix hta20 annotation data \(chip hta20probeset\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/hta20probeset.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hta20probeset.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hta20probeset.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hta20probeset.db/meta.yaml>`_

   Affymetrix hta20 annotation data \(chip hta20probeset\) assembled using data from public repositories


.. conda:package:: bioconductor-hta20probeset.db

   |downloads_bioconductor-hta20probeset.db| |docker_bioconductor-hta20probeset.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.8.0-3</code>,  <code>8.8.0-2</code>,  <code>8.8.0-1</code>,  <code>8.8.0-0</code>,  <code>8.7.0-7</code>,  <code>8.7.0-6</code>,  <code>8.7.0-5</code>,  <code>8.7.0-4</code>,  <code>8.7.0-3</code>,  </span></summary>
      

      ``8.8.0-3``,  ``8.8.0-2``,  ``8.8.0-1``,  ``8.8.0-0``,  ``8.7.0-7``,  ``8.7.0-6``,  ``8.7.0-5``,  ``8.7.0-4``,  ``8.7.0-3``,  ``8.7.0-2``,  ``8.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-hta20probeset.db

   and update with::

      mamba update bioconductor-hta20probeset.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hta20probeset.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hta20probeset.db:<tag>

   (see `bioconductor-hta20probeset.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hta20probeset.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hta20probeset.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hta20probeset.db
   :alt:   (downloads)
.. |docker_bioconductor-hta20probeset.db| image:: https://quay.io/repository/biocontainers/bioconductor-hta20probeset.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hta20probeset.db
.. _`bioconductor-hta20probeset.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hta20probeset.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hta20probeset.db";
        var versions = ["8.8.0","8.8.0","8.8.0","8.8.0","8.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hta20probeset.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hta20probeset.db/README.html