:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidplyr'
.. highlight: bash

r-acidplyr
==========

.. conda:recipe:: r-acidplyr
   :replaces_section_title:
   :noindex:

   A dplyr\-like approach for classes defined in S4Vectors.

   :homepage: https://acidplyr.acidgenomics.com/
   :developer docs: https://github.com/acidgenomics/acidplyr
   :license: MIT
   :recipe: /`r-acidplyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplyr/meta.yaml>`_

   


.. conda:package:: r-acidplyr

   |downloads_r-acidplyr| |docker_r-acidplyr|

   :versions:
      
      

      ``0.1.4-0``

      

   
   :depends bioconductor-s4vectors: 
   :depends r-acidbase: ``>=0.2.3``
   :depends r-acidgenerics: ``>=0.4.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cli: ``>=2.0``
   :depends r-goalie: ``>=0.4.9``
   :depends r-tibble: ``>=3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-acidplyr

   and update with::

      conda update r-acidplyr

   or use the docker container::

      docker pull quay.io/biocontainers/r-acidplyr:<tag>

   (see `r-acidplyr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidplyr| image:: https://img.shields.io/conda/dn/bioconda/r-acidplyr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidplyr
   :alt:   (downloads)
.. |docker_r-acidplyr| image:: https://quay.io/repository/biocontainers/r-acidplyr/status
   :target: https://quay.io/repository/biocontainers/r-acidplyr
.. _`r-acidplyr/tags`: https://quay.io/repository/biocontainers/r-acidplyr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidplyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidplyr/README.html