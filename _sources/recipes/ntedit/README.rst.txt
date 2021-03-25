:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntedit'
.. highlight: bash

ntedit
======

.. conda:recipe:: ntedit
   :replaces_section_title:
   :noindex:

   ultra fast\, scalable genome assembly polishing and snv detection

   :homepage: https://github.com/bcgsc/ntEdit
   :license: GPL-3.0
   :recipe: /`ntedit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntedit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntedit/meta.yaml>`_

   


.. conda:package:: ntedit

   |downloads_ntedit| |docker_ntedit|

   :versions:
      
      

      ``1.3.4-1``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends nthits: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ntedit

   and update with::

      conda update ntedit

   or use the docker container::

      docker pull quay.io/biocontainers/ntedit:<tag>

   (see `ntedit/tags`_ for valid values for ``<tag>``)


.. |downloads_ntedit| image:: https://img.shields.io/conda/dn/bioconda/ntedit.svg?style=flat
   :target: https://anaconda.org/bioconda/ntedit
   :alt:   (downloads)
.. |docker_ntedit| image:: https://quay.io/repository/biocontainers/ntedit/status
   :target: https://quay.io/repository/biocontainers/ntedit
.. _`ntedit/tags`: https://quay.io/repository/biocontainers/ntedit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntedit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntedit/README.html