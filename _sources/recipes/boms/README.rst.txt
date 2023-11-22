:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'boms'
.. highlight: bash

boms
====

.. conda:recipe:: boms
   :replaces_section_title:
   :noindex:

   Cell Segmentation for Spatial Transcriptomics Data using BOMS

   :homepage: https://github.com/ocimakamboj/boms
   :license: MIT
   :recipe: /`boms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/boms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/boms/meta.yaml>`_

   


.. conda:package:: boms

   |downloads_boms| |docker_boms|

   :versions:
      
      

      ``1.0.5-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: 
   :depends mkl: 
   :depends mkl-service: 
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install boms

   and update with::

      mamba update boms

  To create a new environment, run::

      mamba create --name myenvname boms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/boms:<tag>

   (see `boms/tags`_ for valid values for ``<tag>``)


.. |downloads_boms| image:: https://img.shields.io/conda/dn/bioconda/boms.svg?style=flat
   :target: https://anaconda.org/bioconda/boms
   :alt:   (downloads)
.. |docker_boms| image:: https://quay.io/repository/biocontainers/boms/status
   :target: https://quay.io/repository/biocontainers/boms
.. _`boms/tags`: https://quay.io/repository/biocontainers/boms?tab=tags


.. raw:: html

    <script>
        var package = "boms";
        var versions = ["1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/boms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/boms/README.html