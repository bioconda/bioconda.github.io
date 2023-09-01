:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-vdb-py'
.. highlight: bash

ncbi-vdb-py
===========

.. conda:recipe:: ncbi-vdb-py
   :replaces_section_title:
   :noindex:

   SRA tools database engine \(Python bindings\)

   :homepage: https://github.com/ncbi/ncbi-vdb
   :license: Public Domain
   :recipe: /`ncbi-vdb-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-vdb-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-vdb-py/meta.yaml>`_

   VDB is the database engine that all SRA tools use. It is a columnar database
   system with a number of unique features. All SRA objects are stored in VDB.
   This package exposes the Python bindings and depends on ncbi\-vdb to be available.



.. conda:package:: ncbi-vdb-py

   |downloads_ncbi-vdb-py| |docker_ncbi-vdb-py|

   :versions:
      
      

      ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.2-0``,  ``3.0.0-0``,  ``2.11.0-0``,  ``2.10.9-0``,  ``2.10.8-0``

      

   
   :depends ncbi-vdb: ``3.0.7.*``
   :depends python: ``>=3.5``
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

      mamba install ncbi-vdb-py

   and update with::

      mamba update ncbi-vdb-py

  To create a new environment, run::

      mamba create --name myenvname ncbi-vdb-py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ncbi-vdb-py:<tag>

   (see `ncbi-vdb-py/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-vdb-py| image:: https://img.shields.io/conda/dn/bioconda/ncbi-vdb-py.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-vdb-py
   :alt:   (downloads)
.. |docker_ncbi-vdb-py| image:: https://quay.io/repository/biocontainers/ncbi-vdb-py/status
   :target: https://quay.io/repository/biocontainers/ncbi-vdb-py
.. _`ncbi-vdb-py/tags`: https://quay.io/repository/biocontainers/ncbi-vdb-py?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-vdb-py";
        var versions = ["3.0.7","3.0.6","3.0.5","3.0.2","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-vdb-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-vdb-py/README.html