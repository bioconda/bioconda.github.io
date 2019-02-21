:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autolog'
.. highlight: bash

autolog
=======

.. conda:recipe:: autolog
   :replaces_section_title:

   quick and easy logging setup

   :homepage: http://noble.gs.washington.edu/~mmh1/software/autolog/
   :license: GNU General Public License (GPL)
   :recipe: /`autolog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autolog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autolog/meta.yaml>`_

   


.. conda:package:: autolog

   |downloads_autolog| |docker_autolog|

   :versions: 0.2-0, 0.1.3-2, 0.1.3-0
   
   :depends path.py: 
   
   :depends python: 
   
   :depends six: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install autolog

   and update with::

      conda update autolog

   or use the docker container::

      docker pull quay.io/biocontainers/autolog:<tag>

   (see `autolog/tags`_ for valid values for ``<tag>``)


.. |downloads_autolog| image:: https://img.shields.io/conda/dn/bioconda/autolog.svg?style=flat
   :alt:   (downloads)
.. |docker_autolog| image:: https://quay.io/repository/biocontainers/autolog/status
   :target: https://quay.io/repository/biocontainers/autolog
.. _`autolog/tags`: https://quay.io/repository/biocontainers/autolog?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autolog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autolog/README.html