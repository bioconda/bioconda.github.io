.. title:: Package Recipe 'batvi'
.. highlight: bash


batvi
=====

.. conda:recipe:: batvi
   :replaces_section_title:

   Detect viral integrations

   :homepage: https://www.comp.nus.edu.sg/~bioinfo/batvi/
   :license: GPLv3+
   :recipe: /`batvi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/batvi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/batvi/meta.yaml>`_

   


.. conda:package:: batvi

   |downloads_batvi| |docker_batvi|

   :versions: 1.04

   :depends: :conda:package:`bedtools`  :conda:package:`blast`  :conda:package:`bwa`  :conda:package:`openjdk`  :conda:package:`picard`  :conda:package:`samtools`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_batvi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install batvi

   and update with::

      conda update batvi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/batvi


.. |required_by_batvi| conda:required_by:: batvi
.. |downloads_batvi| image:: https://img.shields.io/conda/dn/bioconda/batvi.svg?style=flat
   :alt:   (downloads)
.. |docker_batvi| image:: https://quay.io/repository/biocontainers/batvi/status
   :target: https://quay.io/repository/biocontainers/batvi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/batvi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/batvi/README.html

