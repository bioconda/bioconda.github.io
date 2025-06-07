:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'marbel'
.. highlight: bash

marbel
======

.. conda:recipe:: marbel
   :replaces_section_title:
   :noindex:

   Marbel generates realistic in silico metatranscriptomic dataset based on specified parameters.

   :homepage: https://github.com/jlab/marbel
   :license: Apache-2.0
   :recipe: /`marbel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marbel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marbel/meta.yaml>`_

   


.. conda:package:: marbel

   |downloads_marbel| |docker_marbel|

   :versions:
      
      

      ``0.2.4-0``,  ``0.2.3-0``

      

   
   :depends arviz: 
   :depends biopython: 
   :depends ete4: 
   :depends joblib: 
   :depends pandas: 
   :depends polars: 
   :depends progress: 
   :depends pyarrow: 
   :depends pymc: 
   :depends pysam: 
   :depends python: 
   :depends requests: 
   :depends threadpoolctl: 
   :depends typer: 
   :depends typing-extensions: 
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

      mamba install marbel

   and update with::

      mamba update marbel

  To create a new environment, run::

      mamba create --name myenvname marbel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/marbel:<tag>

   (see `marbel/tags`_ for valid values for ``<tag>``)


.. |downloads_marbel| image:: https://img.shields.io/conda/dn/bioconda/marbel.svg?style=flat
   :target: https://anaconda.org/bioconda/marbel
   :alt:   (downloads)
.. |docker_marbel| image:: https://quay.io/repository/biocontainers/marbel/status
   :target: https://quay.io/repository/biocontainers/marbel
.. _`marbel/tags`: https://quay.io/repository/biocontainers/marbel?tab=tags


.. raw:: html

    <script>
        var package = "marbel";
        var versions = ["0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/marbel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/marbel/README.html