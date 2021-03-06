:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autogrid'
.. highlight: bash

autogrid
========

.. conda:recipe:: autogrid
   :replaces_section_title:
   :noindex:

   AutoDock is a suite of automated docking tools.

   :homepage: http://autodock.scripps.edu/
   :license: GPL-2.0-only
   :recipe: /`autogrid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autogrid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autogrid/meta.yaml>`_

   


.. conda:package:: autogrid

   |downloads_autogrid| |docker_autogrid|

   :versions:
      
      

      ``4.2.6-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install autogrid

   and update with::

      conda update autogrid

   or use the docker container::

      docker pull quay.io/biocontainers/autogrid:<tag>

   (see `autogrid/tags`_ for valid values for ``<tag>``)


.. |downloads_autogrid| image:: https://img.shields.io/conda/dn/bioconda/autogrid.svg?style=flat
   :target: https://anaconda.org/bioconda/autogrid
   :alt:   (downloads)
.. |docker_autogrid| image:: https://quay.io/repository/biocontainers/autogrid/status
   :target: https://quay.io/repository/biocontainers/autogrid
.. _`autogrid/tags`: https://quay.io/repository/biocontainers/autogrid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autogrid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autogrid/README.html