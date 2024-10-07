:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vclean'
.. highlight: bash

vclean
======

.. conda:recipe:: vclean
   :replaces_section_title:
   :noindex:

   vClean\: Assessing the contamination of viral genomes

   :homepage: https://github.com/TsumaR/vclean
   :license: GPL3 / GPL-3.0-only
   :recipe: /`vclean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vclean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vclean/meta.yaml>`_

   


.. conda:package:: vclean

   |downloads_vclean| |docker_vclean|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.0.2-0``

      

   
   :depends biopython: 
   :depends checkv: 
   :depends kmer-jellyfish: 
   :depends lightgbm: 
   :depends matplotlib-base: 
   :depends mmseqs2: 
   :depends numpy: 
   :depends pandas: 
   :depends prodigal: 
   :depends python: ``3.9.0``
   :depends scikit-learn: 
   :depends seaborn-base: 
   :depends seqkit: 
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

      mamba install vclean

   and update with::

      mamba update vclean

  To create a new environment, run::

      mamba create --name myenvname vclean

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vclean:<tag>

   (see `vclean/tags`_ for valid values for ``<tag>``)


.. |downloads_vclean| image:: https://img.shields.io/conda/dn/bioconda/vclean.svg?style=flat
   :target: https://anaconda.org/bioconda/vclean
   :alt:   (downloads)
.. |docker_vclean| image:: https://quay.io/repository/biocontainers/vclean/status
   :target: https://quay.io/repository/biocontainers/vclean
.. _`vclean/tags`: https://quay.io/repository/biocontainers/vclean?tab=tags


.. raw:: html

    <script>
        var package = "vclean";
        var versions = ["0.2.0","0.1.9","0.1.5","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vclean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vclean/README.html