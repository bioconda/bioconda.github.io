:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-clvalid'
.. highlight: bash

r-clvalid
=========

.. conda:recipe:: r-clvalid
   :replaces_section_title:

   Statistical and biological validation of clustering results.

   :homepage: http://guybrock.gpbrock.net/research
   :license: LGPL / LGPL-3
   :recipe: /`r-clvalid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-clvalid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-clvalid/meta.yaml>`_

   


.. conda:package:: r-clvalid

   |downloads_r-clvalid| |docker_r-clvalid|

   :versions: 0.6_6-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-class: 
   :depends r-cluster: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-clvalid

   and update with::

      conda update r-clvalid

   or use the docker container::

      docker pull quay.io/biocontainers/r-clvalid:<tag>

   (see `r-clvalid/tags`_ for valid values for ``<tag>``)


.. |downloads_r-clvalid| image:: https://img.shields.io/conda/dn/bioconda/r-clvalid.svg?style=flat
   :target: https://anaconda.org/bioconda/r-clvalid
   :alt:   (downloads)
.. |docker_r-clvalid| image:: https://quay.io/repository/biocontainers/r-clvalid/status
   :target: https://quay.io/repository/biocontainers/r-clvalid
.. _`r-clvalid/tags`: https://quay.io/repository/biocontainers/r-clvalid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-clvalid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-clvalid/README.html