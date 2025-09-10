:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cdst'
.. highlight: bash

cdst
====

.. conda:recipe:: cdst
   :replaces_section_title:
   :noindex:

   CoDing Sequence Typer \(CDST\)\: MD5 hash\-based genome typing and clustering.

   :homepage: https://github.com/l1-mh/CDST
   :license: GPL3 / GPL-3.0-only
   :recipe: /`cdst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdst/meta.yaml>`_

   


.. conda:package:: cdst

   |downloads_cdst| |docker_cdst|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends biopython: ``>=1.85``
   :depends networkx: ``>=3.3``
   :depends pandas: ``>=2.2``
   :depends python: ``>=3.9``
   :depends scipy: ``>=1.13``
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

      mamba install cdst

   and update with::

      mamba update cdst

  To create a new environment, run::

      mamba create --name myenvname cdst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cdst:<tag>

   (see `cdst/tags`_ for valid values for ``<tag>``)


.. |downloads_cdst| image:: https://img.shields.io/conda/dn/bioconda/cdst.svg?style=flat
   :target: https://anaconda.org/bioconda/cdst
   :alt:   (downloads)
.. |docker_cdst| image:: https://quay.io/repository/biocontainers/cdst/status
   :target: https://quay.io/repository/biocontainers/cdst
.. _`cdst/tags`: https://quay.io/repository/biocontainers/cdst?tab=tags


.. raw:: html

    <script>
        var package = "cdst";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cdst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cdst/README.html