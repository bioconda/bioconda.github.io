:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactome.db'
.. highlight: bash

bioconductor-reactome.db
========================

.. conda:recipe:: bioconductor-reactome.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps for reactome

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/reactome.db.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-reactome.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactome.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactome.db/meta.yaml>`_

   A set of annotation maps for reactome assembled using data from reactome


.. conda:package:: bioconductor-reactome.db

   |downloads_bioconductor-reactome.db| |docker_bioconductor-reactome.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.86.2-0</code>,  <code>1.84.0-0</code>,  <code>1.82.0-0</code>,  <code>1.77.0-1</code>,  <code>1.77.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-1</code>,  <code>1.74.0-0</code>,  <code>1.70.0-1</code>,  </span></summary>
      

      ``1.86.2-0``,  ``1.84.0-0``,  ``1.82.0-0``,  ``1.77.0-1``,  ``1.77.0-0``,  ``1.76.0-0``,  ``1.74.0-1``,  ``1.74.0-0``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-reactome.db

   and update with::

      mamba update bioconductor-reactome.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-reactome.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reactome.db:<tag>

   (see `bioconductor-reactome.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reactome.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactome.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reactome.db
   :alt:   (downloads)
.. |docker_bioconductor-reactome.db| image:: https://quay.io/repository/biocontainers/bioconductor-reactome.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactome.db
.. _`bioconductor-reactome.db/tags`: https://quay.io/repository/biocontainers/bioconductor-reactome.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reactome.db";
        var versions = ["1.86.2","1.84.0","1.82.0","1.77.0","1.77.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactome.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactome.db/README.html