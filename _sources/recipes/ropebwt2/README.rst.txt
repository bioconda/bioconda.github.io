.. title:: Package Recipe 'ropebwt2'
.. highlight: bash


ropebwt2
========

.. conda:recipe:: ropebwt2
   :replaces_section_title:

   Incremental construction of FM\-index for DNA sequences

   :homepage: https://github.com/lh3/ropebwt2
   :license: MIT
   :recipe: /`ropebwt2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ropebwt2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ropebwt2/meta.yaml>`_

   


.. conda:package:: ropebwt2

   |downloads_ropebwt2| |docker_ropebwt2|

   :versions: r187

   :depends: :conda:package:`llvm`  :conda:package:`zlib`  

   :required~by: |required_by_ropebwt2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ropebwt2

   and update with::

      conda update ropebwt2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ropebwt2


.. |required_by_ropebwt2| conda:required_by:: ropebwt2
.. |downloads_ropebwt2| image:: https://img.shields.io/conda/dn/bioconda/ropebwt2.svg?style=flat
   :alt:   (downloads)
.. |docker_ropebwt2| image:: https://quay.io/repository/biocontainers/ropebwt2/status
   :target: https://quay.io/repository/biocontainers/ropebwt2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ropebwt2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ropebwt2/README.html

