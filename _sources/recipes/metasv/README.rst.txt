.. title:: Package Recipe 'metasv'
.. highlight: bash


metasv
======

.. conda:recipe:: metasv
   :replaces_section_title:

   An accurate and integrative structural\-variant caller for next generation sequencing

   :homepage: https://github.com/bioinform/metasv
   :license: MIT
   :recipe: /`metasv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasv/meta.yaml>`_

   


.. conda:package:: metasv

   |downloads_metasv| |docker_metasv|

   :versions: 0.5.4, 0.4.0

   :depends: :conda:package:`age-metasv`  :conda:package:`pybedtools` ==0.6.9 :conda:package:`pysam` ==0.7.7 :conda:package:`python` 2.7* :conda:package:`pyvcf` ==0.6.7 :conda:package:`spades`  

   :required~by: |required_by_metasv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metasv

   and update with::

      conda update metasv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metasv


.. |required_by_metasv| conda:required_by:: metasv
.. |downloads_metasv| image:: https://img.shields.io/conda/dn/bioconda/metasv.svg?style=flat
   :alt:   (downloads)
.. |docker_metasv| image:: https://quay.io/repository/biocontainers/metasv/status
   :target: https://quay.io/repository/biocontainers/metasv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metasv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metasv/README.html

