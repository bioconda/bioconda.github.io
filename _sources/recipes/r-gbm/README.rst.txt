:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gbm'
.. highlight: bash

r-gbm
=====

.. conda:recipe:: r-gbm
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-gbm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gbm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gbm/meta.yaml>`_

   


.. conda:package:: r-gbm

   |downloads_r-gbm| |docker_r-gbm|

   :versions: 2.1.3-0, 2.1.1-0
   
   :depends r-base: 3.4.1*
   
   :depends r-lattice: 
   
   :depends r-survival: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gbm

   and update with::

      conda update r-gbm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-gbm:<tag>

   (see `r-gbm/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gbm| image:: https://img.shields.io/conda/dn/bioconda/r-gbm.svg?style=flat
   :alt:   (downloads)
.. |docker_r-gbm| image:: https://quay.io/repository/biocontainers/r-gbm/status
   :target: https://quay.io/repository/biocontainers/r-gbm
.. _`r-gbm/tags`: https://quay.io/repository/biocontainers/r-gbm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gbm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gbm/README.html