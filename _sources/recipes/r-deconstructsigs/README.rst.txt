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

   :versions: 1.8.0.1, 1.8.0

   :depends: :conda:package:`bioconductor-bsgenome`  :conda:package:`bioconductor-bsgenome.hsapiens.ucsc.hg19`  :conda:package:`bioconductor-genomeinfodb`  :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-reshape2`  

   :required~by: |required_by_r-deconstructsigs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-deconstructsigs

   and update with::

      conda update r-deconstructsigs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-deconstructsigs


.. |required_by_r-deconstructsigs| conda:required_by:: r-deconstructsigs
.. |downloads_r-deconstructsigs| image:: https://img.shields.io/conda/dn/bioconda/r-deconstructsigs.svg?style=flat
   :alt:   (downloads)
.. |docker_r-deconstructsigs| image:: https://quay.io/repository/biocontainers/r-deconstructsigs/status
   :target: https://quay.io/repository/biocontainers/r-deconstructsigs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-deconstructsigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-deconstructsigs/README.html

