.. title:: Package Recipe 'ucsc-pslhisto'
.. highlight: bash


ucsc-pslhisto
=============

.. conda:recipe:: ucsc-pslhisto
   :replaces_section_title:

    Collect counts on PSL alignments for making histograms. These then be analyzed with R\, textHistogram\, etc. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslhisto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslhisto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslhisto/meta.yaml>`_

   


.. conda:package:: ucsc-pslhisto

   |downloads_ucsc-pslhisto| |docker_ucsc-pslhisto|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslhisto|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslhisto

   and update with::

      conda update ucsc-pslhisto

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslhisto


.. |required_by_ucsc-pslhisto| conda:required_by:: ucsc-pslhisto
.. |downloads_ucsc-pslhisto| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslhisto.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslhisto| image:: https://quay.io/repository/biocontainers/ucsc-pslhisto/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslhisto







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslhisto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslhisto/README.html

