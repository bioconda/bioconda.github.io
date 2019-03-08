:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-solarius'
.. highlight: bash

r-solarius
==========

.. conda:recipe:: r-solarius
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-solarius <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-solarius>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-solarius/meta.yaml>`_

   


.. conda:package:: r-solarius

   |downloads_r-solarius| |docker_r-solarius|

   :versions: 0.3.0.2-0
   
   :depends r-base: 3.3.2*
   
   :depends r-data.table: 
   
   :depends r-ggplot2: 
   
   :depends r-plyr: >=1.8.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-solarius

   and update with::

      conda update r-solarius

   or use the docker container::

      docker pull quay.io/biocontainers/r-solarius:<tag>

   (see `r-solarius/tags`_ for valid values for ``<tag>``)


.. |downloads_r-solarius| image:: https://img.shields.io/conda/dn/bioconda/r-solarius.svg?style=flat
   :alt:   (downloads)
.. |docker_r-solarius| image:: https://quay.io/repository/biocontainers/r-solarius/status
   :target: https://quay.io/repository/biocontainers/r-solarius
.. _`r-solarius/tags`: https://quay.io/repository/biocontainers/r-solarius?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-solarius/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-solarius/README.html