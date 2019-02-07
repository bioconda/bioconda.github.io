.. title:: Package Recipe 'chewbbaca'
.. highlight: bash


chewbbaca
=========

.. conda:recipe:: chewbbaca
   :replaces_section_title:

   A complete suite for gene\-by\-gene schema creation and strain identification

   :homepage: https://github.com/B-UMMI/chewBBACA
   :license: GPL3 / GPL-3.0
   :recipe: /`chewbbaca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chewbbaca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chewbbaca/meta.yaml>`_

   chewBBACA is a comprehensive pipeline including a set of functions for the creation and validation of whole genome and core genome MultiLocus Sequence Typing \(wg\/cgMLST\) schemas\, providing an allele calling algorithm based on Blast Score Ratio that can be run in multiprocessor settings and a set of functions to visualize and validate allele variation in the loci.


.. conda:package:: chewbbaca

   |downloads_chewbbaca| |docker_chewbbaca|

   :versions: 2.0.16, 2.0.15, 2.0.12, 2.0.8, 2.0.6, 1.0

   :depends: :conda:package:`biopython` >=1.70 :conda:package:`blast` >=2.5.0 :conda:package:`clustalw` >=2.1 :conda:package:`mafft`  :conda:package:`numpy` >=1.14.0 :conda:package:`pandas` >=0.22.0 :conda:package:`plotly` >=1.12.9 :conda:package:`prodigal` >=2.6.0 :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`scipy` >=0.13.3 :conda:package:`sparqlwrapper` >=1.8.0 

   :required~by: |required_by_chewbbaca|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chewbbaca

   and update with::

      conda update chewbbaca

   or use the docker container::

      docker pull quay.io/repository/biocontainers/chewbbaca


.. |required_by_chewbbaca| conda:required_by:: chewbbaca
.. |downloads_chewbbaca| image:: https://img.shields.io/conda/dn/bioconda/chewbbaca.svg?style=flat
   :alt:   (downloads)
.. |docker_chewbbaca| image:: https://quay.io/repository/biocontainers/chewbbaca/status
   :target: https://quay.io/repository/biocontainers/chewbbaca







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chewbbaca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chewbbaca/README.html

