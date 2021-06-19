:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gait-gm'
.. highlight: bash

gait-gm
=======

.. conda:recipe:: gait-gm
   :replaces_section_title:
   :noindex:

   GAIT\-GM \- Modeling Metabolites as a function of gene expression

   :homepage: https://github.com/secimTools/gait-gm
   :license: MIT / MIT License
   :recipe: /`gait-gm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gait-gm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gait-gm/meta.yaml>`_

   Modeling Metabolites as a function of gene expression


.. conda:package:: gait-gm

   |downloads_gait-gm| |docker_gait-gm|

   :versions:
      
      

      ``21.6.10-0``

      

   
   :depends mygene: 
   :depends python: ``>=3.7``
   :depends r-base: 
   :depends r-caret: 
   :depends r-mixomics: 
   :depends secimtools: ``>=21.6.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gait-gm

   and update with::

      conda update gait-gm

   or use the docker container::

      docker pull quay.io/biocontainers/gait-gm:<tag>

   (see `gait-gm/tags`_ for valid values for ``<tag>``)


.. |downloads_gait-gm| image:: https://img.shields.io/conda/dn/bioconda/gait-gm.svg?style=flat
   :target: https://anaconda.org/bioconda/gait-gm
   :alt:   (downloads)
.. |docker_gait-gm| image:: https://quay.io/repository/biocontainers/gait-gm/status
   :target: https://quay.io/repository/biocontainers/gait-gm
.. _`gait-gm/tags`: https://quay.io/repository/biocontainers/gait-gm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gait-gm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gait-gm/README.html