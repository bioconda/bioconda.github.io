:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metasbt'
.. highlight: bash

metasbt
=======

.. conda:recipe:: metasbt
   :replaces_section_title:
   :noindex:

   Microbial genomes characterization with Sequence Bloom Trees.

   :homepage: https://github.com/cumbof/MetaSBT
   :license: MIT / MIT
   :recipe: /`metasbt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasbt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasbt/meta.yaml>`_

   A scalable framework for automatically indexing microbial genomes and accurately 
   characterizing metagenome\-assembled genomes with Sequence Bloom Trees



.. conda:package:: metasbt

   |downloads_metasbt| |docker_metasbt|

   :versions:
      
      

      ``0.1.4.post1-0``

      

   
   :depends biopython: ``>=1.85``
   :depends busco: ``>=5.8.3``
   :depends checkm-genome: ``>=1.2.4``
   :depends checkv: ``>=1.0.3``
   :depends fastcluster: ``<1.3.0``
   :depends howdesbt: ``>=2.00.15``
   :depends kitsune: ``>=1.3.5``
   :depends kraken2: ``>=2.1.3``
   :depends ncbitax2lin: ``>=2.4.1``
   :depends ntcard: ``>=1.2.2``
   :depends numpy: ``1.26.4.*``
   :depends packaging: ``>=25.0``
   :depends python: ``>=3.9``
   :depends requests: ``>=2.32.4``
   :depends scipy: ``>=1.13.1``
   :depends tabulate: ``>=0.9.0``
   :depends tqdm: ``>=4.67.1``
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

      mamba install metasbt

   and update with::

      mamba update metasbt

  To create a new environment, run::

      mamba create --name myenvname metasbt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metasbt:<tag>

   (see `metasbt/tags`_ for valid values for ``<tag>``)


.. |downloads_metasbt| image:: https://img.shields.io/conda/dn/bioconda/metasbt.svg?style=flat
   :target: https://anaconda.org/bioconda/metasbt
   :alt:   (downloads)
.. |docker_metasbt| image:: https://quay.io/repository/biocontainers/metasbt/status
   :target: https://quay.io/repository/biocontainers/metasbt
.. _`metasbt/tags`: https://quay.io/repository/biocontainers/metasbt?tab=tags


.. raw:: html

    <script>
        var package = "metasbt";
        var versions = ["0.1.4.post1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metasbt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metasbt/README.html