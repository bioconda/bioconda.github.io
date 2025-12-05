:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cayman'
.. highlight: bash

cayman
======

.. conda:recipe:: cayman
   :replaces_section_title:
   :noindex:

   A command\-line profiling tool for profiling CAZyme abundances in metagenomic datasets.

   :homepage: https://github.com/zellerlab/cayman
   :license: MIT / MIT
   :recipe: /`cayman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cayman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cayman/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.01.08.574624`

   


.. conda:package:: cayman

   |downloads_cayman| |docker_cayman|

   :versions:
      
      

      ``0.10.2-0``,  ``0.10.1-0``

      

   
   :depends bwa: 
   :depends gqlib: ``>=2.14.3``
   :depends pyhmmer: ``>=0.7.0``
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

      mamba install cayman

   and update with::

      mamba update cayman

  To create a new environment, run::

      mamba create --name myenvname cayman

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cayman:<tag>

   (see `cayman/tags`_ for valid values for ``<tag>``)


.. |downloads_cayman| image:: https://img.shields.io/conda/dn/bioconda/cayman.svg?style=flat
   :target: https://anaconda.org/bioconda/cayman
   :alt:   (downloads)
.. |docker_cayman| image:: https://quay.io/repository/biocontainers/cayman/status
   :target: https://quay.io/repository/biocontainers/cayman
.. _`cayman/tags`: https://quay.io/repository/biocontainers/cayman?tab=tags


.. raw:: html

    <script>
        var package = "cayman";
        var versions = ["0.10.2","0.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cayman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cayman/README.html