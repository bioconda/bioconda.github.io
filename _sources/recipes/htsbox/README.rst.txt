.. title:: Package Recipe 'htsbox'
.. highlight: bash


htsbox
======

.. conda:recipe:: htsbox
   :replaces_section_title:

   HTSbox is a fork of early HTSlib. It is a collection of small experimental tools manipulating HTS\-related files.

   :homepage: https://github.com/lh3/htsbox
   :license: Unknown
   :recipe: /`htsbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsbox/meta.yaml>`_

   


.. conda:package:: htsbox

   |downloads_htsbox| |docker_htsbox|

   :versions: r340, r327, r312

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_htsbox|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install htsbox

   and update with::

      conda update htsbox

   or use the docker container::

      docker pull quay.io/repository/biocontainers/htsbox


.. |required_by_htsbox| conda:required_by:: htsbox
.. |downloads_htsbox| image:: https://img.shields.io/conda/dn/bioconda/htsbox.svg?style=flat
   :alt:   (downloads)
.. |docker_htsbox| image:: https://quay.io/repository/biocontainers/htsbox/status
   :target: https://quay.io/repository/biocontainers/htsbox







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htsbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htsbox/README.html

