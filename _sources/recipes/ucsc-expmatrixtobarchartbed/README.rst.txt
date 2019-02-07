.. title:: Package Recipe 'ucsc-expmatrixtobarchartbed'
.. highlight: bash


ucsc-expmatrixtobarchartbed
===========================

.. conda:recipe:: ucsc-expmatrixtobarchartbed
   :replaces_section_title:

    Generate a barChart bed6\+5 file from a matrix\, meta data\, and coordinates. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-expmatrixtobarchartbed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-expmatrixtobarchartbed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-expmatrixtobarchartbed/meta.yaml>`_

   


.. conda:package:: ucsc-expmatrixtobarchartbed

   |downloads_ucsc-expmatrixtobarchartbed| |docker_ucsc-expmatrixtobarchartbed|

   :versions: 366, 357

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`python`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-expmatrixtobarchartbed|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-expmatrixtobarchartbed

   and update with::

      conda update ucsc-expmatrixtobarchartbed

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-expmatrixtobarchartbed


.. |required_by_ucsc-expmatrixtobarchartbed| conda:required_by:: ucsc-expmatrixtobarchartbed
.. |downloads_ucsc-expmatrixtobarchartbed| image:: https://img.shields.io/conda/dn/bioconda/ucsc-expmatrixtobarchartbed.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-expmatrixtobarchartbed| image:: https://quay.io/repository/biocontainers/ucsc-expmatrixtobarchartbed/status
   :target: https://quay.io/repository/biocontainers/ucsc-expmatrixtobarchartbed







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-expmatrixtobarchartbed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-expmatrixtobarchartbed/README.html

