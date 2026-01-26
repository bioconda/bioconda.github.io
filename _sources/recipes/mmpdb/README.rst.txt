:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmpdb'
.. highlight: bash

mmpdb
=====

.. conda:recipe:: mmpdb
   :replaces_section_title:
   :noindex:

   A package to identify matched molecular pairs and use them to predict property changes

   :homepage: https://github.com/rdkit/mmpdb
   :documentation: https://github.com/rdkit/mmpdb/blob/master/README.md
   
   :license: BSD-4-Clause
   :recipe: /`mmpdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmpdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmpdb/meta.yaml>`_
   :links: doi: :doi:`10.1021/acs.jcim.8b00173`

   


.. conda:package:: mmpdb

   |downloads_mmpdb| |docker_mmpdb|

   :versions:
      
      

      ``3.1.4-0``,  ``3.1.3-0``

      

   
   :depends click: 
   :depends peewee: ``>=3.0``
   :depends psutil: 
   :depends psycopg2: 
   :depends python: ``>=3.10``
   :depends rdkit: ``>=2024.03``
   :depends scipy: 
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

      mamba install mmpdb

   and update with::

      mamba update mmpdb

  To create a new environment, run::

      mamba create --name myenvname mmpdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mmpdb:<tag>

   (see `mmpdb/tags`_ for valid values for ``<tag>``)


.. |downloads_mmpdb| image:: https://img.shields.io/conda/dn/bioconda/mmpdb.svg?style=flat
   :target: https://anaconda.org/bioconda/mmpdb
   :alt:   (downloads)
.. |docker_mmpdb| image:: https://quay.io/repository/biocontainers/mmpdb/status
   :target: https://quay.io/repository/biocontainers/mmpdb
.. _`mmpdb/tags`: https://quay.io/repository/biocontainers/mmpdb?tab=tags


.. raw:: html

    <script>
        var package = "mmpdb";
        var versions = ["3.1.4","3.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmpdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmpdb/README.html