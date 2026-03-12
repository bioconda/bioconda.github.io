:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'siren-rnai'
.. highlight: bash

siren-rnai
==========

.. conda:recipe:: siren-rnai
   :replaces_section_title:
   :noindex:

   SIREN\: Suite for Intelligent RNAi design and Evaluation of Nucleotide sequences

   :homepage: https://github.com/pablovargasmejia/SIREN
   :license: GPL-3.0-only
   :recipe: /`siren-rnai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/siren-rnai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/siren-rnai/meta.yaml>`_

   


.. conda:package:: siren-rnai

   |downloads_siren-rnai| |docker_siren-rnai|

   :versions:
      
      

      ``0.1.9-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends primer3-py: 
   :depends python: ``>=3.9``
   :depends rnahybrid: 
   :depends scipy: 
   :depends seaborn: 
   :depends tqdm: 
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

      mamba install siren-rnai

   and update with::

      mamba update siren-rnai

  To create a new environment, run::

      mamba create --name myenvname siren-rnai

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/siren-rnai:<tag>

   (see `siren-rnai/tags`_ for valid values for ``<tag>``)


.. |downloads_siren-rnai| image:: https://img.shields.io/conda/dn/bioconda/siren-rnai.svg?style=flat
   :target: https://anaconda.org/bioconda/siren-rnai
   :alt:   (downloads)
.. |docker_siren-rnai| image:: https://quay.io/repository/biocontainers/siren-rnai/status
   :target: https://quay.io/repository/biocontainers/siren-rnai
.. _`siren-rnai/tags`: https://quay.io/repository/biocontainers/siren-rnai?tab=tags


.. raw:: html

    <script>
        var package = "siren-rnai";
        var versions = ["0.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/siren-rnai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/siren-rnai/README.html