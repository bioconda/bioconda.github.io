.. title:: Package Recipe 'nanoqc'
.. highlight: bash


nanoqc
======

.. conda:recipe:: nanoqc
   :replaces_section_title:

   Create fastQC\-like plots for Oxford Nanopore sequencing data

   :homepage: https://github.com/wdecoster/nanoQC
   :license: MIT / MIT License
   :recipe: /`nanoqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoqc/meta.yaml>`_

   


.. conda:package:: nanoqc

   |downloads_nanoqc| |docker_nanoqc|

   :versions: 0.8.1, 0.7.0, 0.6.0, 0.5.0, 0.4.3, 0.3.3

   :depends: :conda:package:`biopython`  :conda:package:`bokeh`  :conda:package:`numpy`  :conda:package:`python` >=3.5,<3.6.0a0 

   :required~by: |required_by_nanoqc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoqc

   and update with::

      conda update nanoqc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nanoqc


.. |required_by_nanoqc| conda:required_by:: nanoqc
.. |downloads_nanoqc| image:: https://img.shields.io/conda/dn/bioconda/nanoqc.svg?style=flat
   :alt:   (downloads)
.. |docker_nanoqc| image:: https://quay.io/repository/biocontainers/nanoqc/status
   :target: https://quay.io/repository/biocontainers/nanoqc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoqc/README.html

