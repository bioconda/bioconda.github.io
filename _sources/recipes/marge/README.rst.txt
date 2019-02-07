.. title:: Package Recipe 'marge'
.. highlight: bash


marge
=====

.. conda:recipe:: marge
   :replaces_section_title:

   Model\-based Analysis of Regulation of Gene Expression

   :homepage: http://cistrome.org/MARGE
   :license: MIT / MIT
   :recipe: /`marge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marge/meta.yaml>`_

   


.. conda:package:: marge

   |downloads_marge| |docker_marge|

   :versions: 1.0

   :depends: :conda:package:`hdf5` 1.8.17* :conda:package:`numpy`  :conda:package:`pytables`  :conda:package:`python` 3.5* :conda:package:`scikit-learn`  :conda:package:`scipy`  :conda:package:`snakemake` 3.* :conda:package:`twobitreader`  :conda:package:`ucsc-bedclip`  :conda:package:`ucsc-bigwigaverageoverbed`  :conda:package:`ucsc-bigwigsummary`  :conda:package:`ucsc-bigwigtobedgraph`  

   :required~by: |required_by_marge|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install marge

   and update with::

      conda update marge

   or use the docker container::

      docker pull quay.io/repository/biocontainers/marge


.. |required_by_marge| conda:required_by:: marge
.. |downloads_marge| image:: https://img.shields.io/conda/dn/bioconda/marge.svg?style=flat
   :alt:   (downloads)
.. |docker_marge| image:: https://quay.io/repository/biocontainers/marge/status
   :target: https://quay.io/repository/biocontainers/marge







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/marge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/marge/README.html

