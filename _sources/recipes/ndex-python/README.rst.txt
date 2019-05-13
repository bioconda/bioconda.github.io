:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ndex-python'
.. highlight: bash

ndex-python
===========

.. conda:recipe:: ndex-python
   :replaces_section_title:

   NDEx Python includes a client and a data model.

   :homepage: https://github.com/ndexbio/ndex-python
   :license: BSD / BSD License
   :recipe: /`ndex-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ndex-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ndex-python/meta.yaml>`_

   


.. conda:package:: ndex-python

   |downloads_ndex-python| |docker_ndex-python|

   :versions: 3.0.11.23-1, 3.0.11.23-0
   
   :depends networkx: 
   :depends python: >=2.7,<2.8.0a0
   :depends requests: 
   :depends requests-toolbelt: 
   :depends urllib3: >=1.16
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ndex-python

   and update with::

      conda update ndex-python

   or use the docker container::

      docker pull quay.io/biocontainers/ndex-python:<tag>

   (see `ndex-python/tags`_ for valid values for ``<tag>``)


.. |downloads_ndex-python| image:: https://img.shields.io/conda/dn/bioconda/ndex-python.svg?style=flat
   :target: https://anaconda.org/bioconda/ndex-python
   :alt:   (downloads)
.. |docker_ndex-python| image:: https://quay.io/repository/biocontainers/ndex-python/status
   :target: https://quay.io/repository/biocontainers/ndex-python
.. _`ndex-python/tags`: https://quay.io/repository/biocontainers/ndex-python?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ndex-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ndex-python/README.html