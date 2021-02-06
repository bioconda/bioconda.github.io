:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyjaspar'
.. highlight: bash

pyjaspar
========

.. conda:recipe:: pyjaspar
   :replaces_section_title:
   :noindex:

   pyJASPAR\: a serverless interface to Biopython to access different versions of JASPAR database

   :homepage: https://github.com/asntech/pyjaspar
   :documentation: https://pyjaspar.rtfd.io
   
   :license: GPL / GPLv3
   :recipe: /`pyjaspar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyjaspar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyjaspar/meta.yaml>`_

   A serverless interface to Biopython to query and access JASPAR motifs from different releases of JASPAR database using sqlite3.


.. conda:package:: pyjaspar

   |downloads_pyjaspar| |docker_pyjaspar|

   :versions:
      
      

      ``1.5.5-0``,  ``1.5.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyjaspar

   and update with::

      conda update pyjaspar

   or use the docker container::

      docker pull quay.io/biocontainers/pyjaspar:<tag>

   (see `pyjaspar/tags`_ for valid values for ``<tag>``)


.. |downloads_pyjaspar| image:: https://img.shields.io/conda/dn/bioconda/pyjaspar.svg?style=flat
   :target: https://anaconda.org/bioconda/pyjaspar
   :alt:   (downloads)
.. |docker_pyjaspar| image:: https://quay.io/repository/biocontainers/pyjaspar/status
   :target: https://quay.io/repository/biocontainers/pyjaspar
.. _`pyjaspar/tags`: https://quay.io/repository/biocontainers/pyjaspar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyjaspar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyjaspar/README.html