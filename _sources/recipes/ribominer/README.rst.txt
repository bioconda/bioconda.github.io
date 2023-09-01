:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribominer'
.. highlight: bash

ribominer
=========

.. conda:recipe:: ribominer
   :replaces_section_title:
   :noindex:

   A python toolset for mining multi\-dimensional features of the translatome with ribosome profiling data

   :homepage: https://github.com/xryanglab/RiboMiner
   :license: GPL3 / GPLv3.0
   :recipe: /`ribominer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribominer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribominer/meta.yaml>`_

   


.. conda:package:: ribominer

   |downloads_ribominer| |docker_ribominer|

   :versions:
      
      

      ``0.2.3.2-0``,  ``0.2.3.1-0``

      

   
   :depends biopython: ``>=1.70``
   :depends htseq: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.16.4``
   :depends pandas: ``>=0.24.2``
   :depends pysam: ``>=0.15.2``
   :depends pysamstats: 
   :depends python: 
   :depends ribocode: ``>=1.2.10``
   :depends scipy: ``>=1.1.0``
   :depends seaborn: ``>=0.8.1``
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

      mamba install ribominer

   and update with::

      mamba update ribominer

  To create a new environment, run::

      mamba create --name myenvname ribominer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ribominer:<tag>

   (see `ribominer/tags`_ for valid values for ``<tag>``)


.. |downloads_ribominer| image:: https://img.shields.io/conda/dn/bioconda/ribominer.svg?style=flat
   :target: https://anaconda.org/bioconda/ribominer
   :alt:   (downloads)
.. |docker_ribominer| image:: https://quay.io/repository/biocontainers/ribominer/status
   :target: https://quay.io/repository/biocontainers/ribominer
.. _`ribominer/tags`: https://quay.io/repository/biocontainers/ribominer?tab=tags


.. raw:: html

    <script>
        var package = "ribominer";
        var versions = ["0.2.3.2","0.2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribominer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribominer/README.html