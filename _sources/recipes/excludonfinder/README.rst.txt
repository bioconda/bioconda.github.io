:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'excludonfinder'
.. highlight: bash

excludonfinder
==============

.. conda:recipe:: excludonfinder
   :replaces_section_title:
   :noindex:

   A tool for identifying and analyzing excludons in genomic data using RNA\-seq data.

   :homepage: https://github.com/Alvarosmb/ExcludonFinder
   :license: MIT / MIT
   :recipe: /`excludonfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/excludonfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/excludonfinder/meta.yaml>`_

   


.. conda:package:: excludonfinder

   |downloads_excludonfinder| |docker_excludonfinder|

   :versions:
      
      

      ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends bioconductor-rtracklayer: ``>=1.54.0``
   :depends bwa-mem2: ``>=2.2.1``
   :depends minimap2: ``>=2.24``
   :depends parallel: ``>=20211022``
   :depends r-base: ``>=4.1``
   :depends r-biocmanager: ``>=1.30.19``
   :depends r-data.table: ``>=1.14``
   :depends r-doparallel: ``>=1.0.17``
   :depends r-dplyr: ``>=1.0.7``
   :depends r-foreach: ``>=1.5.2``
   :depends samtools: ``>=1.15``
   :depends subread: ``>=2.0.1``
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

      mamba install excludonfinder

   and update with::

      mamba update excludonfinder

  To create a new environment, run::

      mamba create --name myenvname excludonfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/excludonfinder:<tag>

   (see `excludonfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_excludonfinder| image:: https://img.shields.io/conda/dn/bioconda/excludonfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/excludonfinder
   :alt:   (downloads)
.. |docker_excludonfinder| image:: https://quay.io/repository/biocontainers/excludonfinder/status
   :target: https://quay.io/repository/biocontainers/excludonfinder
.. _`excludonfinder/tags`: https://quay.io/repository/biocontainers/excludonfinder?tab=tags


.. raw:: html

    <script>
        var package = "excludonfinder";
        var versions = ["0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/excludonfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/excludonfinder/README.html