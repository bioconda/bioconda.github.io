:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dyebiasexamples'
.. highlight: bash

bioconductor-dyebiasexamples
============================

.. conda:recipe:: bioconductor-dyebiasexamples
   :replaces_section_title:
   :noindex:

   Example data for the dyebias package\, which implements the GASSCO method.

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/dyebiasexamples.html
   :license: GPL-3
   :recipe: /`bioconductor-dyebiasexamples <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyebiasexamples>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dyebiasexamples/meta.yaml>`_

   Data for the dyebias package\, consisting of 4 self\-self hybrizations of self\-spotted yeast slides\, as well as data from Array Express accession E\-MTAB\-32


.. conda:package:: bioconductor-dyebiasexamples

   |downloads_bioconductor-dyebiasexamples| |docker_bioconductor-dyebiasexamples|

   :versions:
      
      

      ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      

   
   :depends bioconductor-geoquery: ``>=2.62.0,<2.63.0``
   :depends bioconductor-marray: ``>=1.72.0,<1.73.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dyebiasexamples

   and update with::

      conda update bioconductor-dyebiasexamples

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dyebiasexamples:<tag>

   (see `bioconductor-dyebiasexamples/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dyebiasexamples| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dyebiasexamples.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dyebiasexamples
   :alt:   (downloads)
.. |docker_bioconductor-dyebiasexamples| image:: https://quay.io/repository/biocontainers/bioconductor-dyebiasexamples/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dyebiasexamples
.. _`bioconductor-dyebiasexamples/tags`: https://quay.io/repository/biocontainers/bioconductor-dyebiasexamples?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dyebiasexamples";
        var versions = ["1.34.0","1.34.0","1.32.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dyebiasexamples/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dyebiasexamples/README.html