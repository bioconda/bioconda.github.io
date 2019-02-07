.. title:: Package Recipe 'genepender'
.. highlight: bash


genepender
==========

.. conda:recipe:: genepender
   :replaces_section_title:

   Annotates overlapping BED\-defined regions to variants in a VCF file. Used primarily for providing a gene\/exon context to variants \(see\:bedtarget\).

   :homepage: https://github.com/BioTools-Tek/genepender
   :license: GPLv3
   :recipe: /`genepender <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genepender>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genepender/meta.yaml>`_

   


.. conda:package:: genepender

   |downloads_genepender| |docker_genepender|

   :versions: v2.6

   :depends: :conda:package:`libgcc`  :conda:package:`qt` 4.8.7 

   :required~by: |required_by_genepender|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genepender

   and update with::

      conda update genepender

   or use the docker container::

      docker pull quay.io/repository/biocontainers/genepender


.. |required_by_genepender| conda:required_by:: genepender
.. |downloads_genepender| image:: https://img.shields.io/conda/dn/bioconda/genepender.svg?style=flat
   :alt:   (downloads)
.. |docker_genepender| image:: https://quay.io/repository/biocontainers/genepender/status
   :target: https://quay.io/repository/biocontainers/genepender







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genepender/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genepender/README.html

