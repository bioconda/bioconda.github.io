:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dinamo'
.. highlight: bash

dinamo
======

.. conda:recipe:: dinamo
   :replaces_section_title:
   :noindex:

   An exact and efficient method for IUPAC motif discovery in DNA sequences

   :homepage: https://github.com/bonsai-team/DiNAMO/
   :license: `GPL / GPLv3 <https://raw.githubusercontent.com/bonsai-team/DiNAMO/master/LICENSE>`_
   :recipe: /`dinamo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinamo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dinamo/meta.yaml>`_
   :links: biotools: :biotools:`DiNAMO`, doi: :doi:`10.1186/s12859-018-2215-1`

   


.. conda:package:: dinamo

   |downloads_dinamo| |docker_dinamo|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dinamo

   and update with::

      conda update dinamo

   or use the docker container::

      docker pull quay.io/biocontainers/dinamo:<tag>

   (see `dinamo/tags`_ for valid values for ``<tag>``)


.. |downloads_dinamo| image:: https://img.shields.io/conda/dn/bioconda/dinamo.svg?style=flat
   :target: https://anaconda.org/bioconda/dinamo
   :alt:   (downloads)
.. |docker_dinamo| image:: https://quay.io/repository/biocontainers/dinamo/status
   :target: https://quay.io/repository/biocontainers/dinamo
.. _`dinamo/tags`: https://quay.io/repository/biocontainers/dinamo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dinamo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dinamo/README.html