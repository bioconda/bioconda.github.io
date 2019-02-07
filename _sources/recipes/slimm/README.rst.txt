.. title:: Package Recipe 'slimm'
.. highlight: bash


slimm
=====

.. conda:recipe:: slimm
   :replaces_section_title:

   SLIMM \- Species Level Identification of Microbes from Metagenomes

   :homepage: https://github.com/seqan/slimm/blob/master/README.md
   :license: https://github.com/seqan/slimm/blob/master/LICENSE
   :recipe: /`slimm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slimm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slimm/meta.yaml>`_
   :links: biotools: :biotools:`slimm`, doi: :doi:`10.7717/peerj.3138`

   


.. conda:package:: slimm

   |downloads_slimm| |docker_slimm|

   :versions: 0.3.4

   :depends: :conda:package:`bzip2` >=1.0.6,<2.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_slimm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install slimm

   and update with::

      conda update slimm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/slimm


.. |required_by_slimm| conda:required_by:: slimm
.. |downloads_slimm| image:: https://img.shields.io/conda/dn/bioconda/slimm.svg?style=flat
   :alt:   (downloads)
.. |docker_slimm| image:: https://quay.io/repository/biocontainers/slimm/status
   :target: https://quay.io/repository/biocontainers/slimm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slimm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slimm/README.html

