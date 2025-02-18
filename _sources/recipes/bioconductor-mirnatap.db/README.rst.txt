:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirnatap.db'
.. highlight: bash

bioconductor-mirnatap.db
========================

.. conda:recipe:: bioconductor-mirnatap.db
   :replaces_section_title:
   :noindex:

   Data for miRNAtap

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/miRNAtap.db.html
   :license: GPL-2
   :recipe: /`bioconductor-mirnatap.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatap.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatap.db/meta.yaml>`_

   This package holds the database for miRNAtap.


.. conda:package:: bioconductor-mirnatap.db

   |downloads_bioconductor-mirnatap.db| |docker_bioconductor-mirnatap.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.10-16</code>,  <code>0.99.10-15</code>,  <code>0.99.10-14</code>,  <code>0.99.10-13</code>,  <code>0.99.10-12</code>,  <code>0.99.10-11</code>,  <code>0.99.10-10</code>,  <code>0.99.10-9</code>,  <code>0.99.10-8</code>,  </span></summary>
      

      ``0.99.10-16``,  ``0.99.10-15``,  ``0.99.10-14``,  ``0.99.10-13``,  ``0.99.10-12``,  ``0.99.10-11``,  ``0.99.10-10``,  ``0.99.10-9``,  ``0.99.10-8``,  ``0.99.10-7``,  ``0.99.10-6``,  ``0.99.10-5``,  ``0.99.10-3``,  ``0.99.10-2``,  ``0.99.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-mirnatap: ``>=1.40.0,<1.41.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-mirnatap.db

   and update with::

      mamba update bioconductor-mirnatap.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mirnatap.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirnatap.db:<tag>

   (see `bioconductor-mirnatap.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirnatap.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirnatap.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirnatap.db
   :alt:   (downloads)
.. |docker_bioconductor-mirnatap.db| image:: https://quay.io/repository/biocontainers/bioconductor-mirnatap.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirnatap.db
.. _`bioconductor-mirnatap.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mirnatap.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirnatap.db";
        var versions = ["0.99.10","0.99.10","0.99.10","0.99.10","0.99.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirnatap.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirnatap.db/README.html