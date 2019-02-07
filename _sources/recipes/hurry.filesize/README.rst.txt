.. title:: Package Recipe 'hurry.filesize'
.. highlight: bash


hurry.filesize
==============

.. conda:recipe:: hurry.filesize
   :replaces_section_title:

   A simple Python library for human readable file sizes \(or anything sized in bytes\).

   :homepage: None
   :license: ZPL 2.1
   :recipe: /`hurry.filesize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hurry.filesize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hurry.filesize/meta.yaml>`_

   


.. conda:package:: hurry.filesize

   |downloads_hurry.filesize| |docker_hurry.filesize|

   :versions: 0.9

   :depends: :conda:package:`python` 2.7* :conda:package:`setuptools`  

   :required~by: |required_by_hurry.filesize|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hurry.filesize

   and update with::

      conda update hurry.filesize

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hurry.filesize


.. |required_by_hurry.filesize| conda:required_by:: hurry.filesize
.. |downloads_hurry.filesize| image:: https://img.shields.io/conda/dn/bioconda/hurry.filesize.svg?style=flat
   :alt:   (downloads)
.. |docker_hurry.filesize| image:: https://quay.io/repository/biocontainers/hurry.filesize/status
   :target: https://quay.io/repository/biocontainers/hurry.filesize







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hurry.filesize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hurry.filesize/README.html

