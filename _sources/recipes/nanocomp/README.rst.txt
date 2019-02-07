.. title:: Package Recipe 'nanocomp'
.. highlight: bash


nanocomp
========

.. conda:recipe:: nanocomp
   :replaces_section_title:

   Comparing runs of Oxford Nanopore sequencing data and alignments

   :homepage: https://github.com/wdecoster/NanoComp
   :license: MIT / MIT License
   :recipe: /`nanocomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocomp/meta.yaml>`_

   


.. conda:package:: nanocomp

   |downloads_nanocomp| |docker_nanocomp|

   :versions: 1.1.0, 1.0.0, 0.23.1, 0.23.0, 0.19.0, 0.16.0, 0.15.0, 0.12.4, 0.7.0, 0.5.0

   :depends: :conda:package:`nanoget` >=1.4.0 :conda:package:`nanomath` >=0.15.3 :conda:package:`nanoplot` >=1.17.3 :conda:package:`nanoplotter` >=1.0.0 :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` >=3.5,<3.6.0a0 

   :required~by: |required_by_nanocomp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanocomp

   and update with::

      conda update nanocomp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanocomp


.. |required_by_nanocomp| conda:required_by:: nanocomp
.. |downloads_nanocomp| image:: https://img.shields.io/conda/dn/bioconda/nanocomp.svg?style=flat
   :alt:   (downloads)
.. |docker_nanocomp| image:: https://quay.io/repository/biocontainers/nanocomp/status
   :target: https://quay.io/repository/biocontainers/nanocomp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanocomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanocomp/README.html

