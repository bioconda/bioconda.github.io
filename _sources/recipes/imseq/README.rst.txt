.. title:: Package Recipe 'imseq'
.. highlight: bash


imseq
=====

.. conda:recipe:: imseq
   :replaces_section_title:

   IMSEQ is a fast\, PCR and sequencing error aware tool to analyze high throughput data from recombined T\-cell receptor or immunoglobulin gene sequencing experiments


   :homepage: http://www.imtools.org/
   :license: GPLv2
   :recipe: /`imseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imseq/meta.yaml>`_

   


.. conda:package:: imseq

   |downloads_imseq| |docker_imseq|

   :versions: 1.1.0

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_imseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install imseq

   and update with::

      conda update imseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/imseq


.. |required_by_imseq| conda:required_by:: imseq
.. |downloads_imseq| image:: https://img.shields.io/conda/dn/bioconda/imseq.svg?style=flat
   :alt:   (downloads)
.. |docker_imseq| image:: https://quay.io/repository/biocontainers/imseq/status
   :target: https://quay.io/repository/biocontainers/imseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imseq/README.html

