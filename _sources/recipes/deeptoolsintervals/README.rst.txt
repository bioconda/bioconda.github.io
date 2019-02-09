.. title:: Package Recipe 'deeptoolsintervals'
.. highlight: bash


deeptoolsintervals
==================

.. conda:recipe:: deeptoolsintervals
   :replaces_section_title:

   A python module creating\/accessing GTF\-based interval trees with associated meta\-data

   :homepage: https://github.com/deeptools/deeptools_intervals
   :license: GPL3
   :recipe: /`deeptoolsintervals <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeptoolsintervals>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeptoolsintervals/meta.yaml>`_

   


.. conda:package:: deeptoolsintervals

   |downloads_deeptoolsintervals| |docker_deeptoolsintervals|

   :versions: 0.1.7

   :depends: :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_deeptoolsintervals|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deeptoolsintervals

   and update with::

      conda update deeptoolsintervals

   or use the docker container::

      docker pull quay.io/repository/biocontainers/deeptoolsintervals


.. |required_by_deeptoolsintervals| conda:required_by:: deeptoolsintervals
.. |downloads_deeptoolsintervals| image:: https://img.shields.io/conda/dn/bioconda/deeptoolsintervals.svg?style=flat
   :alt:   (downloads)
.. |docker_deeptoolsintervals| image:: https://quay.io/repository/biocontainers/deeptoolsintervals/status
   :target: https://quay.io/repository/biocontainers/deeptoolsintervals







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeptoolsintervals/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeptoolsintervals/README.html

