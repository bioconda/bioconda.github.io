.. title:: Package Recipe 'ucsc-pslpostarget'
.. highlight: bash


ucsc-pslpostarget
=================

.. conda:recipe:: ucsc-pslpostarget
   :replaces_section_title:

   flip psl strands so target is positive and implicit

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslpostarget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslpostarget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslpostarget/meta.yaml>`_

   


.. conda:package:: ucsc-pslpostarget

   |downloads_ucsc-pslpostarget| |docker_ucsc-pslpostarget|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-pslpostarget|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslpostarget

   and update with::

      conda update ucsc-pslpostarget

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslpostarget


.. |required_by_ucsc-pslpostarget| conda:required_by:: ucsc-pslpostarget
.. |downloads_ucsc-pslpostarget| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslpostarget.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslpostarget| image:: https://quay.io/repository/biocontainers/ucsc-pslpostarget/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslpostarget







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslpostarget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslpostarget/README.html

