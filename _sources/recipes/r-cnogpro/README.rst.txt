:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cnogpro'
.. highlight: bash

r-cnogpro
=========

.. conda:recipe:: r-cnogpro
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-cnogpro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cnogpro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cnogpro/meta.yaml>`_
   :links: biotools: :biotools:`cnogpro`, doi: :doi:`10.1093/bioinformatics/btv070`

   


.. conda:package:: r-cnogpro

   |downloads_r-cnogpro| |docker_r-cnogpro|

   :versions: 1.1-0
   
   :depends r-base: 3.3.2*
   
   :depends r-seqinr: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-cnogpro

   and update with::

      conda update r-cnogpro

   or use the docker container::

      docker pull quay.io/biocontainers/r-cnogpro:<tag>

   (see `r-cnogpro/tags`_ for valid values for ``<tag>``)


.. |downloads_r-cnogpro| image:: https://img.shields.io/conda/dn/bioconda/r-cnogpro.svg?style=flat
   :alt:   (downloads)
.. |docker_r-cnogpro| image:: https://quay.io/repository/biocontainers/r-cnogpro/status
   :target: https://quay.io/repository/biocontainers/r-cnogpro
.. _`r-cnogpro/tags`: https://quay.io/repository/biocontainers/r-cnogpro?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cnogpro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cnogpro/README.html