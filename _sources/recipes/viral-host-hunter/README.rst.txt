:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viral-host-hunter'
.. highlight: bash

viral-host-hunter
=================

.. conda:recipe:: viral-host-hunter
   :replaces_section_title:
   :noindex:

   Decrypting viral dark matter with predictive framework and therapeutic implications.

   :homepage: https://github.com/YuehuaOu/Viral-Host-Hunter
   :license: GPL-3.0-or-later
   :recipe: /`viral-host-hunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viral-host-hunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viral-host-hunter/meta.yaml>`_

   Viral\-Host\-Hunter \(VHH\) is a deep learning framework for predicting virus\-host
   interactions across taxonomic levels\, leveraging protein language models such
   as ProtT5\-XL\-UniRef50 for biological sequence embedding and host inference.



.. conda:package:: viral-host-hunter

   |downloads_viral-host-hunter| |docker_viral-host-hunter|

   :versions:
      
      

      ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.11-0``

      

   
   :depends biopython: 
   :depends h5py: ``>=3.11.0``
   :depends numpy: ``>=1.24``
   :depends openpyxl: ``>=3.1``
   :depends pandas: ``>=2.0``
   :depends python: ``>=3.8``
   :depends pytorch: ``>=2.0``
   :depends scikit-learn: ``>=1.3.2,<1.4.0``
   :depends sentencepiece: ``>=0.1.99``
   :depends tqdm: ``>=4.60``
   :depends transformers: ``>=4.37,<4.52``
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

      mamba install viral-host-hunter

   and update with::

      mamba update viral-host-hunter

  To create a new environment, run::

      mamba create --name myenvname viral-host-hunter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/viral-host-hunter:<tag>

   (see `viral-host-hunter/tags`_ for valid values for ``<tag>``)


.. |downloads_viral-host-hunter| image:: https://img.shields.io/conda/dn/bioconda/viral-host-hunter.svg?style=flat
   :target: https://anaconda.org/bioconda/viral-host-hunter
   :alt:   (downloads)
.. |docker_viral-host-hunter| image:: https://quay.io/repository/biocontainers/viral-host-hunter/status
   :target: https://quay.io/repository/biocontainers/viral-host-hunter
.. _`viral-host-hunter/tags`: https://quay.io/repository/biocontainers/viral-host-hunter?tab=tags


.. raw:: html

    <script>
        var package = "viral-host-hunter";
        var versions = ["0.2.0","0.2.0","0.1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viral-host-hunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viral-host-hunter/README.html