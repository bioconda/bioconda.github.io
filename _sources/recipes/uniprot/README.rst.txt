.. title:: Package Recipe 'uniprot'
.. highlight: bash


uniprot
=======

.. conda:recipe:: uniprot
   :replaces_section_title:

   Retrieve protein sequence identifiers and metadata from http\:\/\/uniprot.org

   :homepage: http://github.com/boscoh/uniprot
   :license: BSD / BSD
   :recipe: /`uniprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uniprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uniprot/meta.yaml>`_

   


.. conda:package:: uniprot

   |downloads_uniprot| |docker_uniprot|

   :versions: 1.3

   :depends: :conda:package:`python` 2.7* :conda:package:`requests`  

   :required~by: |required_by_uniprot|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install uniprot

   and update with::

      conda update uniprot

   or use the docker container::

      docker pull quay.io/repository/biocontainers/uniprot


.. |required_by_uniprot| conda:required_by:: uniprot
.. |downloads_uniprot| image:: https://img.shields.io/conda/dn/bioconda/uniprot.svg?style=flat
   :alt:   (downloads)
.. |docker_uniprot| image:: https://quay.io/repository/biocontainers/uniprot/status
   :target: https://quay.io/repository/biocontainers/uniprot







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uniprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uniprot/README.html

