:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scxmatch'
.. highlight: bash

scxmatch
========

.. conda:recipe:: scxmatch
   :replaces_section_title:
   :noindex:

   Python implementation for single\-cell cross match test\, an efficient implementation of Rosenbaum\'s test.

   :homepage: https://github.com/bionetslab/scxmatch
   :license: MIT
   :recipe: /`scxmatch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scxmatch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scxmatch/meta.yaml>`_

   


.. conda:package:: scxmatch

   |downloads_scxmatch| |docker_scxmatch|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends anndata: ``>=0.10.9``
   :depends graph-tool: ``>=2.92,<3``
   :depends python: ``>=3.9``
   :depends scanpy: ``>=1.10.3,<2``
   :depends scipy: ``>=1.13.1,<2``
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

      mamba install scxmatch

   and update with::

      mamba update scxmatch

  To create a new environment, run::

      mamba create --name myenvname scxmatch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scxmatch:<tag>

   (see `scxmatch/tags`_ for valid values for ``<tag>``)


.. |downloads_scxmatch| image:: https://img.shields.io/conda/dn/bioconda/scxmatch.svg?style=flat
   :target: https://anaconda.org/bioconda/scxmatch
   :alt:   (downloads)
.. |docker_scxmatch| image:: https://quay.io/repository/biocontainers/scxmatch/status
   :target: https://quay.io/repository/biocontainers/scxmatch
.. _`scxmatch/tags`: https://quay.io/repository/biocontainers/scxmatch?tab=tags


.. raw:: html

    <script>
        var package = "scxmatch";
        var versions = ["0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scxmatch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scxmatch/README.html