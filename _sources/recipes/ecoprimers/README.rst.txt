.. title:: Package Recipe 'ecoprimers'
.. highlight: bash


ecoprimers
==========

.. conda:recipe:: ecoprimers
   :replaces_section_title:

   ecoPrimers is a software that finds primers from a set of sequence.

   :homepage: https://git.metabarcoding.org/obitools/ecoprimers/wikis/home
   :license: CeCill v2
   :recipe: /`ecoprimers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecoprimers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecoprimers/meta.yaml>`_

   


.. conda:package:: ecoprimers

   |downloads_ecoprimers| |docker_ecoprimers|

   :versions: 1.0

   :depends: :conda:package:`zlib`  

   :required~by: |required_by_ecoprimers|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ecoprimers

   and update with::

      conda update ecoprimers

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ecoprimers


.. |required_by_ecoprimers| conda:required_by:: ecoprimers
.. |downloads_ecoprimers| image:: https://img.shields.io/conda/dn/bioconda/ecoprimers.svg?style=flat
   :alt:   (downloads)
.. |docker_ecoprimers| image:: https://quay.io/repository/biocontainers/ecoprimers/status
   :target: https://quay.io/repository/biocontainers/ecoprimers







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ecoprimers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ecoprimers/README.html

