.. title:: Package Recipe 'bioconductor-yrimulti'
.. highlight: bash


bioconductor-yrimulti
=====================

.. conda:recipe:: bioconductor-yrimulti
   :replaces_section_title:

   expression\, methylation\, DHS for YRI

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/yriMulti.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-yrimulti <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yrimulti>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yrimulti/meta.yaml>`_

   


.. conda:package:: bioconductor-yrimulti

   |downloads_bioconductor-yrimulti| |docker_bioconductor-yrimulti|

   :versions: 0.12.0

   :depends: :conda:package:`bioconductor-dsqtl` >=0.20.0,<0.21.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfiles` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-geuvpack` >=1.14.0,<1.15.0 :conda:package:`bioconductor-gqtlbase` >=1.14.0,<1.15.0 :conda:package:`bioconductor-homo.sapiens` >=1.3.0,<1.4.0 :conda:package:`bioconductor-multiassayexperiment` >=1.8.0,<1.9.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-yrimulti|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yrimulti

   and update with::

      conda update bioconductor-yrimulti

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-yrimulti


.. |required_by_bioconductor-yrimulti| conda:required_by:: bioconductor-yrimulti
.. |downloads_bioconductor-yrimulti| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yrimulti.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-yrimulti| image:: https://quay.io/repository/biocontainers/bioconductor-yrimulti/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yrimulti







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yrimulti/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yrimulti/README.html

