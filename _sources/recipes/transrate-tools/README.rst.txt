.. title:: Package Recipe 'transrate-tools'
.. highlight: bash


transrate-tools
===============

.. conda:recipe:: transrate-tools
   :replaces_section_title:

   Command\-line tools used by transrate for processing bam files.

   :homepage: https://github.com/blahah/transrate-tools
   :license: MIT
   :recipe: /`transrate-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transrate-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transrate-tools/meta.yaml>`_

   


.. conda:package:: transrate-tools

   |downloads_transrate-tools| |docker_transrate-tools|

   :versions: 1.0.0

   :depends: :conda:package:`bamtools`  :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_transrate-tools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transrate-tools

   and update with::

      conda update transrate-tools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/transrate-tools


.. |required_by_transrate-tools| conda:required_by:: transrate-tools
.. |downloads_transrate-tools| image:: https://img.shields.io/conda/dn/bioconda/transrate-tools.svg?style=flat
   :alt:   (downloads)
.. |docker_transrate-tools| image:: https://quay.io/repository/biocontainers/transrate-tools/status
   :target: https://quay.io/repository/biocontainers/transrate-tools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transrate-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transrate-tools/README.html

