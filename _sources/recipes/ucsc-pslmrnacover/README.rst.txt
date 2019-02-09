.. title:: Package Recipe 'ucsc-pslmrnacover'
.. highlight: bash


ucsc-pslmrnacover
=================

.. conda:recipe:: ucsc-pslmrnacover
   :replaces_section_title:

   Make histogram of coverage percentage of mRNA in psl.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslmrnacover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslmrnacover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslmrnacover/meta.yaml>`_

   


.. conda:package:: ucsc-pslmrnacover

   |downloads_ucsc-pslmrnacover| |docker_ucsc-pslmrnacover|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslmrnacover|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslmrnacover

   and update with::

      conda update ucsc-pslmrnacover

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslmrnacover


.. |required_by_ucsc-pslmrnacover| conda:required_by:: ucsc-pslmrnacover
.. |downloads_ucsc-pslmrnacover| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslmrnacover.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslmrnacover| image:: https://quay.io/repository/biocontainers/ucsc-pslmrnacover/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslmrnacover







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslmrnacover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslmrnacover/README.html

