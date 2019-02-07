.. title:: Package Recipe 'hmftools-purple'
.. highlight: bash


hmftools-purple
===============

.. conda:recipe:: hmftools-purple
   :replaces_section_title:

   PURPLE is a purity ploidy estimator. It leverages the read depth and tumor BAF to estimate the purity of a sample and generate a copy number profile.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/purity-ploidy-estimator
   :license: MIT / MIT
   :recipe: /`hmftools-purple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-purple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-purple/meta.yaml>`_

   


.. conda:package:: hmftools-purple

   |downloads_hmftools-purple| |docker_hmftools-purple|

   :versions: 2.17, 2.16, 2.15

   :depends: :conda:package:`openjdk` >=8 :conda:package:`xorg-libxtst`  :conda:package:`zlib`  

   :required~by: |required_by_hmftools-purple|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-purple

   and update with::

      conda update hmftools-purple

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hmftools-purple


.. |required_by_hmftools-purple| conda:required_by:: hmftools-purple
.. |downloads_hmftools-purple| image:: https://img.shields.io/conda/dn/bioconda/hmftools-purple.svg?style=flat
   :alt:   (downloads)
.. |docker_hmftools-purple| image:: https://quay.io/repository/biocontainers/hmftools-purple/status
   :target: https://quay.io/repository/biocontainers/hmftools-purple







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-purple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-purple/README.html

