:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanwgdaslv3.db'
.. highlight: bash

bioconductor-illuminahumanwgdaslv3.db
=====================================

.. conda:recipe:: bioconductor-illuminahumanwgdaslv3.db
   :replaces_section_title:
   :noindex:

   Illumina HumanHT12WGDASLv3 annotation data \(chip illuminaHumanWGDASLv3\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/illuminaHumanWGDASLv3.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanwgdaslv3.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanwgdaslv3.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanwgdaslv3.db/meta.yaml>`_

   Illumina HumanHT12WGDASLv3 annotation data \(chip illuminaHumanWGDASLv3\) assembled using data from public repositories


.. conda:package:: bioconductor-illuminahumanwgdaslv3.db

   |downloads_bioconductor-illuminahumanwgdaslv3.db| |docker_bioconductor-illuminahumanwgdaslv3.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-13</code>,  <code>1.26.0-12</code>,  <code>1.26.0-11</code>,  <code>1.26.0-10</code>,  <code>1.26.0-9</code>,  <code>1.26.0-8</code>,  <code>1.26.0-7</code>,  <code>1.26.0-6</code>,  <code>1.26.0-5</code>,  </span></summary>
      

      ``1.26.0-13``,  ``1.26.0-12``,  ``1.26.0-11``,  ``1.26.0-10``,  ``1.26.0-9``,  ``1.26.0-8``,  ``1.26.0-7``,  ``1.26.0-6``,  ``1.26.0-5``,  ``1.26.0-4``,  ``1.26.0-3``,  ``1.26.0-2``,  ``1.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
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

      mamba install bioconductor-illuminahumanwgdaslv3.db

   and update with::

      mamba update bioconductor-illuminahumanwgdaslv3.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-illuminahumanwgdaslv3.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminahumanwgdaslv3.db:<tag>

   (see `bioconductor-illuminahumanwgdaslv3.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminahumanwgdaslv3.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanwgdaslv3.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanwgdaslv3.db
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanwgdaslv3.db| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanwgdaslv3.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanwgdaslv3.db
.. _`bioconductor-illuminahumanwgdaslv3.db/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanwgdaslv3.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminahumanwgdaslv3.db";
        var versions = ["1.26.0","1.26.0","1.26.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanwgdaslv3.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanwgdaslv3.db/README.html