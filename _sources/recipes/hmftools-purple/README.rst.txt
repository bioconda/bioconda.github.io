:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-purple'
.. highlight: bash

hmftools-purple
===============

.. conda:recipe:: hmftools-purple
   :replaces_section_title:

   Purity\/ploidy estimator. Leverages the read depth and tumor BAF to estimate the purity of a sample and generate a copy number profile

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/purity-ploidy-estimator
   :license: MIT / MIT
   :recipe: /`hmftools-purple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-purple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-purple/meta.yaml>`_

   


.. conda:package:: hmftools-purple

   |downloads_hmftools-purple| |docker_hmftools-purple|

   :versions: 2.38-0, 2.37-0, 2.36-0, 2.35-0, 2.34-0, 2.32-0, 2.31-0, 2.25-1, 2.17-1, 2.16-1, 2.16-0, 2.15-0
   
   :depends openjdk: >=8
   :depends xorg-libxtst: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmftools-purple

   and update with::

      conda update hmftools-purple

   or use the docker container::

      docker pull quay.io/biocontainers/hmftools-purple:<tag>

   (see `hmftools-purple/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-purple| image:: https://img.shields.io/conda/dn/bioconda/hmftools-purple.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-purple
   :alt:   (downloads)
.. |docker_hmftools-purple| image:: https://quay.io/repository/biocontainers/hmftools-purple/status
   :target: https://quay.io/repository/biocontainers/hmftools-purple
.. _`hmftools-purple/tags`: https://quay.io/repository/biocontainers/hmftools-purple?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-purple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-purple/README.html