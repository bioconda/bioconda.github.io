:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygresql'
.. highlight: bash

pygresql
========

.. conda:recipe:: pygresql
   :replaces_section_title:
   :noindex:

   Python PostgreSQL Interfaces

   :homepage: http://www.pygresql.org
   :license: Python Software Foundation License
   :recipe: /`pygresql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygresql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygresql/meta.yaml>`_

   


.. conda:package:: pygresql

   |downloads_pygresql| |docker_pygresql|

   :versions:
      
      

      ``5.0.1-1``,  ``5.0.1-0``

      

   
   :depends postgresql: 
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install pygresql

   and update with::

      mamba update pygresql

  To create a new environment, run::

      mamba create --name myenvname pygresql

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pygresql:<tag>

   (see `pygresql/tags`_ for valid values for ``<tag>``)


.. |downloads_pygresql| image:: https://img.shields.io/conda/dn/bioconda/pygresql.svg?style=flat
   :target: https://anaconda.org/bioconda/pygresql
   :alt:   (downloads)
.. |docker_pygresql| image:: https://quay.io/repository/biocontainers/pygresql/status
   :target: https://quay.io/repository/biocontainers/pygresql
.. _`pygresql/tags`: https://quay.io/repository/biocontainers/pygresql?tab=tags


.. raw:: html

    <script>
        var package = "pygresql";
        var versions = ["5.0.1","5.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygresql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygresql/README.html