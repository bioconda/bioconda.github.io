.. title:: Package Recipe 'ucsc-chainprenet'
.. highlight: bash


ucsc-chainprenet
================

.. conda:recipe:: ucsc-chainprenet
   :replaces_section_title:

   Remove chains that don\'t have a chance of being netted

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chainprenet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainprenet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainprenet/meta.yaml>`_

   


.. conda:package:: ucsc-chainprenet

   |downloads_ucsc-chainprenet| |docker_ucsc-chainprenet|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-chainprenet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chainprenet

   and update with::

      conda update ucsc-chainprenet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-chainprenet


.. |required_by_ucsc-chainprenet| conda:required_by:: ucsc-chainprenet
.. |downloads_ucsc-chainprenet| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chainprenet.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chainprenet| image:: https://quay.io/repository/biocontainers/ucsc-chainprenet/status
   :target: https://quay.io/repository/biocontainers/ucsc-chainprenet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chainprenet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chainprenet/README.html

