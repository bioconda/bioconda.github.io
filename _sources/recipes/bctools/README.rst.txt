.. title:: Package Recipe 'bctools'
.. highlight: bash


bctools
=======

.. conda:recipe:: bctools
   :replaces_section_title:

   Tools for handling barcodes in NGS data.

   :homepage: https://github.com/dmaticzka/bctools
   :license: Apache 2.0
   :recipe: /`bctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bctools/meta.yaml>`_

   


.. conda:package:: bctools

   |downloads_bctools| |docker_bctools|

   :versions: 0.2.2, 0.2.1

   :depends: :conda:package:`bedtools`  :conda:package:`biopython`  :conda:package:`datamash`  :conda:package:`future`  :conda:package:`perl`  :conda:package:`pybedtools`  

   :required~by: |required_by_bctools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bctools

   and update with::

      conda update bctools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bctools


.. |required_by_bctools| conda:required_by:: bctools
.. |downloads_bctools| image:: https://img.shields.io/conda/dn/bioconda/bctools.svg?style=flat
   :alt:   (downloads)
.. |docker_bctools| image:: https://quay.io/repository/biocontainers/bctools/status
   :target: https://quay.io/repository/biocontainers/bctools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bctools/README.html

