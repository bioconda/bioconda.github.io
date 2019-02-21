:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pamr'
.. highlight: bash

r-pamr
======

.. conda:recipe:: r-pamr
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-pamr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pamr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pamr/meta.yaml>`_

   


.. conda:package:: r-pamr

   |downloads_r-pamr| |docker_r-pamr|

   :versions: 1.55-0
   
   :depends r-base: 3.4.1*
   
   :depends r-cluster: 
   
   :depends r-survival: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-pamr

   and update with::

      conda update r-pamr

   or use the docker container::

      docker pull quay.io/biocontainers/r-pamr:<tag>

   (see `r-pamr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pamr| image:: https://img.shields.io/conda/dn/bioconda/r-pamr.svg?style=flat
   :alt:   (downloads)
.. |docker_r-pamr| image:: https://quay.io/repository/biocontainers/r-pamr/status
   :target: https://quay.io/repository/biocontainers/r-pamr
.. _`r-pamr/tags`: https://quay.io/repository/biocontainers/r-pamr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pamr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pamr/README.html