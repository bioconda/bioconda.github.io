:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metamlst'
.. highlight: bash

metamlst
========

.. conda:recipe:: metamlst
   :replaces_section_title:
   :noindex:

   A computational pipeline for MLST typing from metagenomic data

   :homepage: https://github.com/SegataLab/metamlst
   :license: MIT
   :recipe: /`metamlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamlst/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw837`

   


.. conda:package:: metamlst

   |downloads_metamlst| |docker_metamlst|

   :versions:
      
      

      ``1.2.3-0``,  ``1.2.2-0``

      

   
   :depends biopython: 
   :depends bowtie2: ``>=2.2.6``
   :depends cmseq: 
   :depends pysam: ``>=0.11.1``
   :depends python: ``>=3.5``
   :depends samtools: ``>=1.9``
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

      mamba install metamlst

   and update with::

      mamba update metamlst

  To create a new environment, run::

      mamba create --name myenvname metamlst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metamlst:<tag>

   (see `metamlst/tags`_ for valid values for ``<tag>``)


.. |downloads_metamlst| image:: https://img.shields.io/conda/dn/bioconda/metamlst.svg?style=flat
   :target: https://anaconda.org/bioconda/metamlst
   :alt:   (downloads)
.. |docker_metamlst| image:: https://quay.io/repository/biocontainers/metamlst/status
   :target: https://quay.io/repository/biocontainers/metamlst
.. _`metamlst/tags`: https://quay.io/repository/biocontainers/metamlst?tab=tags


.. raw:: html

    <script>
        var package = "metamlst";
        var versions = ["1.2.3","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metamlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metamlst/README.html