:orphan:  .. only available via index, not via toctree

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

   :versions: 2.1.0-0, 2.0.17.2-0, 2.0.17.1-0, 2.0.16-0, 2.0.15-0, 2.0.12-2, 2.0.8-2, 2.0.8-0, 2.0.6-0, 1.0-0
   
   :depends biopython: >=1.70
   :depends blast: >=2.5.0
   :depends clustalw: >=2.1
   :depends mafft: 
   :depends numpy: >=1.14.0
   :depends pandas: >=0.22.0
   :depends plotly: >=1.12.9
   :depends prodigal: >=2.6.0
   :depends python: >=3
   :depends scipy: >=0.13.3
   :depends sparqlwrapper: >=1.8.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chewbbaca

   and update with::

      conda update chewbbaca

   or use the docker container::

      docker pull quay.io/biocontainers/chewbbaca:<tag>

   (see `chewbbaca/tags`_ for valid values for ``<tag>``)


.. |downloads_chewbbaca| image:: https://img.shields.io/conda/dn/bioconda/chewbbaca.svg?style=flat
   :target: https://anaconda.org/bioconda/chewbbaca
   :alt:   (downloads)
.. |docker_chewbbaca| image:: https://quay.io/repository/biocontainers/chewbbaca/status
   :target: https://quay.io/repository/biocontainers/chewbbaca
.. _`chewbbaca/tags`: https://quay.io/repository/biocontainers/chewbbaca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chewbbaca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chewbbaca/README.html