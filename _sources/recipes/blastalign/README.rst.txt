.. title:: Package Recipe 'blastalign'
.. highlight: bash


blastalign
==========

.. conda:recipe:: blastalign
   :replaces_section_title:

   BlastAlign uses NCBI Blast to align nucleotide sequences that have large indels or are otherwise difficult to align globally.

   :homepage: http://evolve.zoo.ox.ac.uk/Evolve/Blastalign.html
   :license: GNU GENERAL PUBLIC LICENSE
   :recipe: /`blastalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastalign/meta.yaml>`_

   


.. conda:package:: blastalign

   |downloads_blastalign| |docker_blastalign|

   :versions: 1.4

   :depends: :conda:package:`blast-legacy`  :conda:package:`perl` 5.22.0* :conda:package:`python` 2.7* 

   :required~by: |required_by_blastalign|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blastalign

   and update with::

      conda update blastalign

   or use the docker container::

      docker pull quay.io/repository/biocontainers/blastalign


.. |required_by_blastalign| conda:required_by:: blastalign
.. |downloads_blastalign| image:: https://img.shields.io/conda/dn/bioconda/blastalign.svg?style=flat
   :alt:   (downloads)
.. |docker_blastalign| image:: https://quay.io/repository/biocontainers/blastalign/status
   :target: https://quay.io/repository/biocontainers/blastalign







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blastalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blastalign/README.html

