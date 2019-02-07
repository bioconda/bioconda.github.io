.. title:: Package Recipe 'lrzip'
.. highlight: bash


lrzip
=====

.. conda:recipe:: lrzip
   :replaces_section_title:

   Long Range ZIP or Lzma RZIP. This is a compression program optimised for large files. The larger the file and the more memory you have\, the better the compression advantage this will provide\, especially once the files are larger than 100MB. The advantage can be chosen to be either size \(much smaller than bzip2\) or speed \(much faster than bzip2\).

   :homepage: https://github.com/ckolivas/lrzip
   :license: GPLv2
   :recipe: /`lrzip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrzip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrzip/meta.yaml>`_

   


.. conda:package:: lrzip

   |downloads_lrzip| |docker_lrzip|

   :versions: 0.621

   :depends: :conda:package:`bzip2`  :conda:package:`libgcc`  :conda:package:`lzo`  

   :required~by: |required_by_lrzip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lrzip

   and update with::

      conda update lrzip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/lrzip


.. |required_by_lrzip| conda:required_by:: lrzip
.. |downloads_lrzip| image:: https://img.shields.io/conda/dn/bioconda/lrzip.svg?style=flat
   :alt:   (downloads)
.. |docker_lrzip| image:: https://quay.io/repository/biocontainers/lrzip/status
   :target: https://quay.io/repository/biocontainers/lrzip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lrzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lrzip/README.html

