:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-biomark'
.. highlight: bash

r-biomark
=========

.. conda:recipe:: r-biomark
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-biomark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biomark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biomark/meta.yaml>`_

   


.. conda:package:: r-biomark

   |downloads_r-biomark| |docker_r-biomark|

   :versions: 0.4.5-0
   
   :depends r-base: 3.3.2*
   
   :depends r-glmnet: 
   
   :depends r-mass: 
   
   :depends r-pls: 
   
   :depends r-st: >=1.1.6
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-biomark

   and update with::

      conda update r-biomark

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-biomark:<tag>

   (see `r-biomark/tags`_ for valid values for ``<tag>``)


.. |downloads_r-biomark| image:: https://img.shields.io/conda/dn/bioconda/r-biomark.svg?style=flat
   :alt:   (downloads)
.. |docker_r-biomark| image:: https://quay.io/repository/biocontainers/r-biomark/status
   :target: https://quay.io/repository/biocontainers/r-biomark
.. _`r-biomark/tags`: https://quay.io/repository/biocontainers/r-biomark?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-biomark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-biomark/README.html