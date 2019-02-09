.. title:: Package Recipe 'bcalm'
.. highlight: bash


bcalm
=====

.. conda:recipe:: bcalm
   :replaces_section_title:

   BCALM 2 is a bioinformatics tool for constructing the compacted de Bruijn graph from sequencing data.

   :homepage: https://github.com/GATB/bcalm
   :license: MIT License
   :recipe: /`bcalm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcalm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcalm/meta.yaml>`_

   


.. conda:package:: bcalm

   |downloads_bcalm| |docker_bcalm|

   :versions: 2.2.1, 2.2.0

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_bcalm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcalm

   and update with::

      conda update bcalm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bcalm


.. |required_by_bcalm| conda:required_by:: bcalm
.. |downloads_bcalm| image:: https://img.shields.io/conda/dn/bioconda/bcalm.svg?style=flat
   :alt:   (downloads)
.. |docker_bcalm| image:: https://quay.io/repository/biocontainers/bcalm/status
   :target: https://quay.io/repository/biocontainers/bcalm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcalm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcalm/README.html

