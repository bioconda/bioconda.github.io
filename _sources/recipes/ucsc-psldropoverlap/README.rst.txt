.. title:: Package Recipe 'ucsc-psldropoverlap'
.. highlight: bash


ucsc-psldropoverlap
===================

.. conda:recipe:: ucsc-psldropoverlap
   :replaces_section_title:

   deletes all overlapping self alignments. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-psldropoverlap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-psldropoverlap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-psldropoverlap/meta.yaml>`_

   


.. conda:package:: ucsc-psldropoverlap

   |downloads_ucsc-psldropoverlap| |docker_ucsc-psldropoverlap|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-psldropoverlap|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-psldropoverlap

   and update with::

      conda update ucsc-psldropoverlap

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-psldropoverlap


.. |required_by_ucsc-psldropoverlap| conda:required_by:: ucsc-psldropoverlap
.. |downloads_ucsc-psldropoverlap| image:: https://img.shields.io/conda/dn/bioconda/ucsc-psldropoverlap.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-psldropoverlap| image:: https://quay.io/repository/biocontainers/ucsc-psldropoverlap/status
   :target: https://quay.io/repository/biocontainers/ucsc-psldropoverlap







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-psldropoverlap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-psldropoverlap/README.html

