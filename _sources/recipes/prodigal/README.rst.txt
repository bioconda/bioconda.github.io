.. title:: Package Recipe 'prodigal'
.. highlight: bash


prodigal
========

.. conda:recipe:: prodigal
   :replaces_section_title:

   Prodigal \(Prokaryotic Dynamic Programming Genefinding Algorithm\) is a microbial \(bacterial and archaeal\) gene finding program

   :homepage: http://prodigal.ornl.gov/
   :license: GPL v3
   :recipe: /`prodigal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prodigal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prodigal/meta.yaml>`_

   


.. conda:package:: prodigal

   |downloads_prodigal| |docker_prodigal|

   :versions: 2.6.3, 2.6.2

   :depends: 

   :required~by: |required_by_prodigal|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prodigal

   and update with::

      conda update prodigal

   or use the docker container::

      docker pull quay.io/repository/biocontainers/prodigal


.. |required_by_prodigal| conda:required_by:: prodigal
.. |downloads_prodigal| image:: https://img.shields.io/conda/dn/bioconda/prodigal.svg?style=flat
   :alt:   (downloads)
.. |docker_prodigal| image:: https://quay.io/repository/biocontainers/prodigal/status
   :target: https://quay.io/repository/biocontainers/prodigal







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prodigal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prodigal/README.html

