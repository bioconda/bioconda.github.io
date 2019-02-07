.. title:: Package Recipe 'uropa'
.. highlight: bash


uropa
=====

.. conda:recipe:: uropa
   :replaces_section_title:

   UROPA \(Universal RObust Peak Annotator\) is a command line based tool\, intended for genomic region annotation from e.g. peak calling.
   It detects the most appropriate annotation by taking parameters such as feature type\, anchor\, direction and strand into account.
   Furthermore\, it allows filtering for GTF attribute values\, e.g. protein\_coding.


   :homepage: https://github.molgen.mpg.de/loosolab/UROPA
   :documentation: http://uropa-manual.readthedocs.io
   
   :license: MIT
   :recipe: /`uropa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uropa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uropa/meta.yaml>`_

   


.. conda:package:: uropa

   |downloads_uropa| |docker_uropa|

   :versions: 2.0.3, 2.0.2a0, 2.0.0a0, 1.2.1

   :depends: :conda:package:`bioconductor-graph`  :conda:package:`bioconductor-rbgl`  :conda:package:`numpy`  :conda:package:`pysam`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`r-base`  :conda:package:`r-getopt`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-gridextra`  :conda:package:`r-jsonlite`  :conda:package:`r-tidyr`  :conda:package:`r-upsetr`  :conda:package:`r-venndiagram`  

   :required~by: |required_by_uropa|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install uropa

   and update with::

      conda update uropa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/uropa


.. |required_by_uropa| conda:required_by:: uropa
.. |downloads_uropa| image:: https://img.shields.io/conda/dn/bioconda/uropa.svg?style=flat
   :alt:   (downloads)
.. |docker_uropa| image:: https://quay.io/repository/biocontainers/uropa/status
   :target: https://quay.io/repository/biocontainers/uropa







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uropa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uropa/README.html

