:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gvcf2bed'
.. highlight: bash

gvcf2bed
========

.. conda:recipe:: gvcf2bed
   :replaces_section_title:

   Convert gVCF into BED

   :homepage: https://github.com/sndrtj/gvcf2bed
   :license: MIT / MIT
   :recipe: /`gvcf2bed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcf2bed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gvcf2bed/meta.yaml>`_

   


.. conda:package:: gvcf2bed

   |downloads_gvcf2bed| |docker_gvcf2bed|

   :versions: 0.3.1-0
   
   :depends cyvcf2: >=0.7.4
   :depends python: >=3
   :depends pyvcf: 0.6.8
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gvcf2bed

   and update with::

      conda update gvcf2bed

   or use the docker container::

      docker pull quay.io/biocontainers/gvcf2bed:<tag>

   (see `gvcf2bed/tags`_ for valid values for ``<tag>``)


.. |downloads_gvcf2bed| image:: https://img.shields.io/conda/dn/bioconda/gvcf2bed.svg?style=flat
   :target: https://anaconda.org/bioconda/gvcf2bed
   :alt:   (downloads)
.. |docker_gvcf2bed| image:: https://quay.io/repository/biocontainers/gvcf2bed/status
   :target: https://quay.io/repository/biocontainers/gvcf2bed
.. _`gvcf2bed/tags`: https://quay.io/repository/biocontainers/gvcf2bed?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gvcf2bed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gvcf2bed/README.html