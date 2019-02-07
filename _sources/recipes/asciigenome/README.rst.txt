.. title:: Package Recipe 'asciigenome'
.. highlight: bash


asciigenome
===========

.. conda:recipe:: asciigenome
   :replaces_section_title:

   Command\-line genome browser running from terminal window and solely based on ASCII characters

   :homepage: https://github.com/dariober/ASCIIGenome
   :license: MIT / MIT
   :recipe: /`asciigenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asciigenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/asciigenome/meta.yaml>`_

   


.. conda:package:: asciigenome

   |downloads_asciigenome| |docker_asciigenome|

   :versions: 1.15.0, 1.14.0, 1.13.0, 1.12.0, 1.8.0, 1.2.0, 1.1.0, 1.0.0, 0.6.4, 0.2.0

   :depends: :conda:package:`openjdk`  :conda:package:`zlib`  

   :required~by: |required_by_asciigenome|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install asciigenome

   and update with::

      conda update asciigenome

   or use the docker container::

      docker pull quay.io/repository/biocontainers/asciigenome


.. |required_by_asciigenome| conda:required_by:: asciigenome
.. |downloads_asciigenome| image:: https://img.shields.io/conda/dn/bioconda/asciigenome.svg?style=flat
   :alt:   (downloads)
.. |docker_asciigenome| image:: https://quay.io/repository/biocontainers/asciigenome/status
   :target: https://quay.io/repository/biocontainers/asciigenome







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/asciigenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/asciigenome/README.html

