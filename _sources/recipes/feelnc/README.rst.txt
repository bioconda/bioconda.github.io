.. title:: Package Recipe 'feelnc'
.. highlight: bash


feelnc
======

.. conda:recipe:: feelnc
   :replaces_section_title:

   FlExible Extraction of LncRNA

   :homepage: https://github.com/tderrien/FEELnc
   :license: GNU General Public License v3.0
   :recipe: /`feelnc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feelnc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feelnc/meta.yaml>`_

   


.. conda:package:: feelnc

   |downloads_feelnc| |docker_feelnc|

   :versions: 0.1.1

   :depends: :conda:package:`fasta_ushuffle`  :conda:package:`kmerinshort`  :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-bio-featureio`  :conda:package:`perl-bioperl`  :conda:package:`perl-db-file`  :conda:package:`perl-parallel-forkmanager`  :conda:package:`r-base`  :conda:package:`r-randomforest`  :conda:package:`r-rocr`  

   :required~by: |required_by_feelnc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install feelnc

   and update with::

      conda update feelnc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/feelnc


.. |required_by_feelnc| conda:required_by:: feelnc
.. |downloads_feelnc| image:: https://img.shields.io/conda/dn/bioconda/feelnc.svg?style=flat
   :alt:   (downloads)
.. |docker_feelnc| image:: https://quay.io/repository/biocontainers/feelnc/status
   :target: https://quay.io/repository/biocontainers/feelnc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/feelnc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/feelnc/README.html

