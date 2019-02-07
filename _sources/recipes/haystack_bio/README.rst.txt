.. title:: Package Recipe 'haystack_bio'
.. highlight: bash


haystack_bio
============

.. conda:recipe:: haystack_bio
   :replaces_section_title:

   Epigenetic Variability and Transcription Factor Motifs Analysis Pipeline

   :homepage: https://github.com/pinellolab/haystack_bio
   :license: GPLv3
   :recipe: /`haystack_bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haystack_bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haystack_bio/meta.yaml>`_

   


.. conda:package:: haystack_bio

   |downloads_haystack_bio| |docker_haystack_bio|

   :versions: 0.5.5, 0.5.4, 0.5.3, 0.5.2, v0.5.0

   :depends: :conda:package:`bedtools`  :conda:package:`bx-python`  :conda:package:`jinja2`  :conda:package:`matplotlib`  :conda:package:`meme` 4.11.2.* :conda:package:`numpy` 1.15.* :conda:package:`openjdk`  :conda:package:`pandas`  :conda:package:`sambamba`  :conda:package:`scipy`  :conda:package:`tqdm`  :conda:package:`ucsc-bedgraphtobigwig`  :conda:package:`ucsc-bigwigaverageoverbed`  :conda:package:`weblogo`  

   :required~by: |required_by_haystack_bio|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haystack_bio

   and update with::

      conda update haystack_bio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/haystack_bio


.. |required_by_haystack_bio| conda:required_by:: haystack_bio
.. |downloads_haystack_bio| image:: https://img.shields.io/conda/dn/bioconda/haystack_bio.svg?style=flat
   :alt:   (downloads)
.. |docker_haystack_bio| image:: https://quay.io/repository/biocontainers/haystack_bio/status
   :target: https://quay.io/repository/biocontainers/haystack_bio







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haystack_bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haystack_bio/README.html

