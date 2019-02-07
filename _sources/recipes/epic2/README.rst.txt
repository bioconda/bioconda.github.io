.. title:: Package Recipe 'epic2'
.. highlight: bash


epic2
=====

.. conda:recipe:: epic2
   :replaces_section_title:

   Ultraperformant Chip\-Seq broad domain finder based on SICER.

   :homepage: http://github.com/endrebak/epic2
   :license: MIT
   :recipe: /`epic2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epic2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epic2/meta.yaml>`_

   


.. conda:package:: epic2

   |downloads_epic2| |docker_epic2|

   :versions: 0.0.16, 0.0.15

   :depends: :conda:package:`cython`  :conda:package:`functools32`  :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`libdeflate` >=1.0,<1.1.0a0 :conda:package:`natsort`  :conda:package:`numpy`  :conda:package:`pysam`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  

   :required~by: |required_by_epic2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install epic2

   and update with::

      conda update epic2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/epic2


.. |required_by_epic2| conda:required_by:: epic2
.. |downloads_epic2| image:: https://img.shields.io/conda/dn/bioconda/epic2.svg?style=flat
   :alt:   (downloads)
.. |docker_epic2| image:: https://quay.io/repository/biocontainers/epic2/status
   :target: https://quay.io/repository/biocontainers/epic2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epic2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epic2/README.html

