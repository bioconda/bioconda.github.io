.. title:: Package Recipe 'ucsc-genepredtobiggenepred'
.. highlight: bash


ucsc-genepredtobiggenepred
==========================

.. conda:recipe:: ucsc-genepredtobiggenepred
   :replaces_section_title:

   converts genePred or genePredExt to bigGenePred input \(bed format with extra fields\)

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-genepredtobiggenepred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtobiggenepred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-genepredtobiggenepred/meta.yaml>`_

   


.. conda:package:: ucsc-genepredtobiggenepred

   |downloads_ucsc-genepredtobiggenepred| |docker_ucsc-genepredtobiggenepred|

   :versions: 366, 357, 332

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-genepredtobiggenepred|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-genepredtobiggenepred

   and update with::

      conda update ucsc-genepredtobiggenepred

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-genepredtobiggenepred


.. |required_by_ucsc-genepredtobiggenepred| conda:required_by:: ucsc-genepredtobiggenepred
.. |downloads_ucsc-genepredtobiggenepred| image:: https://img.shields.io/conda/dn/bioconda/ucsc-genepredtobiggenepred.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-genepredtobiggenepred| image:: https://quay.io/repository/biocontainers/ucsc-genepredtobiggenepred/status
   :target: https://quay.io/repository/biocontainers/ucsc-genepredtobiggenepred







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-genepredtobiggenepred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-genepredtobiggenepred/README.html

