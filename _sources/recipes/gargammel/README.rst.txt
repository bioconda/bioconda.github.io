:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gargammel'
.. highlight: bash

gargammel
=========

.. conda:recipe:: gargammel
   :replaces_section_title:
   :noindex:

   Tool for simulating ancient DNA datasets

   :homepage: https://github.com/grenaud/gargammel
   :license: GPL-3.0-only
   :recipe: /`gargammel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gargammel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gargammel/meta.yaml>`_

   


.. conda:package:: gargammel

   |downloads_gargammel| |docker_gargammel|

   :versions:
      
      

      ``1.1.2-0``

      

   
   :depends art: 
   :depends gsl: ``>=2.5,<2.6.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends openssl: ``>=1.0.2n,<1.0.3a``
   :depends perl: 
   :depends samtools: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gargammel

   and update with::

      conda update gargammel

   or use the docker container::

      docker pull quay.io/biocontainers/gargammel:<tag>

   (see `gargammel/tags`_ for valid values for ``<tag>``)


.. |downloads_gargammel| image:: https://img.shields.io/conda/dn/bioconda/gargammel.svg?style=flat
   :target: https://anaconda.org/bioconda/gargammel
   :alt:   (downloads)
.. |docker_gargammel| image:: https://quay.io/repository/biocontainers/gargammel/status
   :target: https://quay.io/repository/biocontainers/gargammel
.. _`gargammel/tags`: https://quay.io/repository/biocontainers/gargammel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gargammel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gargammel/README.html