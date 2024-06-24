:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamsurgeon'
.. highlight: bash

bamsurgeon
==========

.. conda:recipe:: bamsurgeon
   :replaces_section_title:
   :noindex:

   Tools for adding genomic variants to BAM\/SAM\/CRAM files. Can be used to test variant callers.

   :homepage: https://github.com/adamewing/bamsurgeon
   :license: MIT-license
   :recipe: /`bamsurgeon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamsurgeon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamsurgeon/meta.yaml>`_

   


.. conda:package:: bamsurgeon

   |downloads_bamsurgeon| |docker_bamsurgeon|

   :versions:
      
      

      ``1.4.1-0``

      

   
   :depends bwa: ``>=0.7.12``
   :depends exonerate: ``>=2.2``
   :depends picard: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends samtools: ``>=1.2``
   :depends velvet: ``>=1.2``
   :depends wgsim: ``>=0.2``
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

      mamba install bamsurgeon

   and update with::

      mamba update bamsurgeon

  To create a new environment, run::

      mamba create --name myenvname bamsurgeon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamsurgeon:<tag>

   (see `bamsurgeon/tags`_ for valid values for ``<tag>``)


.. |downloads_bamsurgeon| image:: https://img.shields.io/conda/dn/bioconda/bamsurgeon.svg?style=flat
   :target: https://anaconda.org/bioconda/bamsurgeon
   :alt:   (downloads)
.. |docker_bamsurgeon| image:: https://quay.io/repository/biocontainers/bamsurgeon/status
   :target: https://quay.io/repository/biocontainers/bamsurgeon
.. _`bamsurgeon/tags`: https://quay.io/repository/biocontainers/bamsurgeon?tab=tags


.. raw:: html

    <script>
        var package = "bamsurgeon";
        var versions = ["1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamsurgeon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamsurgeon/README.html