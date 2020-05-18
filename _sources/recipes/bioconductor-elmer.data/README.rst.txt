:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-elmer.data'
.. highlight: bash

bioconductor-elmer.data
=======================

.. conda:recipe:: bioconductor-elmer.data
   :replaces_section_title:

   Data for the ELMER package

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/ELMER.data.html
   :license: GPL-3
   :recipe: /`bioconductor-elmer.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elmer.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elmer.data/meta.yaml>`_

   Supporting data for the ELMER package. It includes\: \- elmer.data.example.promoter\: mae.promoter \- elmer.data.example\: data \- EPIC.hg38.manifest \- EPIC.hg19.manifest \- hm450.hg38.manifest \- hm450.hg19.manifest \- hocomoco.table \- human.TF \- LUSC\_meth\_refined\: Meth \- LUSC\_RNA\_refined\: GeneExp \- Probes.motif.hg19.450K \- Probes.motif.hg19.EPIC \- Probes.motif.hg38.450K \- Probes.motif.hg38.EPIC \- TF.family \- TF.subfamily \- Human\_genes\_\_GRCh37\_p13 \- Human\_genes\_\_GRCh38\_p12 \- Human\_genes\_\_GRCh37\_p13\_\_tss \- Human\_genes\_\_GRCh38\_p12\_\_tss


.. conda:package:: bioconductor-elmer.data

   |downloads_bioconductor-elmer.data| |docker_bioconductor-elmer.data|

   :versions: 2.12.0-0, 2.10.0-0, 2.8.0-1, 2.6.0-0, 2.4.2-0
   
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-elmer.data

   and update with::

      conda update bioconductor-elmer.data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-elmer.data:<tag>

   (see `bioconductor-elmer.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-elmer.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-elmer.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-elmer.data
   :alt:   (downloads)
.. |docker_bioconductor-elmer.data| image:: https://quay.io/repository/biocontainers/bioconductor-elmer.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-elmer.data
.. _`bioconductor-elmer.data/tags`: https://quay.io/repository/biocontainers/bioconductor-elmer.data?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-elmer.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-elmer.data/README.html