:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgscatalog.core'
.. highlight: bash

pgscatalog.core
===============

.. conda:recipe:: pgscatalog.core
   :replaces_section_title:
   :noindex:

   Core tools for working with polygenic scores \(PGS\) and the PGS Catalog

   :homepage: https://github.com/PGScatalog/pygscatalog/
   :license: Apache-2.0
   :recipe: /`pgscatalog.core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog.core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog.core/meta.yaml>`_

   


.. conda:package:: pgscatalog.core

   |downloads_pgscatalog.core| |docker_pgscatalog.core|

   :versions:
      
      

      ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends httpx: ``>=0.26.0,<0.27.0``
   :depends natsort: ``>=8.4.0,<9.0.0``
   :depends pydantic: ``>=2.9.0,<3.0.0``
   :depends pyliftover: ``>=0.4.1,<0.5.0``
   :depends python: ``>=3.10``
   :depends python-zlib-ng: 
   :depends tenacity: ``>=8.2.3,<9.0.0``
   :depends tqdm: ``>=4.66.1,<5.0.0``
   :depends xopen: ``>=1.8.0,<2.0.0``
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

      mamba install pgscatalog.core

   and update with::

      mamba update pgscatalog.core

  To create a new environment, run::

      mamba create --name myenvname pgscatalog.core

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pgscatalog.core:<tag>

   (see `pgscatalog.core/tags`_ for valid values for ``<tag>``)


.. |downloads_pgscatalog.core| image:: https://img.shields.io/conda/dn/bioconda/pgscatalog.core.svg?style=flat
   :target: https://anaconda.org/bioconda/pgscatalog.core
   :alt:   (downloads)
.. |docker_pgscatalog.core| image:: https://quay.io/repository/biocontainers/pgscatalog.core/status
   :target: https://quay.io/repository/biocontainers/pgscatalog.core
.. _`pgscatalog.core/tags`: https://quay.io/repository/biocontainers/pgscatalog.core?tab=tags


.. raw:: html

    <script>
        var package = "pgscatalog.core";
        var versions = ["0.3.3","0.3.2","0.3.1","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgscatalog.core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgscatalog.core/README.html