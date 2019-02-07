.. title:: Package Recipe 'metaseq-all'
.. highlight: bash


metaseq-all
===========

.. conda:recipe:: metaseq-all
   :replaces_section_title:

   Meta\-package for metaseq including bedtools and UCSC tools

   :homepage: 
   :license: The license for this meta-package is MIT; individual tools vary
   :recipe: /`metaseq-all <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq-all>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq-all/meta.yaml>`_

   


.. conda:package:: metaseq-all

   |downloads_metaseq-all| |docker_metaseq-all|

   :versions: 0.5.6

   :depends: :conda:package:`bedtools`  :conda:package:`metaseq`  :conda:package:`samtools`  :conda:package:`ucsc-bedgraphtobigwig`  :conda:package:`ucsc-bedtobigbed`  :conda:package:`ucsc-bigbedtobed`  :conda:package:`ucsc-bigwigsummary`  

   :required~by: |required_by_metaseq-all|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaseq-all

   and update with::

      conda update metaseq-all

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metaseq-all


.. |required_by_metaseq-all| conda:required_by:: metaseq-all
.. |downloads_metaseq-all| image:: https://img.shields.io/conda/dn/bioconda/metaseq-all.svg?style=flat
   :alt:   (downloads)
.. |docker_metaseq-all| image:: https://quay.io/repository/biocontainers/metaseq-all/status
   :target: https://quay.io/repository/biocontainers/metaseq-all







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaseq-all/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaseq-all/README.html

