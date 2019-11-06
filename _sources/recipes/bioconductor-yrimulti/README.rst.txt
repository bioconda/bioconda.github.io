:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yrimulti'
.. highlight: bash

bioconductor-yrimulti
=====================

.. conda:recipe:: bioconductor-yrimulti
   :replaces_section_title:

   expression\, methylation\, DHS for YRI

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/yriMulti.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-yrimulti <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yrimulti>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yrimulti/meta.yaml>`_

   


.. conda:package:: bioconductor-yrimulti

   |downloads_bioconductor-yrimulti| |docker_bioconductor-yrimulti|

   :versions: 0.15.0-0, 0.14.0-1, 0.12.0-0
   
   :depends bioconductor-dsqtl: >=0.23.0,<0.24.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicfiles: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-geuvpack: >=1.17.0,<1.18.0
   :depends bioconductor-gqtlbase: >=1.18.0,<1.19.0
   :depends bioconductor-homo.sapiens: >=1.3.0,<1.4.0
   :depends bioconductor-multiassayexperiment: >=1.12.0,<1.13.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends bioconductor-variantannotation: >=1.32.0,<1.33.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yrimulti

   and update with::

      conda update bioconductor-yrimulti

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yrimulti:<tag>

   (see `bioconductor-yrimulti/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yrimulti| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yrimulti.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yrimulti
   :alt:   (downloads)
.. |docker_bioconductor-yrimulti| image:: https://quay.io/repository/biocontainers/bioconductor-yrimulti/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yrimulti
.. _`bioconductor-yrimulti/tags`: https://quay.io/repository/biocontainers/bioconductor-yrimulti?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yrimulti/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yrimulti/README.html