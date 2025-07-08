:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'finaletoolkit'
.. highlight: bash

finaletoolkit
=============

.. conda:recipe:: finaletoolkit
   :replaces_section_title:
   :noindex:

   Extract cfDNA fragmentation features from sequencing data.

   :homepage: https://github.com/epifluidlab/FinaleToolkit
   :license: MIT
   :recipe: /`finaletoolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finaletoolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finaletoolkit/meta.yaml>`_

   


.. conda:package:: finaletoolkit

   |downloads_finaletoolkit| |docker_finaletoolkit|

   :versions:
      
      

      ``0.10.7-0``

      

   
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: 
   :depends pandas: 
   :depends py2bit: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: ``>=3.9,<3.13``
   :depends scipy: 
   :depends statsmodels: 
   :depends tqdm: 
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

      mamba install finaletoolkit

   and update with::

      mamba update finaletoolkit

  To create a new environment, run::

      mamba create --name myenvname finaletoolkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/finaletoolkit:<tag>

   (see `finaletoolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_finaletoolkit| image:: https://img.shields.io/conda/dn/bioconda/finaletoolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/finaletoolkit
   :alt:   (downloads)
.. |docker_finaletoolkit| image:: https://quay.io/repository/biocontainers/finaletoolkit/status
   :target: https://quay.io/repository/biocontainers/finaletoolkit
.. _`finaletoolkit/tags`: https://quay.io/repository/biocontainers/finaletoolkit?tab=tags


.. raw:: html

    <script>
        var package = "finaletoolkit";
        var versions = ["0.10.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/finaletoolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/finaletoolkit/README.html