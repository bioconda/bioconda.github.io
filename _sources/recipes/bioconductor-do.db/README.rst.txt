:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-do.db'
.. highlight: bash

bioconductor-do.db
==================

.. conda:recipe:: bioconductor-do.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps describing the entire Disease Ontology

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/DO.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-do.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-do.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-do.db/meta.yaml>`_

   A set of annotation maps describing the entire Disease Ontology assembled using data from DO


.. conda:package:: bioconductor-do.db

   |downloads_bioconductor-do.db| |docker_bioconductor-do.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.9-16</code>,  <code>2.9-15</code>,  <code>2.9-14</code>,  <code>2.9-13</code>,  <code>2.9-12</code>,  <code>2.9-11</code>,  <code>2.9-10</code>,  <code>2.9-9</code>,  <code>2.9-8</code>,  </span></summary>
      

      ``2.9-16``,  ``2.9-15``,  ``2.9-14``,  ``2.9-13``,  ``2.9-12``,  ``2.9-11``,  ``2.9-10``,  ``2.9-9``,  ``2.9-8``,  ``2.9-7``,  ``2.9-6``,  ``2.9-4``,  ``2.9-3``,  ``2.9-1``,  ``2.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-do.db

   and update with::

      mamba update bioconductor-do.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-do.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-do.db:<tag>

   (see `bioconductor-do.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-do.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-do.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-do.db
   :alt:   (downloads)
.. |docker_bioconductor-do.db| image:: https://quay.io/repository/biocontainers/bioconductor-do.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-do.db
.. _`bioconductor-do.db/tags`: https://quay.io/repository/biocontainers/bioconductor-do.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-do.db";
        var versions = ["2.9","2.9","2.9","2.9","2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-do.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-do.db/README.html