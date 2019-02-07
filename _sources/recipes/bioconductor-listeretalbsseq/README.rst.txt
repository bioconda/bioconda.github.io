.. title:: Package Recipe 'bioconductor-listeretalbsseq'
.. highlight: bash


bioconductor-listeretalbsseq
============================

.. conda:recipe:: bioconductor-listeretalbsseq
   :replaces_section_title:

   Base resolution bisulfite sequencing data of Human DNA methylomes

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/ListerEtAlBSseq.html
   :license: Artistic 2.0
   :recipe: /`bioconductor-listeretalbsseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-listeretalbsseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-listeretalbsseq/meta.yaml>`_

   


.. conda:package:: bioconductor-listeretalbsseq

   |downloads_bioconductor-listeretalbsseq| |docker_bioconductor-listeretalbsseq|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-methylpipe` >=1.16.0,<1.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-listeretalbsseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-listeretalbsseq

   and update with::

      conda update bioconductor-listeretalbsseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-listeretalbsseq


.. |required_by_bioconductor-listeretalbsseq| conda:required_by:: bioconductor-listeretalbsseq
.. |downloads_bioconductor-listeretalbsseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-listeretalbsseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-listeretalbsseq| image:: https://quay.io/repository/biocontainers/bioconductor-listeretalbsseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-listeretalbsseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-listeretalbsseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-listeretalbsseq/README.html

