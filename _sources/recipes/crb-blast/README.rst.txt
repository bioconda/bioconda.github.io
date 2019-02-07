.. title:: Package Recipe 'crb-blast'
.. highlight: bash


crb-blast
=========

.. conda:recipe:: crb-blast
   :replaces_section_title:

   Conditional Reciprocal Best BLAST \- high confidence ortholog assignment.

   :homepage: https://github.com/cboursnell/crb-blast
   :license: MIT
   :recipe: /`crb-blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crb-blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crb-blast/meta.yaml>`_

   


.. conda:package:: crb-blast

   |downloads_crb-blast| |docker_crb-blast|

   :versions: 0.6.6

   :depends: :conda:package:`blast`  :conda:package:`ruby`  

   :required~by: |required_by_crb-blast|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crb-blast

   and update with::

      conda update crb-blast

   or use the docker container::

      docker pull quay.io/repository/biocontainers/crb-blast


.. |required_by_crb-blast| conda:required_by:: crb-blast
.. |downloads_crb-blast| image:: https://img.shields.io/conda/dn/bioconda/crb-blast.svg?style=flat
   :alt:   (downloads)
.. |docker_crb-blast| image:: https://quay.io/repository/biocontainers/crb-blast/status
   :target: https://quay.io/repository/biocontainers/crb-blast







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crb-blast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crb-blast/README.html

