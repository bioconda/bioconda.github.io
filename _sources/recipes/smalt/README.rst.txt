.. title:: Package Recipe 'smalt'
.. highlight: bash


smalt
=====

.. conda:recipe:: smalt
   :replaces_section_title:

   SMALT aligns DNA sequencing reads with a reference genome.

   :homepage: http://www.sanger.ac.uk/science/tools/smalt-0
   :license: GPLv3
   :recipe: /`smalt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smalt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smalt/meta.yaml>`_
   :links: biotools: :biotools:`Smalt`

   


.. conda:package:: smalt

   |downloads_smalt| |docker_smalt|

   :versions: 0.7.6

   :depends: :conda:package:`bambamc`  :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_smalt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smalt

   and update with::

      conda update smalt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/smalt


.. |required_by_smalt| conda:required_by:: smalt
.. |downloads_smalt| image:: https://img.shields.io/conda/dn/bioconda/smalt.svg?style=flat
   :alt:   (downloads)
.. |docker_smalt| image:: https://quay.io/repository/biocontainers/smalt/status
   :target: https://quay.io/repository/biocontainers/smalt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smalt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smalt/README.html

