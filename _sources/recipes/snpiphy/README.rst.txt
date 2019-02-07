.. title:: Package Recipe 'snpiphy'
.. highlight: bash


snpiphy
=======

.. conda:recipe:: snpiphy
   :replaces_section_title:

   An automated snp phylogeny pipeline

   :homepage: https://github.com/bogemad/snpiphy
   :license: GPL / GPLv3
   :recipe: /`snpiphy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpiphy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpiphy/meta.yaml>`_

   


.. conda:package:: snpiphy

   |downloads_snpiphy| |docker_snpiphy|

   :versions: 0.3, 0.2, 0.1

   :depends: :conda:package:`biopython`  :conda:package:`gubbins`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`snippy`  

   :required~by: |required_by_snpiphy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snpiphy

   and update with::

      conda update snpiphy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/snpiphy


.. |required_by_snpiphy| conda:required_by:: snpiphy
.. |downloads_snpiphy| image:: https://img.shields.io/conda/dn/bioconda/snpiphy.svg?style=flat
   :alt:   (downloads)
.. |docker_snpiphy| image:: https://quay.io/repository/biocontainers/snpiphy/status
   :target: https://quay.io/repository/biocontainers/snpiphy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpiphy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpiphy/README.html

