.. title:: Package Recipe 'ucsc-bedcommonregions'
.. highlight: bash


ucsc-bedcommonregions
=====================

.. conda:recipe:: ucsc-bedcommonregions
   :replaces_section_title:

   Create a bed file \(just bed3\) that contains the regions common to all inputs.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedcommonregions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedcommonregions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedcommonregions/meta.yaml>`_

   


.. conda:package:: ucsc-bedcommonregions

   |downloads_ucsc-bedcommonregions| |docker_ucsc-bedcommonregions|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bedcommonregions|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedcommonregions

   and update with::

      conda update ucsc-bedcommonregions

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bedcommonregions


.. |required_by_ucsc-bedcommonregions| conda:required_by:: ucsc-bedcommonregions
.. |downloads_ucsc-bedcommonregions| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedcommonregions.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedcommonregions| image:: https://quay.io/repository/biocontainers/ucsc-bedcommonregions/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedcommonregions







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedcommonregions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedcommonregions/README.html

