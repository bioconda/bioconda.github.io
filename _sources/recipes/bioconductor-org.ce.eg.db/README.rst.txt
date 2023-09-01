:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.ce.eg.db'
.. highlight: bash

bioconductor-org.ce.eg.db
=========================

.. conda:recipe:: bioconductor-org.ce.eg.db
   :replaces_section_title:
   :noindex:

   Genome wide annotation for Worm

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/org.Ce.eg.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.ce.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.ce.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.ce.eg.db/meta.yaml>`_

   Genome wide annotation for Worm\, primarily based on mapping using Entrez Gene identifiers.


.. conda:package:: bioconductor-org.ce.eg.db

   |downloads_bioconductor-org.ce.eg.db| |docker_bioconductor-org.ce.eg.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.17.0-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-1</code>,  <code>3.14.0-0</code>,  <code>3.13.0-0</code>,  <code>3.12.0-1</code>,  <code>3.12.0-0</code>,  <code>3.11.1-0</code>,  <code>3.10.0-0</code>,  </span></summary>
      

      ``3.17.0-0``,  ``3.16.0-0``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.13.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.1-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.0-0``,  ``3.4.1-1``,  ``3.4.1-0``,  ``3.2.3-2``,  ``3.2.3-1``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
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

      mamba install bioconductor-org.ce.eg.db

   and update with::

      mamba update bioconductor-org.ce.eg.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-org.ce.eg.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-org.ce.eg.db:<tag>

   (see `bioconductor-org.ce.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-org.ce.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.ce.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-org.ce.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-org.ce.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.ce.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.ce.eg.db
.. _`bioconductor-org.ce.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.ce.eg.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-org.ce.eg.db";
        var versions = ["3.17.0","3.16.0","3.14.0","3.14.0","3.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.ce.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.ce.eg.db/README.html