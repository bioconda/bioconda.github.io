:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ngsplotdb-hg19'
.. highlight: bash

r-ngsplotdb-hg19
================

.. conda:recipe:: r-ngsplot-hg19
   :replaces_section_title:

   HG19 genome database for NGSplot

   :homepage: https://github.com/shenlab-sinai/ngsplot
   :license: GPL-2.0
   :recipe: /`r-ngsplot-hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ngsplot-hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ngsplot-hg19/meta.yaml>`_

   


.. conda:package:: r-ngsplotdb-hg19

   |downloads_r-ngsplotdb-hg19| |docker_r-ngsplotdb-hg19|

   :versions: 3.00-5, 3.00-2, 3.00-1
   
   :depends python: <3.0a0
   :depends r-base: 
   :depends r-ngsplot: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ngsplotdb-hg19

   and update with::

      conda update r-ngsplotdb-hg19

   or use the docker container::

      docker pull quay.io/biocontainers/r-ngsplotdb-hg19:<tag>

   (see `r-ngsplotdb-hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ngsplotdb-hg19| image:: https://img.shields.io/conda/dn/bioconda/r-ngsplotdb-hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ngsplotdb-hg19
   :alt:   (downloads)
.. |docker_r-ngsplotdb-hg19| image:: https://quay.io/repository/biocontainers/r-ngsplotdb-hg19/status
   :target: https://quay.io/repository/biocontainers/r-ngsplotdb-hg19
.. _`r-ngsplotdb-hg19/tags`: https://quay.io/repository/biocontainers/r-ngsplotdb-hg19?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ngsplotdb-hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ngsplotdb-hg19/README.html