:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirbaseversions.db'
.. highlight: bash

bioconductor-mirbaseversions.db
===============================

.. conda:recipe:: bioconductor-mirbaseversions.db
   :replaces_section_title:
   :noindex:

   Collection of mature miRNA names of 22 different miRBase release versions

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/miRBaseVersions.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mirbaseversions.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbaseversions.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbaseversions.db/meta.yaml>`_

   Annotation package containing all available miRNA names from 22 versions \(data from http\:\/\/www.mirbase.org\/\).


.. conda:package:: bioconductor-mirbaseversions.db

   |downloads_bioconductor-mirbaseversions.db| |docker_bioconductor-mirbaseversions.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-12</code>,  <code>1.1.0-11</code>,  <code>1.1.0-10</code>,  <code>1.1.0-9</code>,  <code>1.1.0-8</code>,  <code>1.1.0-7</code>,  <code>1.1.0-6</code>,  <code>1.1.0-5</code>,  <code>1.1.0-4</code>,  </span></summary>
      

      ``1.1.0-12``,  ``1.1.0-11``,  ``1.1.0-10``,  ``1.1.0-9``,  ``1.1.0-8``,  ``1.1.0-7``,  ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-1``,  ``1.1.0-0``,  ``0.99.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-gtools: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-mirbaseversions.db

   and update with::

      mamba update bioconductor-mirbaseversions.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mirbaseversions.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirbaseversions.db:<tag>

   (see `bioconductor-mirbaseversions.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirbaseversions.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirbaseversions.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirbaseversions.db
   :alt:   (downloads)
.. |docker_bioconductor-mirbaseversions.db| image:: https://quay.io/repository/biocontainers/bioconductor-mirbaseversions.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirbaseversions.db
.. _`bioconductor-mirbaseversions.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mirbaseversions.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirbaseversions.db";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirbaseversions.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirbaseversions.db/README.html