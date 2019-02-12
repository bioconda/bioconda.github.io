:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-interactivedisplaybase'
.. highlight: bash

bioconductor-interactivedisplaybase
===================================

.. conda:recipe:: bioconductor-interactivedisplaybase
   :replaces_section_title:

   The interactiveDisplayBase package contains the the basic methods needed to generate interactive Shiny based display methods for Bioconductor objects.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/interactiveDisplayBase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-interactivedisplaybase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplaybase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interactivedisplaybase/meta.yaml>`_
   :links: biotools: :biotools:`interactivedisplaybase`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-interactivedisplaybase

   |downloads_bioconductor-interactivedisplaybase| |docker_bioconductor-interactivedisplaybase|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0, 1.12.0-0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-shiny: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-interactivedisplaybase

   and update with::

      conda update bioconductor-interactivedisplaybase

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-interactivedisplaybase:<tag>

   (see `bioconductor-interactivedisplaybase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-interactivedisplaybase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interactivedisplaybase.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-interactivedisplaybase| image:: https://quay.io/repository/biocontainers/bioconductor-interactivedisplaybase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interactivedisplaybase
.. _`bioconductor-interactivedisplaybase/tags`: https://quay.io/repository/biocontainers/bioconductor-interactivedisplaybase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interactivedisplaybase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interactivedisplaybase/README.html