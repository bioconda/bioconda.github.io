:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-experimenthub'
.. highlight: bash

bioconductor-experimenthub
==========================

.. conda:recipe:: bioconductor-experimenthub
   :replaces_section_title:

   This package provides a client for the Bioconductor ExperimentHub web resource. ExperimentHub provides a central location where curated data from experiments\, publications or training courses can be accessed. Each resource has associated metadata\, tags and date of modification. The client creates and manages a local cache of files retrieved enabling quick and reproducible access.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ExperimentHub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-experimenthub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthub/meta.yaml>`_

   


.. conda:package:: bioconductor-experimenthub

   |downloads_bioconductor-experimenthub| |docker_bioconductor-experimenthub|

   :versions: 1.12.0-0, 1.10.0-1, 1.8.0-0, 1.6.1-0, 1.4.0-0
   
   :depends bioconductor-annotationhub: >=2.18.0,<2.19.0
   :depends bioconductor-biocfilecache: >=1.10.0,<1.11.0
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-biocmanager: 
   :depends r-curl: 
   :depends r-rappdirs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-experimenthub

   and update with::

      conda update bioconductor-experimenthub

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-experimenthub:<tag>

   (see `bioconductor-experimenthub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-experimenthub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-experimenthub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-experimenthub
   :alt:   (downloads)
.. |docker_bioconductor-experimenthub| image:: https://quay.io/repository/biocontainers/bioconductor-experimenthub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-experimenthub
.. _`bioconductor-experimenthub/tags`: https://quay.io/repository/biocontainers/bioconductor-experimenthub?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-experimenthub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-experimenthub/README.html