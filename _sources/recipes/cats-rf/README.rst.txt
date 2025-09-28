:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cats-rf'
.. highlight: bash

cats-rf
=======

.. conda:recipe:: cats-rf
   :replaces_section_title:
   :noindex:

   Reference\-free transcriptome assembly quality assessment tool.

   :homepage: https://github.com/bodulic/CATS-rf
   :documentation: https://github.com/bodulic/CATS-rf/blob/main/README.md
   
   :license: MIT
   :recipe: /`cats-rf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cats-rf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cats-rf/meta.yaml>`_

   CATS\-rf evaluates transcriptome assemblies using RNA\-seq reads without requiring a reference genome.



.. conda:package:: cats-rf

   |downloads_cats-rf| |docker_cats-rf|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bash: 
   :depends bedtools: 
   :depends bowtie2: 
   :depends coreutils: 
   :depends gawk: 
   :depends kallisto: 
   :depends pandoc: 
   :depends parallel: ``>=20220922``
   :depends pysamstats: 
   :depends python: ``>=3.6``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-ggdist: 
   :depends r-ggplot2: 
   :depends r-rmarkdown: 
   :depends samtools: 
   :depends sed: 
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

      mamba install cats-rf

   and update with::

      mamba update cats-rf

  To create a new environment, run::

      mamba create --name myenvname cats-rf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cats-rf:<tag>

   (see `cats-rf/tags`_ for valid values for ``<tag>``)


.. |downloads_cats-rf| image:: https://img.shields.io/conda/dn/bioconda/cats-rf.svg?style=flat
   :target: https://anaconda.org/bioconda/cats-rf
   :alt:   (downloads)
.. |docker_cats-rf| image:: https://quay.io/repository/biocontainers/cats-rf/status
   :target: https://quay.io/repository/biocontainers/cats-rf
.. _`cats-rf/tags`: https://quay.io/repository/biocontainers/cats-rf?tab=tags


.. raw:: html

    <script>
        var package = "cats-rf";
        var versions = ["1.0.4","1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cats-rf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cats-rf/README.html