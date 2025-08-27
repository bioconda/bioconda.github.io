:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'resmico'
.. highlight: bash

resmico
=======

.. conda:recipe:: resmico
   :replaces_section_title:
   :noindex:

   Increasing the quality of metagenome\-assembled genomes with deep learning

   :homepage: https://github.com/leylabmpi/ResMiCo
   :license: MIT / MIT
   :recipe: /`resmico <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/resmico>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/resmico/meta.yaml>`_

   


.. conda:package:: resmico

   |downloads_resmico| |docker_resmico|

   :versions:
      
      

      ``1.2.2-1``,  ``1.2.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.12-0``

      

   
   :depends cmake: ``>=3.13``
   :depends ipython: 
   :depends keras: ``>=2.8.0``
   :depends libcxx: ``>=15.0.7``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: ``>=1.17.0``
   :depends numpy: ``>=1.24.3,<2.0a0``
   :depends pandas: ``>=1.4.2``
   :depends pathos: ``>=0.2.9``
   :depends protobuf: ``>=3.20``
   :depends pysam: ``>=0.19.1``
   :depends pytables: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scikit-learn: ``>=1.1.1``
   :depends tensorboard: ``<2.9.0``
   :depends tensorflow: ``>=2.8.1``
   :depends toolz: ``>=0.11.2``
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

      mamba install resmico

   and update with::

      mamba update resmico

  To create a new environment, run::

      mamba create --name myenvname resmico

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/resmico:<tag>

   (see `resmico/tags`_ for valid values for ``<tag>``)


.. |downloads_resmico| image:: https://img.shields.io/conda/dn/bioconda/resmico.svg?style=flat
   :target: https://anaconda.org/bioconda/resmico
   :alt:   (downloads)
.. |docker_resmico| image:: https://quay.io/repository/biocontainers/resmico/status
   :target: https://quay.io/repository/biocontainers/resmico
.. _`resmico/tags`: https://quay.io/repository/biocontainers/resmico?tab=tags


.. raw:: html

    <script>
        var package = "resmico";
        var versions = ["1.2.2","1.2.2","1.1.1","1.1.0","1.0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/resmico/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/resmico/README.html