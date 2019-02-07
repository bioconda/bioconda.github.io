.. title:: Package Recipe 'ceas'
.. highlight: bash


ceas
====

.. conda:recipe:: ceas
   :replaces_section_title:

   CEAS\: Cis\-regulatory Element Annotation System

   :homepage: http://liulab.dfci.harvard.edu/CEAS
   :license: Artistic
   :recipe: /`ceas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ceas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ceas/meta.yaml>`_
   :links: biotools: :biotools:`ceas`

   


.. conda:package:: ceas

   |downloads_ceas| |docker_ceas|

   :versions: 1.0.2

   :depends: :conda:package:`mysql-python`  :conda:package:`python` 2.7* 

   :required~by: |required_by_ceas|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ceas

   and update with::

      conda update ceas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ceas


.. |required_by_ceas| conda:required_by:: ceas
.. |downloads_ceas| image:: https://img.shields.io/conda/dn/bioconda/ceas.svg?style=flat
   :alt:   (downloads)
.. |docker_ceas| image:: https://quay.io/repository/biocontainers/ceas/status
   :target: https://quay.io/repository/biocontainers/ceas







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ceas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ceas/README.html

