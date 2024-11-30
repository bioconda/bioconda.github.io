:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mlrho'
.. highlight: bash

mlrho
=====

.. conda:recipe:: mlrho
   :replaces_section_title:
   :noindex:

   Takes as input a file with assembled reads from a single diploid individual and returns maximum likelihood estimates of the population mutation rate\, \, the sequencing error \, the zygosity correlation\, and the population recombination rate.

   :homepage: http://guanine.evolbio.mpg.de/mlRho/
   :license: file
   :recipe: /`mlrho <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlrho>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlrho/meta.yaml>`_
   :links: biotools: :biotools:`mlRho`, doi: :doi:`10.1111/j.1365-294X.2009.04482.x`

   


.. conda:package:: mlrho

   |downloads_mlrho| |docker_mlrho|

   :versions:
      
      

      ``2.9-8``,  ``2.9-7``,  ``2.9-6``,  ``2.9-5``,  ``2.9-4``,  ``2.9-3``,  ``2.9-2``,  ``2.9-1``,  ``2.9-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
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

      mamba install mlrho

   and update with::

      mamba update mlrho

  To create a new environment, run::

      mamba create --name myenvname mlrho

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mlrho:<tag>

   (see `mlrho/tags`_ for valid values for ``<tag>``)


.. |downloads_mlrho| image:: https://img.shields.io/conda/dn/bioconda/mlrho.svg?style=flat
   :target: https://anaconda.org/bioconda/mlrho
   :alt:   (downloads)
.. |docker_mlrho| image:: https://quay.io/repository/biocontainers/mlrho/status
   :target: https://quay.io/repository/biocontainers/mlrho
.. _`mlrho/tags`: https://quay.io/repository/biocontainers/mlrho?tab=tags


.. raw:: html

    <script>
        var package = "mlrho";
        var versions = ["2.9","2.9","2.9","2.9","2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlrho/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlrho/README.html