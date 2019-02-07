.. title:: Package Recipe 'krona'
.. highlight: bash


krona
=====

.. conda:recipe:: krona
   :replaces_section_title:

   Krona Tools is a set of scripts to create Krona charts from several Bioinformatics tools as well as from text and XML files.

   :homepage: https://github.com/marbl/Krona
   :license: BSD
   :recipe: /`krona <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krona>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krona/meta.yaml>`_
   :links: biotools: :biotools:`krona`

   


.. conda:package:: krona

   |downloads_krona| |docker_krona|

   :versions: 2.7, 2.6.1, 2.6, 2.5

   :depends: :conda:package:`perl-threaded`  

   :required~by: |required_by_krona|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install krona

   and update with::

      conda update krona

   or use the docker container::

      docker pull quay.io/repository/biocontainers/krona


.. |required_by_krona| conda:required_by:: krona
.. |downloads_krona| image:: https://img.shields.io/conda/dn/bioconda/krona.svg?style=flat
   :alt:   (downloads)
.. |docker_krona| image:: https://quay.io/repository/biocontainers/krona/status
   :target: https://quay.io/repository/biocontainers/krona







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krona/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krona/README.html

