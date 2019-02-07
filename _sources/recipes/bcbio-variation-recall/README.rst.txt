.. title:: Package Recipe 'bcbio-variation-recall'
.. highlight: bash


bcbio-variation-recall
======================

.. conda:recipe:: bcbio-variation-recall
   :replaces_section_title:

   Parallel merging\, squaring off and ensemble calling for genomic variants

   :homepage: https://github.com/chapmanb/bcbio.variation.recall
   :license: MIT
   :recipe: /`bcbio-variation-recall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-variation-recall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-variation-recall/meta.yaml>`_

   


.. conda:package:: bcbio-variation-recall

   |downloads_bcbio-variation-recall| |docker_bcbio-variation-recall|

   :versions: 0.2.2, 0.2.1, 0.1.9, 0.1.8, 0.1.7, 0.1.6, 0.1.5, 0.1.4

   :depends: :conda:package:`openjdk`  :conda:package:`zlib`  

   :required~by: |required_by_bcbio-variation-recall|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcbio-variation-recall

   and update with::

      conda update bcbio-variation-recall

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bcbio-variation-recall


.. |required_by_bcbio-variation-recall| conda:required_by:: bcbio-variation-recall
.. |downloads_bcbio-variation-recall| image:: https://img.shields.io/conda/dn/bioconda/bcbio-variation-recall.svg?style=flat
   :alt:   (downloads)
.. |docker_bcbio-variation-recall| image:: https://quay.io/repository/biocontainers/bcbio-variation-recall/status
   :target: https://quay.io/repository/biocontainers/bcbio-variation-recall







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-variation-recall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-variation-recall/README.html

