.. title:: Package Recipe 'bioconductor-gqtlbase'
.. highlight: bash


bioconductor-gqtlbase
=====================

.. conda:recipe:: bioconductor-gqtlbase
   :replaces_section_title:

   Infrastructure for eQTL\, mQTL and similar studies.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/gQTLBase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gqtlbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gqtlbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gqtlbase/meta.yaml>`_

   


.. conda:package:: bioconductor-gqtlbase

   |downloads_bioconductor-gqtlbase| |docker_bioconductor-gqtlbase|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomicfiles` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-batchjobs`  :conda:package:`r-bbmisc`  :conda:package:`r-bit`  :conda:package:`r-doparallel`  :conda:package:`r-ff`  :conda:package:`r-ffbase`  :conda:package:`r-foreach`  

   :required~by: |required_by_bioconductor-gqtlbase|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gqtlbase

   and update with::

      conda update bioconductor-gqtlbase

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gqtlbase


.. |required_by_bioconductor-gqtlbase| conda:required_by:: bioconductor-gqtlbase
.. |downloads_bioconductor-gqtlbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gqtlbase.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gqtlbase| image:: https://quay.io/repository/biocontainers/bioconductor-gqtlbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gqtlbase







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gqtlbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gqtlbase/README.html

