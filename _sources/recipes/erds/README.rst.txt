.. title:: Package Recipe 'erds'
.. highlight: bash


erds
====

.. conda:recipe:: erds
   :replaces_section_title:

   Inferring copy number variants in high\-coverage human genomes with next\-generation sequencing data.

   :homepage: http://www.utahresearch.org/mingfuzhu/erds/
   :license: Free to academia and non-profit organizations
   :recipe: /`erds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/erds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/erds/meta.yaml>`_

   


.. conda:package:: erds

   |downloads_erds| |docker_erds|

   :versions: 1.1

   :depends: :conda:package:`libgcc`  :conda:package:`perl` 5.22.0* :conda:package:`samtools` ==0.1.19 

   :required~by: |required_by_erds|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install erds

   and update with::

      conda update erds

   or use the docker container::

      docker pull quay.io/repository/biocontainers/erds


.. |required_by_erds| conda:required_by:: erds
.. |downloads_erds| image:: https://img.shields.io/conda/dn/bioconda/erds.svg?style=flat
   :alt:   (downloads)
.. |docker_erds| image:: https://quay.io/repository/biocontainers/erds/status
   :target: https://quay.io/repository/biocontainers/erds







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/erds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/erds/README.html

