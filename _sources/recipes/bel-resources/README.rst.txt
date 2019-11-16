:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bel-resources'
.. highlight: bash

bel-resources
=============

.. conda:recipe:: bel-resources
   :replaces_section_title:

   Utilities for BEL resource files.

   :homepage: https://github.com/pybel/bel-resources
   :license: MIT / MIT
   :recipe: /`bel-resources <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bel-resources>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bel-resources/meta.yaml>`_

   


.. conda:package:: bel-resources

   |downloads_bel-resources| |docker_bel-resources|

   :versions: 0.0.3-0, 0.0.2-0
   
   :depends multisplitby: 
   :depends python: >=3.5
   :depends requests: 
   :depends requests-file: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bel-resources

   and update with::

      conda update bel-resources

   or use the docker container::

      docker pull quay.io/biocontainers/bel-resources:<tag>

   (see `bel-resources/tags`_ for valid values for ``<tag>``)


.. |downloads_bel-resources| image:: https://img.shields.io/conda/dn/bioconda/bel-resources.svg?style=flat
   :target: https://anaconda.org/bioconda/bel-resources
   :alt:   (downloads)
.. |docker_bel-resources| image:: https://quay.io/repository/biocontainers/bel-resources/status
   :target: https://quay.io/repository/biocontainers/bel-resources
.. _`bel-resources/tags`: https://quay.io/repository/biocontainers/bel-resources?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bel-resources/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bel-resources/README.html