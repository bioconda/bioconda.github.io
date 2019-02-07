.. title:: Package Recipe 'virmet'
.. highlight: bash


virmet
======

.. conda:recipe:: virmet
   :replaces_section_title:

   A pipeline for viral metagenomics

   :homepage: http://virmet.readthedocs.io
   :developer docs: https://github.com/ozagordi/VirMet
   :license: MIT / MIT
   :recipe: /`virmet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virmet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virmet/meta.yaml>`_

   


.. conda:package:: virmet

   |downloads_virmet| |docker_virmet|

   :versions: v1.1.1, v1.1, v1.0

   :depends: :conda:package:`biopython`  :conda:package:`blast` >=2.3 :conda:package:`bwa`  :conda:package:`entrez-direct`  :conda:package:`htslib`  :conda:package:`pandas`  :conda:package:`prinseq`  :conda:package:`python` 3.5* :conda:package:`r-ggplot2`  :conda:package:`samtools` >=1.3 :conda:package:`seqtk`  

   :required~by: |required_by_virmet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install virmet

   and update with::

      conda update virmet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/virmet


.. |required_by_virmet| conda:required_by:: virmet
.. |downloads_virmet| image:: https://img.shields.io/conda/dn/bioconda/virmet.svg?style=flat
   :alt:   (downloads)
.. |docker_virmet| image:: https://quay.io/repository/biocontainers/virmet/status
   :target: https://quay.io/repository/biocontainers/virmet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virmet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virmet/README.html

