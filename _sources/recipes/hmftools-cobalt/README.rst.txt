.. title:: Package Recipe 'hmftools-cobalt'
.. highlight: bash


hmftools-cobalt
===============

.. conda:recipe:: hmftools-cobalt
   :replaces_section_title:

   Count bam lines is designed to count the number of read starts within each 1000 base window of a tumor and reference bam.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/count-bam-lines
   :license: MIT / MIT
   :recipe: /`hmftools-cobalt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-cobalt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-cobalt/meta.yaml>`_

   


.. conda:package:: hmftools-cobalt

   |downloads_hmftools-cobalt| |docker_hmftools-cobalt|

   :versions: 1.5

   :depends: :conda:package:`openjdk` >=8 

   :required~by: |required_by_hmftools-cobalt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-cobalt

   and update with::

      conda update hmftools-cobalt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hmftools-cobalt


.. |required_by_hmftools-cobalt| conda:required_by:: hmftools-cobalt
.. |downloads_hmftools-cobalt| image:: https://img.shields.io/conda/dn/bioconda/hmftools-cobalt.svg?style=flat
   :alt:   (downloads)
.. |docker_hmftools-cobalt| image:: https://quay.io/repository/biocontainers/hmftools-cobalt/status
   :target: https://quay.io/repository/biocontainers/hmftools-cobalt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-cobalt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-cobalt/README.html

