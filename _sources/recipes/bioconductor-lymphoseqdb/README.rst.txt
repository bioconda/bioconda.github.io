:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lymphoseqdb'
.. highlight: bash

bioconductor-lymphoseqdb
========================

.. conda:recipe:: bioconductor-lymphoseqdb
   :replaces_section_title:
   :noindex:

   LymphoSeq annotation databases

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/LymphoSeqDB.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lymphoseqdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lymphoseqdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lymphoseqdb/meta.yaml>`_

   This package provides annotation databases that support the package LymphoSeq.


.. conda:package:: bioconductor-lymphoseqdb

   |downloads_bioconductor-lymphoseqdb| |docker_bioconductor-lymphoseqdb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.2-11</code>,  <code>0.99.2-10</code>,  <code>0.99.2-9</code>,  <code>0.99.2-8</code>,  <code>0.99.2-7</code>,  <code>0.99.2-6</code>,  <code>0.99.2-5</code>,  <code>0.99.2-4</code>,  <code>0.99.2-3</code>,  </span></summary>
      

      ``0.99.2-11``,  ``0.99.2-10``,  ``0.99.2-9``,  ``0.99.2-8``,  ``0.99.2-7``,  ``0.99.2-6``,  ``0.99.2-5``,  ``0.99.2-4``,  ``0.99.2-3``,  ``0.99.2-2``,  ``0.99.2-1``,  ``0.99.2-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-lymphoseqdb

   and update with::

      mamba update bioconductor-lymphoseqdb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-lymphoseqdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lymphoseqdb:<tag>

   (see `bioconductor-lymphoseqdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lymphoseqdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lymphoseqdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lymphoseqdb
   :alt:   (downloads)
.. |docker_bioconductor-lymphoseqdb| image:: https://quay.io/repository/biocontainers/bioconductor-lymphoseqdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lymphoseqdb
.. _`bioconductor-lymphoseqdb/tags`: https://quay.io/repository/biocontainers/bioconductor-lymphoseqdb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lymphoseqdb";
        var versions = ["0.99.2","0.99.2","0.99.2","0.99.2","0.99.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lymphoseqdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lymphoseqdb/README.html