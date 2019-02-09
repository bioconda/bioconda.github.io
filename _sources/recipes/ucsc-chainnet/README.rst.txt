.. title:: Package Recipe 'ucsc-chainnet'
.. highlight: bash


ucsc-chainnet
=============

.. conda:recipe:: ucsc-chainnet
   :replaces_section_title:

   Make alignment nets out of chains

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chainnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainnet/meta.yaml>`_

   


.. conda:package:: ucsc-chainnet

   |downloads_ucsc-chainnet| |docker_ucsc-chainnet|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-chainnet|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chainnet

   and update with::

      conda update ucsc-chainnet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-chainnet


.. |required_by_ucsc-chainnet| conda:required_by:: ucsc-chainnet
.. |downloads_ucsc-chainnet| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chainnet.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-chainnet| image:: https://quay.io/repository/biocontainers/ucsc-chainnet/status
   :target: https://quay.io/repository/biocontainers/ucsc-chainnet







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chainnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chainnet/README.html

