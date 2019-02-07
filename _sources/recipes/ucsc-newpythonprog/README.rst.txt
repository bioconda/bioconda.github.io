.. title:: Package Recipe 'ucsc-newpythonprog'
.. highlight: bash


ucsc-newpythonprog
==================

.. conda:recipe:: ucsc-newpythonprog
   :replaces_section_title:

   Make a skeleton for a new python program

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-newpythonprog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-newpythonprog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-newpythonprog/meta.yaml>`_

   


.. conda:package:: ucsc-newpythonprog

   |downloads_ucsc-newpythonprog| |docker_ucsc-newpythonprog|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-newpythonprog|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-newpythonprog

   and update with::

      conda update ucsc-newpythonprog

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-newpythonprog


.. |required_by_ucsc-newpythonprog| conda:required_by:: ucsc-newpythonprog
.. |downloads_ucsc-newpythonprog| image:: https://img.shields.io/conda/dn/bioconda/ucsc-newpythonprog.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-newpythonprog| image:: https://quay.io/repository/biocontainers/ucsc-newpythonprog/status
   :target: https://quay.io/repository/biocontainers/ucsc-newpythonprog







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-newpythonprog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-newpythonprog/README.html

