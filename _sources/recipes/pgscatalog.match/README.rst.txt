:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgscatalog.match'
.. highlight: bash

pgscatalog.match
================

.. conda:recipe:: pgscatalog.match
   :replaces_section_title:
   :noindex:

   Tools for matching variants in PGS scoring files and target variant information files.

   :homepage: https://github.com/PGScatalog/pygscatalog
   :documentation: https://pygscatalog.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`pgscatalog.match <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog.match>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog.match/meta.yaml>`_

   


.. conda:package:: pgscatalog.match

   |downloads_pgscatalog.match| |docker_pgscatalog.match|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends pgscatalog.core: ``>=0.2.1,<0.3.0``
   :depends polars: ``0.20.30.*``
   :depends pyarrow: ``>=15.0.0,<16.0.0``
   :depends python: ``>=3.10``
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

      mamba install pgscatalog.match

   and update with::

      mamba update pgscatalog.match

  To create a new environment, run::

      mamba create --name myenvname pgscatalog.match

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pgscatalog.match:<tag>

   (see `pgscatalog.match/tags`_ for valid values for ``<tag>``)


.. |downloads_pgscatalog.match| image:: https://img.shields.io/conda/dn/bioconda/pgscatalog.match.svg?style=flat
   :target: https://anaconda.org/bioconda/pgscatalog.match
   :alt:   (downloads)
.. |docker_pgscatalog.match| image:: https://quay.io/repository/biocontainers/pgscatalog.match/status
   :target: https://quay.io/repository/biocontainers/pgscatalog.match
.. _`pgscatalog.match/tags`: https://quay.io/repository/biocontainers/pgscatalog.match?tab=tags


.. raw:: html

    <script>
        var package = "pgscatalog.match";
        var versions = ["0.2.3","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgscatalog.match/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgscatalog.match/README.html