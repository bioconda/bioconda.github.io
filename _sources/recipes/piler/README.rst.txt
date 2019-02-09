.. title:: Package Recipe 'piler'
.. highlight: bash


piler
=====

.. conda:recipe:: piler
   :replaces_section_title:

   PILER is public domain software for analyzing repetitive DNA found in genome sequences.

   :homepage: http://www.drive5.com/piler
   :license: public domain
   :recipe: /`piler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piler/meta.yaml>`_

   


.. conda:package:: piler

   |downloads_piler| |docker_piler|

   :versions: 0.1

   :depends: 

   :required~by: |required_by_piler|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install piler

   and update with::

      conda update piler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/piler


.. |required_by_piler| conda:required_by:: piler
.. |downloads_piler| image:: https://img.shields.io/conda/dn/bioconda/piler.svg?style=flat
   :alt:   (downloads)
.. |docker_piler| image:: https://quay.io/repository/biocontainers/piler/status
   :target: https://quay.io/repository/biocontainers/piler







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piler/README.html

