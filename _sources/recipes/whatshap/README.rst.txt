.. title:: Package Recipe 'whatshap'
.. highlight: bash


whatshap
========

.. conda:recipe:: whatshap
   :replaces_section_title:

   phase genomic variants using DNA sequencing reads \(haplotype assembly\)

   :homepage: https://whatshap.readthedocs.io/
   :license: MIT License
   :recipe: /`whatshap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatshap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatshap/meta.yaml>`_

   


.. conda:package:: whatshap

   |downloads_whatshap| |docker_whatshap|

   :versions: 0.17, 0.16, 0.15, 0.14.1, 0.13, 0.12, 0.11, 0.9

   :depends: :conda:package:`networkx`  :conda:package:`pyfaidx`  :conda:package:`pysam` >=0.14 :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`pyvcf`  :conda:package:`xopen`  

   :required~by: |required_by_whatshap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install whatshap

   and update with::

      conda update whatshap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/whatshap


.. |required_by_whatshap| conda:required_by:: whatshap
.. |downloads_whatshap| image:: https://img.shields.io/conda/dn/bioconda/whatshap.svg?style=flat
   :alt:   (downloads)
.. |docker_whatshap| image:: https://quay.io/repository/biocontainers/whatshap/status
   :target: https://quay.io/repository/biocontainers/whatshap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/whatshap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/whatshap/README.html

