.. title:: Package Recipe 'erne'
.. highlight: bash


erne
====

.. conda:recipe:: erne
   :replaces_section_title:

   ERNE \- Extended Randomized Numerical alignEr

   :homepage: http://erne.sourceforge.net
   :license: GPLv3
   :recipe: /`erne <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/erne>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/erne/meta.yaml>`_
   :links: biotools: :biotools:`erne`

   


.. conda:package:: erne

   |downloads_erne| |docker_erne|

   :versions: 2.1.1

   :depends: :conda:package:`boost` ==1.63.0 :conda:package:`bzip2`  :conda:package:`libcxx`  :conda:package:`zlib`  

   :required~by: |required_by_erne|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install erne

   and update with::

      conda update erne

   or use the docker container::

      docker pull quay.io/repository/biocontainers/erne


.. |required_by_erne| conda:required_by:: erne
.. |downloads_erne| image:: https://img.shields.io/conda/dn/bioconda/erne.svg?style=flat
   :alt:   (downloads)
.. |docker_erne| image:: https://quay.io/repository/biocontainers/erne/status
   :target: https://quay.io/repository/biocontainers/erne







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/erne/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/erne/README.html

