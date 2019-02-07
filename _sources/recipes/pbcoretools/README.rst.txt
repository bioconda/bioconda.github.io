.. title:: Package Recipe 'pbcoretools'
.. highlight: bash


pbcoretools
===========

.. conda:recipe:: pbcoretools
   :replaces_section_title:

   CLI tools and add\-ons for PacBio\'s core APIs

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbcoretools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcoretools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcoretools/meta.yaml>`_

   


.. conda:package:: pbcoretools

   |downloads_pbcoretools| |docker_pbcoretools|

   :versions: 0.2.4

   :depends: :conda:package:`numpy` >=1.7.1 :conda:package:`pbcommand` >=1.1.1 :conda:package:`pbcore` >=1.5.1 :conda:package:`pysam` >=0.13 :conda:package:`python` >=2.7,<2.8.0a0 

   :required~by: |required_by_pbcoretools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbcoretools

   and update with::

      conda update pbcoretools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pbcoretools


.. |required_by_pbcoretools| conda:required_by:: pbcoretools
.. |downloads_pbcoretools| image:: https://img.shields.io/conda/dn/bioconda/pbcoretools.svg?style=flat
   :alt:   (downloads)
.. |docker_pbcoretools| image:: https://quay.io/repository/biocontainers/pbcoretools/status
   :target: https://quay.io/repository/biocontainers/pbcoretools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbcoretools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbcoretools/README.html

