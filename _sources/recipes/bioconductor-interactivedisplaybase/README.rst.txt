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

   :versions: 1.20.0, 1.18.0, 1.16.0, 1.14.0, 1.12.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-shiny`  

   :required~by: |required_by_bioconductor-interactivedisplaybase|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-interactivedisplaybase

   and update with::

      conda update bioconductor-interactivedisplaybase

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-interactivedisplaybase


.. |required_by_bioconductor-interactivedisplaybase| conda:required_by:: bioconductor-interactivedisplaybase
.. |downloads_bioconductor-interactivedisplaybase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interactivedisplaybase.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-interactivedisplaybase| image:: https://quay.io/repository/biocontainers/bioconductor-interactivedisplaybase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interactivedisplaybase







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interactivedisplaybase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interactivedisplaybase/README.html

