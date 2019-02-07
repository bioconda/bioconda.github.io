.. title:: Package Recipe 'srst2'
.. highlight: bash


srst2
=====

.. conda:recipe:: srst2
   :replaces_section_title:

   Short Read Sequence Typing for Bacterial Pathogens

   :homepage: https://github.com/katholt/srst2
   :license: BSD
   :recipe: /`srst2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srst2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srst2/meta.yaml>`_

   


.. conda:package:: srst2

   |downloads_srst2| |docker_srst2|

   :versions: 0.2.0, 0.1.6, 0.1.4.6

   :depends: :conda:package:`bowtie2` >=2.1.0 :conda:package:`numpy` >=1.7.1 :conda:package:`python` 2.7* :conda:package:`samtools` ==0.1.18 :conda:package:`scipy` >=0.12.0 

   :required~by: |required_by_srst2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install srst2

   and update with::

      conda update srst2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/srst2


.. |required_by_srst2| conda:required_by:: srst2
.. |downloads_srst2| image:: https://img.shields.io/conda/dn/bioconda/srst2.svg?style=flat
   :alt:   (downloads)
.. |docker_srst2| image:: https://quay.io/repository/biocontainers/srst2/status
   :target: https://quay.io/repository/biocontainers/srst2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srst2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srst2/README.html

