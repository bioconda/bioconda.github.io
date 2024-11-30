:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'readucks'
.. highlight: bash

readucks
========

.. conda:recipe:: readucks
   :replaces_section_title:
   :noindex:

   Readucks\: a simple demultiplexer for nanopore reads

   :homepage: https://github.com/artic-network/readucks
   :license: GPL-3.0
   :recipe: /`readucks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readucks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readucks/meta.yaml>`_

   


.. conda:package:: readucks

   |downloads_readucks| |docker_readucks|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends biopython: 
   :depends parasail-python: 
   :depends python: ``>=3``
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

      mamba install readucks

   and update with::

      mamba update readucks

  To create a new environment, run::

      mamba create --name myenvname readucks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/readucks:<tag>

   (see `readucks/tags`_ for valid values for ``<tag>``)


.. |downloads_readucks| image:: https://img.shields.io/conda/dn/bioconda/readucks.svg?style=flat
   :target: https://anaconda.org/bioconda/readucks
   :alt:   (downloads)
.. |docker_readucks| image:: https://quay.io/repository/biocontainers/readucks/status
   :target: https://quay.io/repository/biocontainers/readucks
.. _`readucks/tags`: https://quay.io/repository/biocontainers/readucks?tab=tags


.. raw:: html

    <script>
        var package = "readucks";
        var versions = ["0.0.3","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/readucks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/readucks/README.html