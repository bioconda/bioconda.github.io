:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gecode'
.. highlight: bash

gecode
======

.. conda:recipe:: gecode
   :replaces_section_title:

   Generic constraint development environment

   :homepage: http://www.gecode.org/
   :license: MIT
   :recipe: /`gecode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecode/meta.yaml>`_

   


.. conda:package:: gecode

   |downloads_gecode| |docker_gecode|

   :versions: 5.1.0-1, 5.1.0-0, 5.0.0-1, 5.0.0-0, 4.4.0-2, 4.4.0-1
   
   :depends gmp: 
   
   :depends libgcc-ng: >=4.9
   
   :depends mpfr: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gecode

   and update with::

      conda update gecode

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gecode:<tag>

   (see `gecode/tags`_ for valid values for ``<tag>``)


.. |downloads_gecode| image:: https://img.shields.io/conda/dn/bioconda/gecode.svg?style=flat
   :alt:   (downloads)
.. |docker_gecode| image:: https://quay.io/repository/biocontainers/gecode/status
   :target: https://quay.io/repository/biocontainers/gecode
.. _`gecode/tags`: https://quay.io/repository/biocontainers/gecode?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gecode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gecode/README.html