.. title:: Package Recipe 'hts-nim-tools'
.. highlight: bash


hts-nim-tools
=============

.. conda:recipe:: hts-nim-tools
   :replaces_section_title:

   useful command\-line tools written to show\-case hts\-nim

   :homepage: https://github.com/brentp/hts-nim-tools
   :license: MIT
   :recipe: /`hts-nim-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hts-nim-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hts-nim-tools/meta.yaml>`_

   


.. conda:package:: hts-nim-tools

   |downloads_hts-nim-tools| |docker_hts-nim-tools|

   :versions: 0.1.5

   :depends: :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`pcre`  

   :required~by: |required_by_hts-nim-tools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hts-nim-tools

   and update with::

      conda update hts-nim-tools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hts-nim-tools


.. |required_by_hts-nim-tools| conda:required_by:: hts-nim-tools
.. |downloads_hts-nim-tools| image:: https://img.shields.io/conda/dn/bioconda/hts-nim-tools.svg?style=flat
   :alt:   (downloads)
.. |docker_hts-nim-tools| image:: https://quay.io/repository/biocontainers/hts-nim-tools/status
   :target: https://quay.io/repository/biocontainers/hts-nim-tools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hts-nim-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hts-nim-tools/README.html

