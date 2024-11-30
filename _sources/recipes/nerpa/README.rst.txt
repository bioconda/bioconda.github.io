:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nerpa'
.. highlight: bash

nerpa
=====

.. conda:recipe:: nerpa
   :replaces_section_title:
   :noindex:

   A tool for discovering biosynthetic gene clusters of nonribosomal peptides

   :homepage: https://cab.spbu.ru/software/nerpa/
   :documentation: https://github.com/ablab/nerpa
   
   :developer docs: https://github.com/ablab/nerpa
   :license: Dual-licensed under GPLv3 or CC BY-NC-SA 4.0
   :recipe: /`nerpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nerpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nerpa/meta.yaml>`_
   :links: biotools: :biotools:`nerpa`

   Nerpa is a tool for linking biosynthetic gene clusters \(BGCs\) to known nonribosomal peptides \(NRPs\). BGCs are predicted in genome sequences \(FASTA or GBK\) with antiSMASH \(Medema et al\, 2011\). Known NRPs are accepted in the SMILES format and processed with rBAN \(Ricart et al\, 2019\).


.. conda:package:: nerpa

   |downloads_nerpa| |docker_nerpa|

   :versions:
      
      

      ``1.0.0-5``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libcxx: ``>=15.0.7``
   :depends networkx: 
   :depends openjdk: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends rdkit: 
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

      mamba install nerpa

   and update with::

      mamba update nerpa

  To create a new environment, run::

      mamba create --name myenvname nerpa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nerpa:<tag>

   (see `nerpa/tags`_ for valid values for ``<tag>``)


.. |downloads_nerpa| image:: https://img.shields.io/conda/dn/bioconda/nerpa.svg?style=flat
   :target: https://anaconda.org/bioconda/nerpa
   :alt:   (downloads)
.. |docker_nerpa| image:: https://quay.io/repository/biocontainers/nerpa/status
   :target: https://quay.io/repository/biocontainers/nerpa
.. _`nerpa/tags`: https://quay.io/repository/biocontainers/nerpa?tab=tags


.. raw:: html

    <script>
        var package = "nerpa";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nerpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nerpa/README.html