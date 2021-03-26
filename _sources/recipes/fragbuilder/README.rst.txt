:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fragbuilder'
.. highlight: bash

fragbuilder
===========

.. conda:recipe:: fragbuilder
   :replaces_section_title:
   :noindex:

   FragBuilder is a tool to create\, setup and analyze QM calculations on peptides.

   :homepage: https://github.com/jensengroup/fragbuilder
   :license: GPL / GPL
   :recipe: /`fragbuilder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fragbuilder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fragbuilder/meta.yaml>`_

   


.. conda:package:: fragbuilder

   |downloads_fragbuilder| |docker_fragbuilder|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends numpy: 
   :depends openbabel: ``2.4.1.*``
   :depends python: ``2.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fragbuilder

   and update with::

      conda update fragbuilder

   or use the docker container::

      docker pull quay.io/biocontainers/fragbuilder:<tag>

   (see `fragbuilder/tags`_ for valid values for ``<tag>``)


.. |downloads_fragbuilder| image:: https://img.shields.io/conda/dn/bioconda/fragbuilder.svg?style=flat
   :target: https://anaconda.org/bioconda/fragbuilder
   :alt:   (downloads)
.. |docker_fragbuilder| image:: https://quay.io/repository/biocontainers/fragbuilder/status
   :target: https://quay.io/repository/biocontainers/fragbuilder
.. _`fragbuilder/tags`: https://quay.io/repository/biocontainers/fragbuilder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fragbuilder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fragbuilder/README.html