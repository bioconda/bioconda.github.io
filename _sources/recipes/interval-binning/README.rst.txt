:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'interval-binning'
.. highlight: bash

interval-binning
================

.. conda:recipe:: interval-binning
   :replaces_section_title:
   :noindex:

   A Python implementation of the interval binning scheme

   :homepage: https://github.com/martijnvermaat/binning
   :license: MIT
   :recipe: /`interval-binning <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/interval-binning>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/interval-binning/meta.yaml>`_

   


.. conda:package:: interval-binning

   |downloads_interval-binning| |docker_interval-binning|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends python: 
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

      mamba install interval-binning

   and update with::

      mamba update interval-binning

  To create a new environment, run::

      mamba create --name myenvname interval-binning

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/interval-binning:<tag>

   (see `interval-binning/tags`_ for valid values for ``<tag>``)


.. |downloads_interval-binning| image:: https://img.shields.io/conda/dn/bioconda/interval-binning.svg?style=flat
   :target: https://anaconda.org/bioconda/interval-binning
   :alt:   (downloads)
.. |docker_interval-binning| image:: https://quay.io/repository/biocontainers/interval-binning/status
   :target: https://quay.io/repository/biocontainers/interval-binning
.. _`interval-binning/tags`: https://quay.io/repository/biocontainers/interval-binning?tab=tags


.. raw:: html

    <script>
        var package = "interval-binning";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/interval-binning/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/interval-binning/README.html