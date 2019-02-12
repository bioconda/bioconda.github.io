.. title:: Package Recipe 'centrifuge'
.. highlight: bash


centrifuge
==========

.. conda:recipe:: centrifuge
   :replaces_section_title:

   Classifier for metagenomic sequences.

   :homepage: https://github.com/infphilo/centrifuge
   :license: GPL3
   :recipe: /`centrifuge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrifuge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centrifuge/meta.yaml>`_
   :links: biotools: :biotools:`Centrifuge`, doi: :doi:`10.1101/gr.210641.116`

   


.. conda:package:: centrifuge

   |downloads_centrifuge| |docker_centrifuge|

   :versions: 1.0.4_beta, 1.0.3

   :depends: :conda:package:`libgcc`  :conda:package:`perl` 5.22.0* :conda:package:`python` 2.7* :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_centrifuge|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install centrifuge

   and update with::

      conda update centrifuge

   or use the docker container::

      docker pull quay.io/repository/biocontainers/centrifuge


.. |required_by_centrifuge| conda:required_by:: centrifuge
.. |downloads_centrifuge| image:: https://img.shields.io/conda/dn/bioconda/centrifuge.svg?style=flat
   :alt:   (downloads)
.. |docker_centrifuge| image:: https://quay.io/repository/biocontainers/centrifuge/status
   :target: https://quay.io/repository/biocontainers/centrifuge







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/centrifuge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/centrifuge/README.html

