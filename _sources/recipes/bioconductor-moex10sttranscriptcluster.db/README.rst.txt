:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moex10sttranscriptcluster.db'
.. highlight: bash

bioconductor-moex10sttranscriptcluster.db
=========================================

.. conda:recipe:: bioconductor-moex10sttranscriptcluster.db
   :replaces_section_title:
   :noindex:

   Affymetrix moex10 annotation data \(chip moex10sttranscriptcluster\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/moex10sttranscriptcluster.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-moex10sttranscriptcluster.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moex10sttranscriptcluster.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moex10sttranscriptcluster.db/meta.yaml>`_

   Affymetrix moex10 annotation data \(chip moex10sttranscriptcluster\) assembled using data from public repositories


.. conda:package:: bioconductor-moex10sttranscriptcluster.db

   |downloads_bioconductor-moex10sttranscriptcluster.db| |docker_bioconductor-moex10sttranscriptcluster.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.8.0-5</code>,  <code>8.8.0-4</code>,  <code>8.8.0-3</code>,  <code>8.8.0-2</code>,  <code>8.8.0-1</code>,  <code>8.8.0-0</code>,  <code>8.7.0-8</code>,  <code>8.7.0-7</code>,  <code>8.7.0-6</code>,  </span></summary>
      

      ``8.8.0-5``,  ``8.8.0-4``,  ``8.8.0-3``,  ``8.8.0-2``,  ``8.8.0-1``,  ``8.8.0-0``,  ``8.7.0-8``,  ``8.7.0-7``,  ``8.7.0-6``,  ``8.7.0-5``,  ``8.7.0-4``,  ``8.7.0-3``,  ``8.7.0-1``,  ``8.7.0-0``

      
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

      mamba install bioconductor-moex10sttranscriptcluster.db

   and update with::

      mamba update bioconductor-moex10sttranscriptcluster.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-moex10sttranscriptcluster.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-moex10sttranscriptcluster.db:<tag>

   (see `bioconductor-moex10sttranscriptcluster.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-moex10sttranscriptcluster.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moex10sttranscriptcluster.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moex10sttranscriptcluster.db
   :alt:   (downloads)
.. |docker_bioconductor-moex10sttranscriptcluster.db| image:: https://quay.io/repository/biocontainers/bioconductor-moex10sttranscriptcluster.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moex10sttranscriptcluster.db
.. _`bioconductor-moex10sttranscriptcluster.db/tags`: https://quay.io/repository/biocontainers/bioconductor-moex10sttranscriptcluster.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-moex10sttranscriptcluster.db";
        var versions = ["8.8.0","8.8.0","8.8.0","8.8.0","8.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moex10sttranscriptcluster.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moex10sttranscriptcluster.db/README.html