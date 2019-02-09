.. title:: Package Recipe 'taco'
.. highlight: bash


taco
====

.. conda:recipe:: taco
   :replaces_section_title:

   A tool for multi\-sample transcriptome assembly from RNA\-Seq

   :homepage: https://github.com/tacorna/taco
   :license: MIT / MIT
   :recipe: /`taco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taco/meta.yaml>`_

   


.. conda:package:: taco

   |downloads_taco| |docker_taco|

   :versions: 0.7.3, v0.7.0

   :depends: :conda:package:`pyinstaller`  :conda:package:`python` 2.7* 

   :required~by: |required_by_taco|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install taco

   and update with::

      conda update taco

   or use the docker container::

      docker pull quay.io/repository/biocontainers/taco


.. |required_by_taco| conda:required_by:: taco
.. |downloads_taco| image:: https://img.shields.io/conda/dn/bioconda/taco.svg?style=flat
   :alt:   (downloads)
.. |docker_taco| image:: https://quay.io/repository/biocontainers/taco/status
   :target: https://quay.io/repository/biocontainers/taco







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taco/README.html

