:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scrnasim-toolz'
.. highlight: bash

scrnasim-toolz
==============

.. conda:recipe:: scrnasim-toolz
   :replaces_section_title:
   :noindex:

   Tools used by scRNAsim workflow.

   :homepage: https://github.com/zavolanlab/scRNAsim-toolz
   :license: MIT / MIT
   :recipe: /`scrnasim-toolz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrnasim-toolz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrnasim-toolz/meta.yaml>`_

   


.. conda:package:: scrnasim-toolz

   |downloads_scrnasim-toolz| |docker_scrnasim-toolz|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends biopython: ``>=1.78``
   :depends gtfparse: 
   :depends importlib-metadata: 
   :depends numpy: ``>=1.23.3``
   :depends packaging: 
   :depends pandas: ``>=1.4.4``
   :depends polars: ``0.16.17``
   :depends pyarrow: 
   :depends python: ``<=3.10``
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

      mamba install scrnasim-toolz

   and update with::

      mamba update scrnasim-toolz

  To create a new environment, run::

      mamba create --name myenvname scrnasim-toolz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scrnasim-toolz:<tag>

   (see `scrnasim-toolz/tags`_ for valid values for ``<tag>``)


.. |downloads_scrnasim-toolz| image:: https://img.shields.io/conda/dn/bioconda/scrnasim-toolz.svg?style=flat
   :target: https://anaconda.org/bioconda/scrnasim-toolz
   :alt:   (downloads)
.. |docker_scrnasim-toolz| image:: https://quay.io/repository/biocontainers/scrnasim-toolz/status
   :target: https://quay.io/repository/biocontainers/scrnasim-toolz
.. _`scrnasim-toolz/tags`: https://quay.io/repository/biocontainers/scrnasim-toolz?tab=tags


.. raw:: html

    <script>
        var package = "scrnasim-toolz";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scrnasim-toolz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scrnasim-toolz/README.html