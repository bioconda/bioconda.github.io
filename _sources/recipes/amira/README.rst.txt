:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amira'
.. highlight: bash

amira
=====

.. conda:recipe:: amira
   :replaces_section_title:
   :noindex:

   A tool to detect acquired AMR genes directly from long read sequencing data.

   :homepage: https://github.com/Danderson123/Amira
   :documentation: https://github.com/Danderson123/Amira/blob/main/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`amira <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amira>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amira/meta.yaml>`_

   


.. conda:package:: amira

   |downloads_amira| |docker_amira|

   :versions:
      
      

      ``0.9.2-0``,  ``0.9.1-0``

      

   
   :depends joblib: ``1.2.0``
   :depends kmer-jellyfish: ``2.3.0``
   :depends matplotlib-base: ``3.6.2``
   :depends minimap2: ``2.17``
   :depends numpy: ``1.26.4``
   :depends pandas: ``2.2.2``
   :depends pyfastaq: ``3.17.0``
   :depends pysam: ``0.22.0``
   :depends pytest: ``7.2.0``
   :depends python: ``3.10``
   :depends racon: ``1.4.10``
   :depends samtools: ``1.18``
   :depends scipy: ``1.12.0``
   :depends sourmash: ``4.8.4``
   :depends suffix-tree: ``0.1.2``
   :depends tqdm: ``4.67.1``
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

      mamba install amira

   and update with::

      mamba update amira

  To create a new environment, run::

      mamba create --name myenvname amira

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amira:<tag>

   (see `amira/tags`_ for valid values for ``<tag>``)


.. |downloads_amira| image:: https://img.shields.io/conda/dn/bioconda/amira.svg?style=flat
   :target: https://anaconda.org/bioconda/amira
   :alt:   (downloads)
.. |docker_amira| image:: https://quay.io/repository/biocontainers/amira/status
   :target: https://quay.io/repository/biocontainers/amira
.. _`amira/tags`: https://quay.io/repository/biocontainers/amira?tab=tags


.. raw:: html

    <script>
        var package = "amira";
        var versions = ["0.9.2","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amira/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amira/README.html