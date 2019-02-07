.. title:: Package Recipe 'intervaltree_bio'
.. highlight: bash


intervaltree_bio
================

.. conda:recipe:: intervaltree_bio
   :replaces_section_title:

   Interval tree convenience classes for genomic data

   :homepage: https://github.com/konstantint/intervaltree-bio
   :license: MIT License
   :recipe: /`intervaltree_bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intervaltree_bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intervaltree_bio/meta.yaml>`_

   


.. conda:package:: intervaltree_bio

   |downloads_intervaltree_bio| |docker_intervaltree_bio|

   :versions: 1.0.1

   :depends: :conda:package:`intervaltree`  :conda:package:`python` 2.7* 

   :required~by: |required_by_intervaltree_bio|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install intervaltree_bio

   and update with::

      conda update intervaltree_bio

   or use the docker container::

      docker pull quay.io/repository/biocontainers/intervaltree_bio


.. |required_by_intervaltree_bio| conda:required_by:: intervaltree_bio
.. |downloads_intervaltree_bio| image:: https://img.shields.io/conda/dn/bioconda/intervaltree_bio.svg?style=flat
   :alt:   (downloads)
.. |docker_intervaltree_bio| image:: https://quay.io/repository/biocontainers/intervaltree_bio/status
   :target: https://quay.io/repository/biocontainers/intervaltree_bio







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intervaltree_bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intervaltree_bio/README.html

