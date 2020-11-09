:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'starcode'
.. highlight: bash

starcode
========

.. conda:recipe:: starcode
   :replaces_section_title:
   :noindex:

   Starcode\: sequence clustering based on all\-pairs search

   :homepage: https://github.com/gui11aume/starcode
   :license: GPLv3
   :recipe: /`starcode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starcode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/starcode/meta.yaml>`_

   


.. conda:package:: starcode

   |downloads_starcode| |docker_starcode|

   :versions:
      
      

      ``1.4-0``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install starcode

   and update with::

      conda update starcode

   or use the docker container::

      docker pull quay.io/biocontainers/starcode:<tag>

   (see `starcode/tags`_ for valid values for ``<tag>``)


.. |downloads_starcode| image:: https://img.shields.io/conda/dn/bioconda/starcode.svg?style=flat
   :target: https://anaconda.org/bioconda/starcode
   :alt:   (downloads)
.. |docker_starcode| image:: https://quay.io/repository/biocontainers/starcode/status
   :target: https://quay.io/repository/biocontainers/starcode
.. _`starcode/tags`: https://quay.io/repository/biocontainers/starcode?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/starcode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/starcode/README.html