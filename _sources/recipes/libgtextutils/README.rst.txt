.. title:: Package Recipe 'libgtextutils'
.. highlight: bash


libgtextutils
=============

.. conda:recipe:: libgtextutils
   :replaces_section_title:

   Gordon Text utils Library

   :homepage: https://github.com/agordon/libgtextutils
   :license: AGPL
   :recipe: /`libgtextutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgtextutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgtextutils/meta.yaml>`_

   


.. conda:package:: libgtextutils

   |downloads_libgtextutils| |docker_libgtextutils|

   :versions: 0.7

   :depends: :conda:package:`cython`  :conda:package:`nose`  

   :required~by: |required_by_libgtextutils|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libgtextutils

   and update with::

      conda update libgtextutils

   or use the docker container::

      docker pull quay.io/repository/biocontainers/libgtextutils


.. |required_by_libgtextutils| conda:required_by:: libgtextutils
.. |downloads_libgtextutils| image:: https://img.shields.io/conda/dn/bioconda/libgtextutils.svg?style=flat
   :alt:   (downloads)
.. |docker_libgtextutils| image:: https://quay.io/repository/biocontainers/libgtextutils/status
   :target: https://quay.io/repository/biocontainers/libgtextutils







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libgtextutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libgtextutils/README.html

