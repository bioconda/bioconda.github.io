.. title:: Package Recipe 'poa'
.. highlight: bash


poa
===

.. conda:recipe:: poa
   :replaces_section_title:

   POA is Partial Order Alignment\, a fast program for multiple sequence alignment in bioinformatics. Its advantages are speed\, scalability\, sensitivity\, and the superior ability to handle branching \/ indels in the alignment.

   :homepage: https://sourceforge.net/projects/poamsa
   :license: GPLv2
   :recipe: /`poa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poa/meta.yaml>`_

   


.. conda:package:: poa

   |downloads_poa| |docker_poa|

   :versions: 2.0

   :depends: :conda:package:`blast-legacy`  :conda:package:`libgcc`  

   :required~by: |required_by_poa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install poa

   and update with::

      conda update poa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/poa


.. |required_by_poa| conda:required_by:: poa
.. |downloads_poa| image:: https://img.shields.io/conda/dn/bioconda/poa.svg?style=flat
   :alt:   (downloads)
.. |docker_poa| image:: https://quay.io/repository/biocontainers/poa/status
   :target: https://quay.io/repository/biocontainers/poa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poa/README.html

