:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svtools'
.. highlight: bash

svtools
=======

.. conda:recipe:: svtools
   :replaces_section_title:

   Tools for processing and analyzing structural variants

   :homepage: https://github.com/hall-lab/svtools
   :license: MIT / MIT License
   :recipe: /`svtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtools/meta.yaml>`_

   


.. conda:package:: svtools

   |downloads_svtools| |docker_svtools|

   :versions: 0.4.0-2, 0.3.2-2, 0.3.2-0, 0.3.1-3, 0.3.1-2, 0.3.1-1, 0.3.0-2, 0.3.0-1, 0.2.0-2, 0.2.0-1, 0.2.0-0, 0.1.1-2, 0.1.1-0
   
   :depends numpy: 
   :depends pandas: 
   :depends python: >=2.7,<2.8.0a0
   :depends scipy: 
   :depends statsmodels: 
   :depends svtyper: 0.7.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svtools

   and update with::

      conda update svtools

   or use the docker container::

      docker pull quay.io/biocontainers/svtools:<tag>

   (see `svtools/tags`_ for valid values for ``<tag>``)


.. |downloads_svtools| image:: https://img.shields.io/conda/dn/bioconda/svtools.svg?style=flat
   :target: https://anaconda.org/bioconda/svtools
   :alt:   (downloads)
.. |docker_svtools| image:: https://quay.io/repository/biocontainers/svtools/status
   :target: https://quay.io/repository/biocontainers/svtools
.. _`svtools/tags`: https://quay.io/repository/biocontainers/svtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svtools/README.html