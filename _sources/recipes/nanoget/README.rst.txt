.. title:: Package Recipe 'nanoget'
.. highlight: bash


nanoget
=======

.. conda:recipe:: nanoget
   :replaces_section_title:

   Functions to extract information from Oxford Nanopore sequencing data and alignments.

   :homepage: https://github.com/wdecoster/nanoget
   :license: MIT / MIT License
   :recipe: /`nanoget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoget/meta.yaml>`_

   


.. conda:package:: nanoget

   |downloads_nanoget| |docker_nanoget|

   :versions: 1.7.6, 1.7.4, 1.5.2, 1.5.0, 1.2.2, 1.0.2, 1.0.0, 0.11.7, 0.11.5

   :depends: :conda:package:`biopython`  :conda:package:`nanomath`  :conda:package:`numpy`  :conda:package:`pandas` >=0.22.0 :conda:package:`pysam` >0.10.0.0 :conda:package:`python` >=3.5,<3.6.0a0 

   :required~by: |required_by_nanoget|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoget

   and update with::

      conda update nanoget

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanoget


.. |required_by_nanoget| conda:required_by:: nanoget
.. |downloads_nanoget| image:: https://img.shields.io/conda/dn/bioconda/nanoget.svg?style=flat
   :alt:   (downloads)
.. |docker_nanoget| image:: https://quay.io/repository/biocontainers/nanoget/status
   :target: https://quay.io/repository/biocontainers/nanoget







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoget/README.html

