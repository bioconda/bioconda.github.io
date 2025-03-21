:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mm24kresogen.db'
.. highlight: bash

bioconductor-mm24kresogen.db
============================

.. conda:recipe:: bioconductor-mm24kresogen.db
   :replaces_section_title:
   :noindex:

   RNG\_MRC Mouse Pangenomic 24k Set annotation data \(chip mm24kresogen\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/mm24kresogen.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mm24kresogen.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mm24kresogen.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mm24kresogen.db/meta.yaml>`_

   RNG\_MRC Mouse Pangenomic 24k Set annotation data \(chip mm24kresogen\) assembled using data from public repositories


.. conda:package:: bioconductor-mm24kresogen.db

   |downloads_bioconductor-mm24kresogen.db| |docker_bioconductor-mm24kresogen.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.0-13</code>,  <code>2.5.0-12</code>,  <code>2.5.0-11</code>,  <code>2.5.0-10</code>,  <code>2.5.0-9</code>,  <code>2.5.0-8</code>,  <code>2.5.0-7</code>,  <code>2.5.0-6</code>,  <code>2.5.0-5</code>,  </span></summary>
      

      ``2.5.0-13``,  ``2.5.0-12``,  ``2.5.0-11``,  ``2.5.0-10``,  ``2.5.0-9``,  ``2.5.0-8``,  ``2.5.0-7``,  ``2.5.0-6``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-0``

      
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

      mamba install bioconductor-mm24kresogen.db

   and update with::

      mamba update bioconductor-mm24kresogen.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mm24kresogen.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mm24kresogen.db:<tag>

   (see `bioconductor-mm24kresogen.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mm24kresogen.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mm24kresogen.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mm24kresogen.db
   :alt:   (downloads)
.. |docker_bioconductor-mm24kresogen.db| image:: https://quay.io/repository/biocontainers/bioconductor-mm24kresogen.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mm24kresogen.db
.. _`bioconductor-mm24kresogen.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mm24kresogen.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mm24kresogen.db";
        var versions = ["2.5.0","2.5.0","2.5.0","2.5.0","2.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mm24kresogen.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mm24kresogen.db/README.html