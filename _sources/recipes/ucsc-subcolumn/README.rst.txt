:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-subcolumn'
.. highlight: bash

ucsc-subcolumn
==============

.. conda:recipe:: ucsc-subcolumn
   :replaces_section_title:

   Substitute one column in a tab\-separated file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-subcolumn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-subcolumn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-subcolumn/meta.yaml>`_

   


.. conda:package:: ucsc-subcolumn

   |downloads_ucsc-subcolumn| |docker_ucsc-subcolumn|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-subcolumn

   and update with::

      conda update ucsc-subcolumn

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-subcolumn:<tag>

   (see `ucsc-subcolumn/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-subcolumn| image:: https://img.shields.io/conda/dn/bioconda/ucsc-subcolumn.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-subcolumn| image:: https://quay.io/repository/biocontainers/ucsc-subcolumn/status
   :target: https://quay.io/repository/biocontainers/ucsc-subcolumn
.. _`ucsc-subcolumn/tags`: https://quay.io/repository/biocontainers/ucsc-subcolumn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-subcolumn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-subcolumn/README.html