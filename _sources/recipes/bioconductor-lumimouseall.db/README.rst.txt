:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumimouseall.db'
.. highlight: bash

bioconductor-lumimouseall.db
============================

.. conda:recipe:: bioconductor-lumimouseall.db
   :replaces_section_title:
   :noindex:

   Illumina Mouse Illumina expression annotation data \(chip lumiMouseAll\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/lumiMouseAll.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lumimouseall.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumimouseall.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumimouseall.db/meta.yaml>`_

   Illumina Mouse Illumina expression annotation data \(chip lumiMouseAll\) assembled using data from public repositories


.. conda:package:: bioconductor-lumimouseall.db

   |downloads_bioconductor-lumimouseall.db| |docker_bioconductor-lumimouseall.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-13</code>,  <code>1.22.0-12</code>,  <code>1.22.0-11</code>,  <code>1.22.0-10</code>,  <code>1.22.0-9</code>,  <code>1.22.0-8</code>,  <code>1.22.0-7</code>,  <code>1.22.0-6</code>,  <code>1.22.0-5</code>,  </span></summary>
      

      ``1.22.0-13``,  ``1.22.0-12``,  ``1.22.0-11``,  ``1.22.0-10``,  ``1.22.0-9``,  ``1.22.0-8``,  ``1.22.0-7``,  ``1.22.0-6``,  ``1.22.0-5``,  ``1.22.0-4``,  ``1.22.0-3``,  ``1.22.0-2``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-org.mm.eg.db: ``>=3.20.0,<3.21.0``
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

      mamba install bioconductor-lumimouseall.db

   and update with::

      mamba update bioconductor-lumimouseall.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lumimouseall.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lumimouseall.db:<tag>

   (see `bioconductor-lumimouseall.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lumimouseall.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumimouseall.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lumimouseall.db
   :alt:   (downloads)
.. |docker_bioconductor-lumimouseall.db| image:: https://quay.io/repository/biocontainers/bioconductor-lumimouseall.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumimouseall.db
.. _`bioconductor-lumimouseall.db/tags`: https://quay.io/repository/biocontainers/bioconductor-lumimouseall.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lumimouseall.db";
        var versions = ["1.22.0","1.22.0","1.22.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumimouseall.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumimouseall.db/README.html