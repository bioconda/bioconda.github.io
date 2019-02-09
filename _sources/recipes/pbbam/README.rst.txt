.. title:: Package Recipe 'pbbam'
.. highlight: bash


pbbam
=====

.. conda:recipe:: pbbam
   :replaces_section_title:

   PacBio BAM C\+\+ library

   :homepage: https://github.com/PacificBiosciences/pbbam
   :license: BSD-3-Clause-Clear
   :recipe: /`pbbam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbbam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbbam/meta.yaml>`_

   


.. conda:package:: pbbam

   |downloads_pbbam| |docker_pbbam|

   :versions: 0.19.0, 0.18.0, 0.1

   :depends: :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_pbbam|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbbam

   and update with::

      conda update pbbam

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pbbam


.. |required_by_pbbam| conda:required_by:: pbbam
.. |downloads_pbbam| image:: https://img.shields.io/conda/dn/bioconda/pbbam.svg?style=flat
   :alt:   (downloads)
.. |docker_pbbam| image:: https://quay.io/repository/biocontainers/pbbam/status
   :target: https://quay.io/repository/biocontainers/pbbam







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbbam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbbam/README.html

