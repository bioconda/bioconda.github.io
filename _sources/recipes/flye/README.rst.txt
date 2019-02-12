.. title:: Package Recipe 'flye'
.. highlight: bash


flye
====

.. conda:recipe:: flye
   :replaces_section_title:

   Fast and accurate de novo assembler for single molecule sequencing reads

   :homepage: https://github.com/fenderglass/Flye/
   :license: BSD-3-Clause
   :recipe: /`flye <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flye>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flye/meta.yaml>`_

   


.. conda:package:: flye

   |downloads_flye| |docker_flye|

   :versions: 2.4, 2.3.7, 2.3.6, 2.3.5, 2.3.4, 2.3.3, 2.3.2, 2.3.1, 2.3

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_flye|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flye

   and update with::

      conda update flye

   or use the docker container::

      docker pull quay.io/repository/biocontainers/flye


.. |required_by_flye| conda:required_by:: flye
.. |downloads_flye| image:: https://img.shields.io/conda/dn/bioconda/flye.svg?style=flat
   :alt:   (downloads)
.. |docker_flye| image:: https://quay.io/repository/biocontainers/flye/status
   :target: https://quay.io/repository/biocontainers/flye







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flye/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flye/README.html

