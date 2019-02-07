.. title:: Package Recipe 'bioconductor-eisa'
.. highlight: bash


bioconductor-eisa
=================

.. conda:recipe:: bioconductor-eisa
   :replaces_section_title:

   The Iterative Signature Algorithm \(ISA\) is a biclustering method\; it finds correlated blocks \(transcription modules\) in gene expression \(or other tabular\) data. The ISA is capable of finding overlapping modules and it is resilient to noise. This package provides a convenient interface to the ISA\, using standard BioConductor data structures\; and also contains various visualization tools that can be used with other biclustering algorithms.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/eisa.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-eisa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eisa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eisa/meta.yaml>`_

   


.. conda:package:: bioconductor-eisa

   |downloads_bioconductor-eisa| |docker_bioconductor-eisa|

   :versions: 1.34.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-category` >=2.48.0,<2.49.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-isa2`  

   :required~by: |required_by_bioconductor-eisa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-eisa

   and update with::

      conda update bioconductor-eisa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-eisa


.. |required_by_bioconductor-eisa| conda:required_by:: bioconductor-eisa
.. |downloads_bioconductor-eisa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eisa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-eisa| image:: https://quay.io/repository/biocontainers/bioconductor-eisa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eisa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eisa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eisa/README.html

