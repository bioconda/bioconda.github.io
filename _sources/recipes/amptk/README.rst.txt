.. title:: Package Recipe 'amptk'
.. highlight: bash


amptk
=====

.. conda:recipe:: amptk
   :replaces_section_title:

   AMPtk\: Amplicon tool kit for processing high throughput amplicon sequencing data.

   :homepage: https://github.com/nextgenusfs/amptk
   :license: BSD / BSD 2-Clause
   :recipe: /`amptk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amptk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amptk/meta.yaml>`_
   :links: doi: :doi:`10.7717/peerj.4925`

   


.. conda:package:: amptk

   |downloads_amptk| |docker_amptk|

   :versions: 1.2.4, 1.2.2, 1.2.0, 1.1.3

   :depends: :conda:package:`bioconductor-dada2` >=1.4 :conda:package:`bioconductor-phyloseq`  :conda:package:`biom-format`  :conda:package:`biopython`  :conda:package:`matplotlib`  :conda:package:`natsort`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pigz`  :conda:package:`psutil`  :conda:package:`python` 2.7* :conda:package:`python-edlib` >=1.2.1 :conda:package:`r-base` 3.4.1* :conda:package:`seaborn`  :conda:package:`vsearch` >=2.2.0 

   :required~by: |required_by_amptk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install amptk

   and update with::

      conda update amptk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/amptk


.. |required_by_amptk| conda:required_by:: amptk
.. |downloads_amptk| image:: https://img.shields.io/conda/dn/bioconda/amptk.svg?style=flat
   :alt:   (downloads)
.. |docker_amptk| image:: https://quay.io/repository/biocontainers/amptk/status
   :target: https://quay.io/repository/biocontainers/amptk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amptk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amptk/README.html

