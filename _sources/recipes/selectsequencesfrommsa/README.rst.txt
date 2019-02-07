.. title:: Package Recipe 'selectsequencesfrommsa'
.. highlight: bash


selectsequencesfrommsa
======================

.. conda:recipe:: selectsequencesfrommsa
   :replaces_section_title:

   Tool to select representative sequences from a multiple sequence alignment

   :homepage: https://github.com/eggzilla/SelectSequencesFromMSA
   :license: GPL-3
   :recipe: /`selectsequencesfrommsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selectsequencesfrommsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selectsequencesfrommsa/meta.yaml>`_

   


.. conda:package:: selectsequencesfrommsa

   |downloads_selectsequencesfrommsa| |docker_selectsequencesfrommsa|

   :versions: 1.0.5, 1.0.2

   :depends: :conda:package:`gmp` >=6.1.2,<7.0a0 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_selectsequencesfrommsa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install selectsequencesfrommsa

   and update with::

      conda update selectsequencesfrommsa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/selectsequencesfrommsa


.. |required_by_selectsequencesfrommsa| conda:required_by:: selectsequencesfrommsa
.. |downloads_selectsequencesfrommsa| image:: https://img.shields.io/conda/dn/bioconda/selectsequencesfrommsa.svg?style=flat
   :alt:   (downloads)
.. |docker_selectsequencesfrommsa| image:: https://quay.io/repository/biocontainers/selectsequencesfrommsa/status
   :target: https://quay.io/repository/biocontainers/selectsequencesfrommsa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selectsequencesfrommsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selectsequencesfrommsa/README.html

