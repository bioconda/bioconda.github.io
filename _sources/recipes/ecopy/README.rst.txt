.. title:: Package Recipe 'ecopy'
.. highlight: bash


ecopy
=====

.. conda:recipe:: ecopy
   :replaces_section_title:

   EcoPy\: Ecological Data Analysis in Python

   :homepage: https://github.com/Auerilas/ecopy
   :license: MIT / MIT License
   :recipe: /`ecopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecopy/meta.yaml>`_

   


.. conda:package:: ecopy

   |downloads_ecopy| |docker_ecopy|

   :versions: 0.1.2.2, 0.1.2

   :depends: :conda:package:`cython`  :conda:package:`libgcc`  :conda:package:`matplotlib` >=1.3.1 :conda:package:`numpy` >=1.7 :conda:package:`pandas` >=0.13 :conda:package:`patsy` >=0.3.0 :conda:package:`python` 2.7* :conda:package:`scipy` >=0.14 

   :required~by: |required_by_ecopy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ecopy

   and update with::

      conda update ecopy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ecopy


.. |required_by_ecopy| conda:required_by:: ecopy
.. |downloads_ecopy| image:: https://img.shields.io/conda/dn/bioconda/ecopy.svg?style=flat
   :alt:   (downloads)
.. |docker_ecopy| image:: https://quay.io/repository/biocontainers/ecopy/status
   :target: https://quay.io/repository/biocontainers/ecopy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ecopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ecopy/README.html

