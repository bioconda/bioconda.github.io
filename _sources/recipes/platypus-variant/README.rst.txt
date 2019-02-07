.. title:: Package Recipe 'platypus-variant'
.. highlight: bash


platypus-variant
================

.. conda:recipe:: platypus-variant
   :replaces_section_title:

   A Haplotype\-Based Variant Caller For Next Generation Sequence Data

   :homepage: http://www.well.ox.ac.uk/platypus
   :license: GPLv3
   :recipe: /`platypus-variant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platypus-variant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platypus-variant/meta.yaml>`_

   


.. conda:package:: platypus-variant

   |downloads_platypus-variant| |docker_platypus-variant|

   :versions: 0.8.1.1, 0.8.1

   :depends: :conda:package:`htslib` 1.5* :conda:package:`python` 2.7* 

   :required~by: |required_by_platypus-variant|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install platypus-variant

   and update with::

      conda update platypus-variant

   or use the docker container::

      docker pull quay.io/repository/biocontainers/platypus-variant


.. |required_by_platypus-variant| conda:required_by:: platypus-variant
.. |downloads_platypus-variant| image:: https://img.shields.io/conda/dn/bioconda/platypus-variant.svg?style=flat
   :alt:   (downloads)
.. |docker_platypus-variant| image:: https://quay.io/repository/biocontainers/platypus-variant/status
   :target: https://quay.io/repository/biocontainers/platypus-variant







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/platypus-variant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/platypus-variant/README.html

