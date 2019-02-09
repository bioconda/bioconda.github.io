.. title:: Package Recipe 'corset'
.. highlight: bash


corset
======

.. conda:recipe:: corset
   :replaces_section_title:

   Software for clustering de novo assembled transcripts and counting overlapping reads.

   :homepage: https://github.com/Oshlack/Corset
   :license: GPLv3
   :recipe: /`corset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corset/meta.yaml>`_
   :links: biotools: :biotools:`corset`, doi: :doi:`10.1186/s13059-014-0410-6`

   


.. conda:package:: corset

   |downloads_corset| |docker_corset|

   :versions: 1.07, 1.06

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_corset|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install corset

   and update with::

      conda update corset

   or use the docker container::

      docker pull quay.io/repository/biocontainers/corset


.. |required_by_corset| conda:required_by:: corset
.. |downloads_corset| image:: https://img.shields.io/conda/dn/bioconda/corset.svg?style=flat
   :alt:   (downloads)
.. |docker_corset| image:: https://quay.io/repository/biocontainers/corset/status
   :target: https://quay.io/repository/biocontainers/corset







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corset/README.html

