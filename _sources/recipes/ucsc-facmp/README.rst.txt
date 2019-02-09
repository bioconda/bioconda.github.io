.. title:: Package Recipe 'ucsc-facmp'
.. highlight: bash


ucsc-facmp
==========

.. conda:recipe:: ucsc-facmp
   :replaces_section_title:

   Compare two .fa files

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-facmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-facmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-facmp/meta.yaml>`_

   


.. conda:package:: ucsc-facmp

   |downloads_ucsc-facmp| |docker_ucsc-facmp|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-facmp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-facmp

   and update with::

      conda update ucsc-facmp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-facmp


.. |required_by_ucsc-facmp| conda:required_by:: ucsc-facmp
.. |downloads_ucsc-facmp| image:: https://img.shields.io/conda/dn/bioconda/ucsc-facmp.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-facmp| image:: https://quay.io/repository/biocontainers/ucsc-facmp/status
   :target: https://quay.io/repository/biocontainers/ucsc-facmp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-facmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-facmp/README.html

