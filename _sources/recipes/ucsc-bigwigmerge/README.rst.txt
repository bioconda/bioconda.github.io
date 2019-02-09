.. title:: Package Recipe 'ucsc-bigwigmerge'
.. highlight: bash


ucsc-bigwigmerge
================

.. conda:recipe:: ucsc-bigwigmerge
   :replaces_section_title:

   Merge together multiple bigWigs into a single output bedGraph.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigwigmerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigmerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigmerge/meta.yaml>`_

   


.. conda:package:: ucsc-bigwigmerge

   |downloads_ucsc-bigwigmerge| |docker_ucsc-bigwigmerge|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bigwigmerge|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigwigmerge

   and update with::

      conda update ucsc-bigwigmerge

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bigwigmerge


.. |required_by_ucsc-bigwigmerge| conda:required_by:: ucsc-bigwigmerge
.. |downloads_ucsc-bigwigmerge| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigwigmerge.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigwigmerge| image:: https://quay.io/repository/biocontainers/ucsc-bigwigmerge/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigwigmerge







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigwigmerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigwigmerge/README.html

