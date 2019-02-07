.. title:: Package Recipe 'fadapa'
.. highlight: bash


fadapa
======

.. conda:recipe:: fadapa
   :replaces_section_title:

   FAstqc DAta PArser \- A minimal parser to parse FastQC output data

   :homepage: https://github.com/fadapa/fadapa
   :license: uncopyrighted
   :recipe: /`fadapa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fadapa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fadapa/meta.yaml>`_

   


.. conda:package:: fadapa

   |downloads_fadapa| |docker_fadapa|

   :versions: 0.3.1

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_fadapa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fadapa

   and update with::

      conda update fadapa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fadapa


.. |required_by_fadapa| conda:required_by:: fadapa
.. |downloads_fadapa| image:: https://img.shields.io/conda/dn/bioconda/fadapa.svg?style=flat
   :alt:   (downloads)
.. |docker_fadapa| image:: https://quay.io/repository/biocontainers/fadapa/status
   :target: https://quay.io/repository/biocontainers/fadapa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fadapa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fadapa/README.html

