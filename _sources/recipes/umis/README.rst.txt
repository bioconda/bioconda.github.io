.. title:: Package Recipe 'umis'
.. highlight: bash


umis
====

.. conda:recipe:: umis
   :replaces_section_title:

   Tools for processing UMI RNA\-tag data

   :homepage: https://github.com/vals/umis
   :license: MIT
   :recipe: /`umis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umis/meta.yaml>`_

   


.. conda:package:: umis

   |downloads_umis| |docker_umis|

   :versions: 1.0.1, 1.0.0, 0.9.0b, 0.9.0a, 0.7.0, 0.7.0a, 0.6.0a, 0.5.0a, 0.4.0a, 0.3.1a0, 0.2.2a0

   :depends: :conda:package:`click` >=7.0 :conda:package:`cython`  :conda:package:`libgcc-ng` >=4.9 :conda:package:`pandas`  :conda:package:`pysam`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`regex`  :conda:package:`scipy`  :conda:package:`toolz`  

   :required~by: |required_by_umis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install umis

   and update with::

      conda update umis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/umis


.. |required_by_umis| conda:required_by:: umis
.. |downloads_umis| image:: https://img.shields.io/conda/dn/bioconda/umis.svg?style=flat
   :alt:   (downloads)
.. |docker_umis| image:: https://quay.io/repository/biocontainers/umis/status
   :target: https://quay.io/repository/biocontainers/umis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umis/README.html

