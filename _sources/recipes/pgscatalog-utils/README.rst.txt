:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgscatalog-utils'
.. highlight: bash

pgscatalog-utils
================

.. conda:recipe:: pgscatalog-utils
   :replaces_section_title:
   :noindex:

   Utilities for working with PGS Catalog API and scoring files

   :homepage: https://github.com/PGScatalog/pygscatalog
   :documentation: https://pygscatalog.readthedocs.io/en/latest/
   
   :license: Apache / Apache-2.0
   :recipe: /`pgscatalog-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog-utils/meta.yaml>`_

   


.. conda:package:: pgscatalog-utils

   |downloads_pgscatalog-utils| |docker_pgscatalog-utils|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``

      

   
   :depends pgscatalog.calc: ``>=0.2.1,<0.3.0``
   :depends pgscatalog.core: ``>=0.2.1,<0.3.0``
   :depends pgscatalog.match: ``>=0.2.1,<0.3.0``
   :depends python: ``>=3.10.0,<4.0.0``
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

      mamba install pgscatalog-utils

   and update with::

      mamba update pgscatalog-utils

  To create a new environment, run::

      mamba create --name myenvname pgscatalog-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pgscatalog-utils:<tag>

   (see `pgscatalog-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_pgscatalog-utils| image:: https://img.shields.io/conda/dn/bioconda/pgscatalog-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/pgscatalog-utils
   :alt:   (downloads)
.. |docker_pgscatalog-utils| image:: https://quay.io/repository/biocontainers/pgscatalog-utils/status
   :target: https://quay.io/repository/biocontainers/pgscatalog-utils
.. _`pgscatalog-utils/tags`: https://quay.io/repository/biocontainers/pgscatalog-utils?tab=tags


.. raw:: html

    <script>
        var package = "pgscatalog-utils";
        var versions = ["1.3.1","1.3.0","1.2.0","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgscatalog-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgscatalog-utils/README.html