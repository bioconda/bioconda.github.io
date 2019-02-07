.. title:: Package Recipe 'deltabs'
.. highlight: bash


deltabs
=======

.. conda:recipe:: deltabs
   :replaces_section_title:

   Quantifying the significance of genetic variation using probabilistic profile\-based methods.

   :homepage: https://github.com/UCanCompBio/deltaBS/wiki
   :license: GPL3
   :recipe: /`deltabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltabs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deltabs/meta.yaml>`_

   


.. conda:package:: deltabs

   |downloads_deltabs| |docker_deltabs|

   :versions: 0.1

   :depends: :conda:package:`hmmer`  :conda:package:`perl-bioperl`  :conda:package:`perl-statistics-distributions`  :conda:package:`perl-threaded`  

   :required~by: |required_by_deltabs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deltabs

   and update with::

      conda update deltabs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/deltabs


.. |required_by_deltabs| conda:required_by:: deltabs
.. |downloads_deltabs| image:: https://img.shields.io/conda/dn/bioconda/deltabs.svg?style=flat
   :alt:   (downloads)
.. |docker_deltabs| image:: https://quay.io/repository/biocontainers/deltabs/status
   :target: https://quay.io/repository/biocontainers/deltabs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deltabs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deltabs/README.html

