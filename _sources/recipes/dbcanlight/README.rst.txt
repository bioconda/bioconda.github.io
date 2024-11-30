:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dbcanlight'
.. highlight: bash

dbcanlight
==========

.. conda:recipe:: dbcanlight
   :replaces_section_title:
   :noindex:

   A lightweight CAZyme annotation tool

   :homepage: https://github.com/chtsai0105/dbcanlight
   :documentation: https://github.com/chtsai0105/dbcanlight/blob/v1.1.0/README.md
   
   :license: MIT / MIT
   :recipe: /`dbcanlight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbcanlight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbcanlight/meta.yaml>`_

   Dbcanlight is a lightweight rewrite of a widely used CAZyme annotation tool run\_dbcan. It uses pyhmmer\, a Cython bindings to
   HMMER3\, to instead the cli version of HMMER3 suite as the backend for the search processes\, which improves the multithreading
   performance. In addition\, it also solves the inconvenience process in the run dbcan that the large sequence file required
   manual splitting beforehand.

   The main program dbcanlight comprises 3 modules \- build\, search and conclude. The build module help to download the required
   databases from dbcan website\; the search module searches against protein HMM\, substrate HMM or diamond databases and reports
   the hits separately\; and the conclude module gathers all the results made by each module and provides a brief overview. The
   output of dbcanlight is resemble to run\_dbcan with slight cleanup. Run\_dbcan output the same substrate several times for a
   gene that hits multiple profiles with the same substrate\; in dbcanlight we only report it once.

   Dbcanlight only re\-implemented the core features of run\_dbcan\, that is searching for CAZyme and substrate matches by
   hmmer\/diamond\/dbcansub. Submodules like signalP\, CGCFinder\, etc. are not implemented.



.. conda:package:: dbcanlight

   |downloads_dbcanlight| |docker_dbcanlight|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends biopython: ``>=1.81``
   :depends importlib-metadata: 
   :depends pyhmmer: ``>=0.10.4``
   :depends python: ``>=3.7``
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

      mamba install dbcanlight

   and update with::

      mamba update dbcanlight

  To create a new environment, run::

      mamba create --name myenvname dbcanlight

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dbcanlight:<tag>

   (see `dbcanlight/tags`_ for valid values for ``<tag>``)


.. |downloads_dbcanlight| image:: https://img.shields.io/conda/dn/bioconda/dbcanlight.svg?style=flat
   :target: https://anaconda.org/bioconda/dbcanlight
   :alt:   (downloads)
.. |docker_dbcanlight| image:: https://quay.io/repository/biocontainers/dbcanlight/status
   :target: https://quay.io/repository/biocontainers/dbcanlight
.. _`dbcanlight/tags`: https://quay.io/repository/biocontainers/dbcanlight?tab=tags


.. raw:: html

    <script>
        var package = "dbcanlight";
        var versions = ["1.1.0","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dbcanlight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dbcanlight/README.html