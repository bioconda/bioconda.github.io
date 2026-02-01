:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigmap'
.. highlight: bash

bigmap
======

.. conda:recipe:: bigmap
   :replaces_section_title:
   :noindex:

   The Biosynthetic Gene cluster Meta\'omics Abundance Profiler

   :homepage: https://github.com/medema-group/BiG-MAP
   :license: MIT / MIT
   :recipe: /`bigmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigmap/meta.yaml>`_
   :links: doi: :doi:`10.1128/mSystems.00937-21`

   


.. conda:package:: bigmap

   |downloads_bigmap| |docker_bigmap|

   :versions:
      
      

      ``1.1.1-0``

      

   
   :depends bedtools: ``>=2.31.1``
   :depends bioconductor-biomformat: ``>=1.30.0``
   :depends bioconductor-metagenomeseq: ``>=1.43.0``
   :depends biom-format: ``>=2.1.16``
   :depends biopython: ``>=1.81``
   :depends bowtie2: ``>=2.5.4``
   :depends cxx-compiler: ``>=1.9.0``
   :depends hmmer: ``>=3.4``
   :depends importlib_resources: ``>=6.5.2``
   :depends mash: ``>=2.3``
   :depends numpy: ``<2``
   :depends pandas: ``>=2.3.3``
   :depends python: ``>=3.11.11``
   :depends rpy2: ``>=3.5.11``
   :depends samtools: ``>=1.21``
   :depends scipy: ``>=1.17.0``
   :depends seaborn: ``>=0.13.2``
   :depends sra-tools: ``>=3.2.0``
   :depends statsmodels: ``>=0.14.6``
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

      mamba install bigmap

   and update with::

      mamba update bigmap

  To create a new environment, run::

      mamba create --name myenvname bigmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bigmap:<tag>

   (see `bigmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bigmap| image:: https://img.shields.io/conda/dn/bioconda/bigmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bigmap
   :alt:   (downloads)
.. |docker_bigmap| image:: https://quay.io/repository/biocontainers/bigmap/status
   :target: https://quay.io/repository/biocontainers/bigmap
.. _`bigmap/tags`: https://quay.io/repository/biocontainers/bigmap?tab=tags


.. raw:: html

    <script>
        var package = "bigmap";
        var versions = ["1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigmap/README.html