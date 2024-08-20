:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mspbwt'
.. highlight: bash

r-mspbwt
========

.. conda:recipe:: r-mspbwt
   :replaces_section_title:
   :noindex:

   Multi Symbol Positional Burrows Wheeler Transform

   :homepage: https://github.com/rwdavies/mspbwt
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-mspbwt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mspbwt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mspbwt/meta.yaml>`_

   


.. conda:package:: r-mspbwt

   |downloads_r-mspbwt| |docker_r-mspbwt|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>=1.11.8``
   :depends r-rcpp: ``<=1.0.12``
   :depends r-rrbgen: ``>=0.0.6``
   :depends r-rrbgen: ``>=0.0.6,<0.1.0a0``
   :depends r-stitch: ``>=1.7.0``
   :depends r-stitch: ``>=1.7.0,<2.0a0``
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

      mamba install r-mspbwt

   and update with::

      mamba update r-mspbwt

  To create a new environment, run::

      mamba create --name myenvname r-mspbwt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-mspbwt:<tag>

   (see `r-mspbwt/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mspbwt| image:: https://img.shields.io/conda/dn/bioconda/r-mspbwt.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mspbwt
   :alt:   (downloads)
.. |docker_r-mspbwt| image:: https://quay.io/repository/biocontainers/r-mspbwt/status
   :target: https://quay.io/repository/biocontainers/r-mspbwt
.. _`r-mspbwt/tags`: https://quay.io/repository/biocontainers/r-mspbwt?tab=tags


.. raw:: html

    <script>
        var package = "r-mspbwt";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mspbwt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mspbwt/README.html