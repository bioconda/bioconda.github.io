:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sqlalchemy-datatables'
.. highlight: bash

sqlalchemy-datatables
=====================

.. conda:recipe:: sqlalchemy-datatables
   :replaces_section_title:
   :noindex:

   SQLAlchemy integration of jQuery DataTables

   :homepage: https://github.com/pegase745/sqlalchemy-datatables
   :license: MIT License
   :recipe: /`sqlalchemy-datatables <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqlalchemy-datatables>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sqlalchemy-datatables/meta.yaml>`_

   


.. conda:package:: sqlalchemy-datatables

   |downloads_sqlalchemy-datatables| |docker_sqlalchemy-datatables|

   :versions:
      
      

      ``2.0.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.1-0``

      

   
   :depends dateutil: 
   :depends python: ``>3``
   :depends sqlalchemy: 
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

      mamba install sqlalchemy-datatables

   and update with::

      mamba update sqlalchemy-datatables

  To create a new environment, run::

      mamba create --name myenvname sqlalchemy-datatables

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sqlalchemy-datatables:<tag>

   (see `sqlalchemy-datatables/tags`_ for valid values for ``<tag>``)


.. |downloads_sqlalchemy-datatables| image:: https://img.shields.io/conda/dn/bioconda/sqlalchemy-datatables.svg?style=flat
   :target: https://anaconda.org/bioconda/sqlalchemy-datatables
   :alt:   (downloads)
.. |docker_sqlalchemy-datatables| image:: https://quay.io/repository/biocontainers/sqlalchemy-datatables/status
   :target: https://quay.io/repository/biocontainers/sqlalchemy-datatables
.. _`sqlalchemy-datatables/tags`: https://quay.io/repository/biocontainers/sqlalchemy-datatables?tab=tags


.. raw:: html

    <script>
        var package = "sqlalchemy-datatables";
        var versions = ["2.0.1","0.3.0","0.3.0","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sqlalchemy-datatables/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sqlalchemy-datatables/README.html