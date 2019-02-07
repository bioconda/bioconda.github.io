.. title:: Package Recipe 'mugsy'
.. highlight: bash


mugsy
=====

.. conda:recipe:: mugsy
   :replaces_section_title:

   Mugsy is a multiple whole genome aligner.

   :homepage: http://mugsy.sourceforge.net
   :license: Artistic License 2.0
   :recipe: /`mugsy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mugsy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mugsy/meta.yaml>`_

   


.. conda:package:: mugsy

   |downloads_mugsy| |docker_mugsy|

   :versions: 1.2.3

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_mugsy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mugsy

   and update with::

      conda update mugsy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mugsy


.. |required_by_mugsy| conda:required_by:: mugsy
.. |downloads_mugsy| image:: https://img.shields.io/conda/dn/bioconda/mugsy.svg?style=flat
   :alt:   (downloads)
.. |docker_mugsy| image:: https://quay.io/repository/biocontainers/mugsy/status
   :target: https://quay.io/repository/biocontainers/mugsy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mugsy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mugsy/README.html

