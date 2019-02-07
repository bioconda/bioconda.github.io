.. title:: Package Recipe 'spectrassembler'
.. highlight: bash


spectrassembler
===============

.. conda:recipe:: spectrassembler
   :replaces_section_title:

   Tool \(experimental\) to compute layout from overlaps with spectral algorithm

   :homepage: https://github.com/antrec/spectrassembler
   :license: MIT
   :recipe: /`spectrassembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrassembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectrassembler/meta.yaml>`_

   


.. conda:package:: spectrassembler

   |downloads_spectrassembler| |docker_spectrassembler|

   :versions: 0.0.1a1

   :depends: :conda:package:`biopython`  :conda:package:`bwa`  :conda:package:`minimap`  :conda:package:`numpy`  :conda:package:`poa`  :conda:package:`python` 2.7* :conda:package:`scipy`  

   :required~by: |required_by_spectrassembler|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spectrassembler

   and update with::

      conda update spectrassembler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/spectrassembler


.. |required_by_spectrassembler| conda:required_by:: spectrassembler
.. |downloads_spectrassembler| image:: https://img.shields.io/conda/dn/bioconda/spectrassembler.svg?style=flat
   :alt:   (downloads)
.. |docker_spectrassembler| image:: https://quay.io/repository/biocontainers/spectrassembler/status
   :target: https://quay.io/repository/biocontainers/spectrassembler







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectrassembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectrassembler/README.html

