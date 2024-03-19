:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgatk'
.. highlight: bash

mgatk
=====

.. conda:recipe:: mgatk
   :replaces_section_title:
   :noindex:

   Mitochondrial genome analysis toolkit.

   :homepage: https://github.com/caleblareau/mgatk
   :documentation: https://github.com/caleblareau/mgatk/wiki
   
   :license: MIT / MIT
   :recipe: /`mgatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgatk/meta.yaml>`_

   


.. conda:package:: mgatk

   |downloads_mgatk| |docker_mgatk|

   :versions:
      
      

      ``0.7.0-1``,  ``0.7.0-0``

      

   
   :depends bioconductor-genomicranges: 
   :depends bioconductor-summarizedexperiment: 
   :depends biopython: 
   :depends click: 
   :depends numpy: 
   :depends openjdk: 
   :depends optparse-pretty: 
   :depends pandas: 
   :depends picard-slim: 
   :depends pulp: ``<2.8``
   :depends pysam: 
   :depends pytest: 
   :depends python: ``>=3``
   :depends r-base: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-matrix: 
   :depends regex: 
   :depends ruamel.yaml: 
   :depends snakemake-minimal: ``<8``
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

      mamba install mgatk

   and update with::

      mamba update mgatk

  To create a new environment, run::

      mamba create --name myenvname mgatk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mgatk:<tag>

   (see `mgatk/tags`_ for valid values for ``<tag>``)


.. |downloads_mgatk| image:: https://img.shields.io/conda/dn/bioconda/mgatk.svg?style=flat
   :target: https://anaconda.org/bioconda/mgatk
   :alt:   (downloads)
.. |docker_mgatk| image:: https://quay.io/repository/biocontainers/mgatk/status
   :target: https://quay.io/repository/biocontainers/mgatk
.. _`mgatk/tags`: https://quay.io/repository/biocontainers/mgatk?tab=tags


.. raw:: html

    <script>
        var package = "mgatk";
        var versions = ["0.7.0","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgatk/README.html