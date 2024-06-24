:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autometa'
.. highlight: bash

autometa
========

.. conda:recipe:: autometa
   :replaces_section_title:
   :noindex:

   Automated extraction of genomes from shotgun metagenomes

   :homepage: https://github.com/KwanLab/Autometa
   :documentation: https://autometa.readthedocs.io/en/latest/
   
   :license: AGPL / AGPL-3.0
   :recipe: /`autometa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autometa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autometa/meta.yaml>`_

   An automated binning pipeline for metagenomes\, in particular host\-associated and highly complex ones.
   Miller\, I. J.\; Rees\, E. R.\; Ross\, J.\; Miller\, I.\; Baxa\, J.\; Lopera\, J.\; Kerby\, R. L.\; Rey\, F. E.\; Kwan\, J. C. 
   Autometa\: Automated extraction of microbial genomes from individual shotgun metagenomes. 
   Nucleic Acids Research\, 2019. DOI\: https\:\/\/doi.org\/10.1093\/nar\/gkz148



.. conda:package:: autometa

   |downloads_autometa| |docker_autometa|

   :versions:
      
      

      ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``

      

   
   :depends attrs: 
   :depends bedtools: 
   :depends biopython: ``>=1.82``
   :depends bowtie2: 
   :depends diamond: ``>=2.0``
   :depends gdown: 
   :depends hmmer: 
   :depends numba: ``>=0.47``
   :depends numpy: ``>=1.13``
   :depends pandas: ``>=1.5``
   :depends parallel: 
   :depends prodigal: ``>=2.5``
   :depends python: ``>=3.7``
   :depends requests: 
   :depends rsync: 
   :depends samtools: ``>=1.11``
   :depends scikit-bio: 
   :depends scikit-learn: ``>=1.3``
   :depends scipy: 
   :depends seqkit: 
   :depends tqdm: 
   :depends trimap: 
   :depends tsne: 
   :depends umap-learn: ``>=0.5``
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

      mamba install autometa

   and update with::

      mamba update autometa

  To create a new environment, run::

      mamba create --name myenvname autometa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/autometa:<tag>

   (see `autometa/tags`_ for valid values for ``<tag>``)


.. |downloads_autometa| image:: https://img.shields.io/conda/dn/bioconda/autometa.svg?style=flat
   :target: https://anaconda.org/bioconda/autometa
   :alt:   (downloads)
.. |docker_autometa| image:: https://quay.io/repository/biocontainers/autometa/status
   :target: https://quay.io/repository/biocontainers/autometa
.. _`autometa/tags`: https://quay.io/repository/biocontainers/autometa?tab=tags


.. raw:: html

    <script>
        var package = "autometa";
        var versions = ["2.2.3","2.2.2","2.2.1","2.2.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autometa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autometa/README.html