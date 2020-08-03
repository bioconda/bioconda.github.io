:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ragtag'
.. highlight: bash

ragtag
======

.. conda:recipe:: ragtag
   :replaces_section_title:
   :noindex:

   Fast reference\-guided genome assembly scaffolding

   :homepage: https://github.com/malonge/RagTag
   :documentation: https://github.com/malonge/RagTag/wiki
   
   :license: MIT / MIT
   :recipe: /`ragtag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ragtag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ragtag/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3887140`

   


.. conda:package:: ragtag

   |downloads_ragtag| |docker_ragtag|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends intervaltree: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ragtag

   and update with::

      conda update ragtag

   or use the docker container::

      docker pull quay.io/biocontainers/ragtag:<tag>

   (see `ragtag/tags`_ for valid values for ``<tag>``)


.. |downloads_ragtag| image:: https://img.shields.io/conda/dn/bioconda/ragtag.svg?style=flat
   :target: https://anaconda.org/bioconda/ragtag
   :alt:   (downloads)
.. |docker_ragtag| image:: https://quay.io/repository/biocontainers/ragtag/status
   :target: https://quay.io/repository/biocontainers/ragtag
.. _`ragtag/tags`: https://quay.io/repository/biocontainers/ragtag?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ragtag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ragtag/README.html