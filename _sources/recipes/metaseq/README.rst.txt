.. title:: Package Recipe 'metaseq'
.. highlight: bash


metaseq
=======

.. conda:recipe:: metaseq
   :replaces_section_title:

   Framework for integrated analysis and plotting of ChIP\/RIP\/RNA\/\*\-seq data.

   :homepage: http://github.com/daler/metaseq
   :license: MIT / MIT
   :recipe: /`metaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaseq/meta.yaml>`_

   


.. conda:package:: metaseq

   |downloads_metaseq| |docker_metaseq|

   :versions: 0.5.6

   :depends: :conda:package:`biopython`  :conda:package:`bx-python` >=0.7.1 :conda:package:`cython`  :conda:package:`fisher`  :conda:package:`gffutils` >=0.8.2 :conda:package:`matplotlib` >=1.3.1 :conda:package:`numpy` >=1.8.0 :conda:package:`pandas` >=0.13.1 :conda:package:`pybedtools` >=0.6.6 :conda:package:`pysam` >=0.7 :conda:package:`python` 2.7* :conda:package:`pyyaml` >=3.10 :conda:package:`scikit-learn`  :conda:package:`scipy` >=0.10.1 

   :required~by: |required_by_metaseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaseq

   and update with::

      conda update metaseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metaseq


.. |required_by_metaseq| conda:required_by:: metaseq
.. |downloads_metaseq| image:: https://img.shields.io/conda/dn/bioconda/metaseq.svg?style=flat
   :alt:   (downloads)
.. |docker_metaseq| image:: https://quay.io/repository/biocontainers/metaseq/status
   :target: https://quay.io/repository/biocontainers/metaseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaseq/README.html

