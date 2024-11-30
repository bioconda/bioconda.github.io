:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minimizers'
.. highlight: bash

minimizers
==========

.. conda:recipe:: minimizers
   :replaces_section_title:
   :noindex:

   Minimizers extraction from fasta files.

   :homepage: https://github.com/cumbof/minimizers
   :license: MIT / MIT
   :recipe: /`minimizers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimizers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimizers/meta.yaml>`_

   A Python package for extracting minimizers from fasta files



.. conda:package:: minimizers

   |downloads_minimizers| |docker_minimizers|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends bio: 
   :depends biopython: ``>=1.83``
   :depends python: ``>=3.6``
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

      mamba install minimizers

   and update with::

      mamba update minimizers

  To create a new environment, run::

      mamba create --name myenvname minimizers

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minimizers:<tag>

   (see `minimizers/tags`_ for valid values for ``<tag>``)


.. |downloads_minimizers| image:: https://img.shields.io/conda/dn/bioconda/minimizers.svg?style=flat
   :target: https://anaconda.org/bioconda/minimizers
   :alt:   (downloads)
.. |docker_minimizers| image:: https://quay.io/repository/biocontainers/minimizers/status
   :target: https://quay.io/repository/biocontainers/minimizers
.. _`minimizers/tags`: https://quay.io/repository/biocontainers/minimizers?tab=tags


.. raw:: html

    <script>
        var package = "minimizers";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minimizers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minimizers/README.html