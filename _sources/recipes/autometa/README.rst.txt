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
      
      

      ``2.0.1-0``,  ``2.0.0-0``

      

   
   :depends attrs: 
   :depends bedtools: 
   :depends biopython: 
   :depends bowtie2: 
   :depends diamond: ``>=2.0``
   :depends gdown: 
   :depends hdbscan: 
   :depends hmmer: 
   :depends numba: ``>=0.47``
   :depends numpy: ``>=1.13``
   :depends pandas: ``>=1.1``
   :depends parallel: 
   :depends prodigal: ``>=2.5``
   :depends python: ``>=3.7``
   :depends requests: 
   :depends rsync: 
   :depends samtools: ``>=1.11``
   :depends scikit-bio: 
   :depends scikit-learn: ``0.24``
   :depends tqdm: 
   :depends trimap: 
   :depends tsne: 
   :depends umap-learn: ``>=0.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install autometa

   and update with::

      conda update autometa

   or use the docker container::

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
        var versions = ["2.0.1","2.0.0"];
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