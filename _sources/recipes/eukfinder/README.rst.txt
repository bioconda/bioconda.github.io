:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eukfinder'
.. highlight: bash

eukfinder
=========

.. conda:recipe:: eukfinder
   :replaces_section_title:
   :noindex:

   Eukfinder is a tool for detecting eukaryotic sequences in metagenomic data.

   :homepage: https://github.com/RogerLab/Eukfinder
   :license: MIT
   :recipe: /`eukfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukfinder/meta.yaml>`_

   


.. conda:package:: eukfinder

   |downloads_eukfinder| |docker_eukfinder|

   :versions:
      
      

      ``1.2.3-0``

      

   
   :depends bowtie2: 
   :depends centrifuge: 
   :depends ete3: 
   :depends joblib: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends numpy: 
   :depends pandas: 
   :depends pyqt: ``5.*``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends seqkit: 
   :depends spades: 
   :depends trimmomatic: 
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

      mamba install eukfinder

   and update with::

      mamba update eukfinder

  To create a new environment, run::

      mamba create --name myenvname eukfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eukfinder:<tag>

   (see `eukfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_eukfinder| image:: https://img.shields.io/conda/dn/bioconda/eukfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/eukfinder
   :alt:   (downloads)
.. |docker_eukfinder| image:: https://quay.io/repository/biocontainers/eukfinder/status
   :target: https://quay.io/repository/biocontainers/eukfinder
.. _`eukfinder/tags`: https://quay.io/repository/biocontainers/eukfinder?tab=tags


.. raw:: html

    <script>
        var package = "eukfinder";
        var versions = ["1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eukfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eukfinder/README.html