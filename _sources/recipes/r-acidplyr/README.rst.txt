:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidplyr'
.. highlight: bash

r-acidplyr
==========

.. conda:recipe:: r-acidplyr
   :replaces_section_title:
   :noindex:

   A grammar of S4 class data manipulation.

   :homepage: https://r.acidgenomics.com/packages/acidplyr/
   :developer docs: https://github.com/acidgenomics/r-acidplyr
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidplyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidplyr/meta.yaml>`_

   


.. conda:package:: r-acidplyr

   |downloads_r-acidplyr| |docker_r-acidplyr|

   :versions:
      
      

      ``0.1.18-2``,  ``0.1.18-1``,  ``0.1.18-0``,  ``0.1.17-1``,  ``0.1.17-0``,  ``0.1.4-1``,  ``0.1.4-0``

      

   
   :depends r-acidbase: ``>=0.3.13``
   :depends r-acidcli: ``>=0.1.0``
   :depends r-acidgenerics: ``>=0.5.17``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-goalie: ``>=0.5.0``
   :depends r-purrr: ``>=0.3.4``
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