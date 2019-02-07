.. title:: Package Recipe 'sentieon'
.. highlight: bash


sentieon
========

.. conda:recipe:: sentieon
   :replaces_section_title:

   Accelerated performance bioinformatics tools for mapping and variant calling

   :homepage: http://sentieon.com
   :license: Commercial (requires license for use; redistribution allowed)
   :recipe: /`sentieon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sentieon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sentieon/meta.yaml>`_

   


.. conda:package:: sentieon

   |downloads_sentieon| |docker_sentieon|

   :versions: 201808.03, 201808.02, 201808.01, 201808, 201711.04, 201711.03, 201711.02, 201711.01, 201711, 201704.03, 201704.02, 201704, 201611.03, 201611, 201606, 201603.02

   :depends: :conda:package:`libgfortran` >=3.0 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`python` >=2.7,<3.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_sentieon|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sentieon

   and update with::

      conda update sentieon

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sentieon


.. |required_by_sentieon| conda:required_by:: sentieon
.. |downloads_sentieon| image:: https://img.shields.io/conda/dn/bioconda/sentieon.svg?style=flat
   :alt:   (downloads)
.. |docker_sentieon| image:: https://quay.io/repository/biocontainers/sentieon/status
   :target: https://quay.io/repository/biocontainers/sentieon







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sentieon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sentieon/README.html

