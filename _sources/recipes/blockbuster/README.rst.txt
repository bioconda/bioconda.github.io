.. title:: Package Recipe 'blockbuster'
.. highlight: bash


blockbuster
===========

.. conda:recipe:: blockbuster
   :replaces_section_title:

   Blockbuster detects blocks of overlapping reads using a gaussian\-distribution approach.

   :homepage: http://hoffmann.bioinf.uni-leipzig.de/LIFE/blockbuster.html
   :license: The 3-Clause BSD License
   :recipe: /`blockbuster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockbuster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockbuster/meta.yaml>`_

   


.. conda:package:: blockbuster

   |downloads_blockbuster| |docker_blockbuster|

   :versions: 0.0.1.1

   :depends: 

   :required~by: |required_by_blockbuster|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blockbuster

   and update with::

      conda update blockbuster

   or use the docker container::

      docker pull quay.io/repository/biocontainers/blockbuster


.. |required_by_blockbuster| conda:required_by:: blockbuster
.. |downloads_blockbuster| image:: https://img.shields.io/conda/dn/bioconda/blockbuster.svg?style=flat
   :alt:   (downloads)
.. |docker_blockbuster| image:: https://quay.io/repository/biocontainers/blockbuster/status
   :target: https://quay.io/repository/biocontainers/blockbuster







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blockbuster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blockbuster/README.html

