.. title:: Package Recipe 'trimadap'
.. highlight: bash


trimadap
========

.. conda:recipe:: trimadap
   :replaces_section_title:

   Fast but inaccurate adapter trimmer for Illumina reads.

   :homepage: https://github.com/lh3/trimadap
   :license: MIT / MIT
   :recipe: /`trimadap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimadap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimadap/meta.yaml>`_

   


.. conda:package:: trimadap

   |downloads_trimadap| |docker_trimadap|

   :versions: r11, r10, r9

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_trimadap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trimadap

   and update with::

      conda update trimadap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/trimadap


.. |required_by_trimadap| conda:required_by:: trimadap
.. |downloads_trimadap| image:: https://img.shields.io/conda/dn/bioconda/trimadap.svg?style=flat
   :alt:   (downloads)
.. |docker_trimadap| image:: https://quay.io/repository/biocontainers/trimadap/status
   :target: https://quay.io/repository/biocontainers/trimadap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimadap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimadap/README.html

