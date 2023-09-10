:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gndiff'
.. highlight: bash

gndiff
======

.. conda:recipe:: gndiff
   :replaces_section_title:
   :noindex:

   GNdiff compares scientific names from two files

   :homepage: https://github.com/gnames/gndiff
   :license: MIT
   :recipe: /`gndiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gndiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gndiff/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.5281/zenodo.5111561`

   


.. conda:package:: gndiff

   |downloads_gndiff| |docker_gndiff|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``

      

   
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

      mamba install gndiff

   and update with::

      mamba update gndiff

  To create a new environment, run::

      mamba create --name myenvname gndiff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gndiff:<tag>

   (see `gndiff/tags`_ for valid values for ``<tag>``)


.. |downloads_gndiff| image:: https://img.shields.io/conda/dn/bioconda/gndiff.svg?style=flat
   :target: https://anaconda.org/bioconda/gndiff
   :alt:   (downloads)
.. |docker_gndiff| image:: https://quay.io/repository/biocontainers/gndiff/status
   :target: https://quay.io/repository/biocontainers/gndiff
.. _`gndiff/tags`: https://quay.io/repository/biocontainers/gndiff?tab=tags


.. raw:: html

    <script>
        var package = "gndiff";
        var versions = ["0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gndiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gndiff/README.html