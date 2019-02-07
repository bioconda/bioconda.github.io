.. title:: Package Recipe 'pacbio_falcon'
.. highlight: bash


pacbio_falcon
=============

.. conda:recipe:: pacbio_falcon
   :replaces_section_title:

   A set of tools for fast aligning long reads for consensus and assembly

   :homepage: https://github.com/PacificBiosciences/FALCON
   :license: Standard PacBio Open Source License
   :recipe: /`pacbio_falcon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pacbio_falcon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pacbio_falcon/meta.yaml>`_

   


.. conda:package:: pacbio_falcon

   |downloads_pacbio_falcon| |docker_pacbio_falcon|

   :versions: 052016

   :depends: :conda:package:`networkx`  :conda:package:`pypeflow`  :conda:package:`python` 2.7* :conda:package:`rdflib`  

   :required~by: |required_by_pacbio_falcon|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pacbio_falcon

   and update with::

      conda update pacbio_falcon

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pacbio_falcon


.. |required_by_pacbio_falcon| conda:required_by:: pacbio_falcon
.. |downloads_pacbio_falcon| image:: https://img.shields.io/conda/dn/bioconda/pacbio_falcon.svg?style=flat
   :alt:   (downloads)
.. |docker_pacbio_falcon| image:: https://quay.io/repository/biocontainers/pacbio_falcon/status
   :target: https://quay.io/repository/biocontainers/pacbio_falcon







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pacbio_falcon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pacbio_falcon/README.html

