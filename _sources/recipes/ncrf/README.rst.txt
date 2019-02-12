.. title:: Package Recipe 'ncrf'
.. highlight: bash


ncrf
====

.. conda:recipe:: ncrf
   :replaces_section_title:

   Noise\-Cancelling Repeat Finder\, Uncovering tandem repeats in error\-prone long\-read sequencing data.

   :homepage: https://github.com/makovalab-psu/NoiseCancellingRepeatFinder
   :license: MIT
   :recipe: /`ncrf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncrf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncrf/meta.yaml>`_

   


.. conda:package:: ncrf

   |downloads_ncrf| |docker_ncrf|

   :versions: 1.00.06, 1.0.4

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_ncrf|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncrf

   and update with::

      conda update ncrf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ncrf


.. |required_by_ncrf| conda:required_by:: ncrf
.. |downloads_ncrf| image:: https://img.shields.io/conda/dn/bioconda/ncrf.svg?style=flat
   :alt:   (downloads)
.. |docker_ncrf| image:: https://quay.io/repository/biocontainers/ncrf/status
   :target: https://quay.io/repository/biocontainers/ncrf







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncrf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncrf/README.html

