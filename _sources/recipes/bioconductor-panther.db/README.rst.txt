:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-panther.db'
.. highlight: bash

bioconductor-panther.db
=======================

.. conda:recipe:: bioconductor-panther.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps describing the entire PANTHER Gene Ontology

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/PANTHER.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-panther.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panther.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-panther.db/meta.yaml>`_

   A set of annotation maps describing the entire Gene Ontology assembled using data from PANTHER.


.. conda:package:: bioconductor-panther.db

   |downloads_bioconductor-panther.db| |docker_bioconductor-panther.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.12-0</code>,  <code>1.0.11-4</code>,  <code>1.0.11-3</code>,  <code>1.0.11-2</code>,  <code>1.0.11-1</code>,  <code>1.0.11-0</code>,  <code>1.0.10-2</code>,  <code>1.0.10-1</code>,  <code>1.0.10-0</code>,  </span></summary>
      

      ``1.0.12-0``,  ``1.0.11-4``,  ``1.0.11-3``,  ``1.0.11-2``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.10-2``,  ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.5-0``,  ``1.0.4-5``,  ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rsqlite: 
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

      mamba install bioconductor-panther.db

   and update with::

      mamba update bioconductor-panther.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-panther.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-panther.db:<tag>

   (see `bioconductor-panther.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-panther.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-panther.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-panther.db
   :alt:   (downloads)
.. |docker_bioconductor-panther.db| image:: https://quay.io/repository/biocontainers/bioconductor-panther.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-panther.db
.. _`bioconductor-panther.db/tags`: https://quay.io/repository/biocontainers/bioconductor-panther.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-panther.db";
        var versions = ["1.0.12","1.0.11","1.0.11","1.0.11","1.0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-panther.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-panther.db/README.html