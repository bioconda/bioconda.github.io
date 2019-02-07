.. title:: Package Recipe 'cramtools'
.. highlight: bash


cramtools
=========

.. conda:recipe:: cramtools
   :replaces_section_title:

   A set of Java tools and APIs for efficient compression of sequence read data

   :homepage: http://www.ebi.ac.uk/ena/software/cram-toolkit
   :license: Apache v2.0
   :recipe: /`cramtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cramtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cramtools/meta.yaml>`_
   :links: biotools: :biotools:`CRAMTools`

   


.. conda:package:: cramtools

   |downloads_cramtools| |docker_cramtools|

   :versions: 3.0.b127, 3.0.b47

   :depends: :conda:package:`java-jdk`  

   :required~by: |required_by_cramtools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cramtools

   and update with::

      conda update cramtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cramtools


.. |required_by_cramtools| conda:required_by:: cramtools
.. |downloads_cramtools| image:: https://img.shields.io/conda/dn/bioconda/cramtools.svg?style=flat
   :alt:   (downloads)
.. |docker_cramtools| image:: https://quay.io/repository/biocontainers/cramtools/status
   :target: https://quay.io/repository/biocontainers/cramtools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cramtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cramtools/README.html

