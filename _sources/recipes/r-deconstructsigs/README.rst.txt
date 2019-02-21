:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-deconstructsigs'
.. highlight: bash

r-deconstructsigs
=================

.. conda:recipe:: r-deconstructsigs
   :replaces_section_title:

   Takes sample information in the form of the fraction of mutations in each of 96 trinucleotide contexts and identifies the weighted combination of published signatures that\, when summed\, most closely reconstructs the mutational profile.

   :homepage: https://github.com/raerose01/deconstructSigs
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-deconstructsigs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deconstructsigs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deconstructsigs/meta.yaml>`_

   


.. conda:package:: r-deconstructsigs

   |downloads_r-deconstructsigs| |docker_r-deconstructsigs|

   :versions: 1.8.0.1-1, 1.8.0.1-0, 1.8.0-2, 1.8.0-0
   
   :depends bioconductor-bsgenome: 
   
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: 
   
   :depends bioconductor-genomeinfodb: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-reshape2: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-deconstructsigs

   and update with::

      conda update r-deconstructsigs

   or use the docker container::

      docker pull quay.io/biocontainers/r-deconstructsigs:<tag>

   (see `r-deconstructsigs/tags`_ for valid values for ``<tag>``)


.. |downloads_r-deconstructsigs| image:: https://img.shields.io/conda/dn/bioconda/r-deconstructsigs.svg?style=flat
   :alt:   (downloads)
.. |docker_r-deconstructsigs| image:: https://quay.io/repository/biocontainers/r-deconstructsigs/status
   :target: https://quay.io/repository/biocontainers/r-deconstructsigs
.. _`r-deconstructsigs/tags`: https://quay.io/repository/biocontainers/r-deconstructsigs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-deconstructsigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-deconstructsigs/README.html