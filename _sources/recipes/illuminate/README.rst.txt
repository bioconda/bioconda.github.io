.. title:: Package Recipe 'illuminate'
.. highlight: bash


illuminate
==========

.. conda:recipe:: illuminate
   :replaces_section_title:

   Analytics toolkit for Illumina sequencer metrics.

   :homepage: https://bitbucket.org/invitae/illuminate
   :license: MIT / MIT
   :recipe: /`illuminate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illuminate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illuminate/meta.yaml>`_
   :links: biotools: :biotools:`illuminate`

   


.. conda:package:: illuminate

   |downloads_illuminate| |docker_illuminate|

   :versions: 0.6.3

   :depends: :conda:package:`bitstring` >=3.1.0 :conda:package:`docopt`  :conda:package:`numpy` >=1.6.2 :conda:package:`openpyxl` ==1.8.6 :conda:package:`pandas` >=0.14 :conda:package:`python` 2.7* :conda:package:`xmltodict`  

   :required~by: |required_by_illuminate|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install illuminate

   and update with::

      conda update illuminate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/illuminate


.. |required_by_illuminate| conda:required_by:: illuminate
.. |downloads_illuminate| image:: https://img.shields.io/conda/dn/bioconda/illuminate.svg?style=flat
   :alt:   (downloads)
.. |docker_illuminate| image:: https://quay.io/repository/biocontainers/illuminate/status
   :target: https://quay.io/repository/biocontainers/illuminate







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/illuminate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/illuminate/README.html

