.. title:: Package Recipe 'basic'
.. highlight: bash


basic
=====

.. conda:recipe:: basic
   :replaces_section_title:

   BASIC is a semi\-de novo assembly method for assembling BCR and TCR genes  from single cell RNA\-seq data.

   :homepage: http://ttic.uchicago.edu/~aakhan/BASIC/
   :license: MIT
   :recipe: /`basic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/basic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/basic/meta.yaml>`_

   


.. conda:package:: basic

   |downloads_basic| |docker_basic|

   :versions: 1.4.1, 1.4.0, 1.3.1, 1.0.1

   :depends: :conda:package:`bowtie2`  :conda:package:`python`  

   :required~by: |required_by_basic|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install basic

   and update with::

      conda update basic

   or use the docker container::

      docker pull quay.io/repository/biocontainers/basic


.. |required_by_basic| conda:required_by:: basic
.. |downloads_basic| image:: https://img.shields.io/conda/dn/bioconda/basic.svg?style=flat
   :alt:   (downloads)
.. |docker_basic| image:: https://quay.io/repository/biocontainers/basic/status
   :target: https://quay.io/repository/biocontainers/basic







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/basic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/basic/README.html

