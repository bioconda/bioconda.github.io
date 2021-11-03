:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rebook'
.. highlight: bash

bioconductor-rebook
===================

.. conda:recipe:: bioconductor-rebook
   :replaces_section_title:
   :noindex:

   Re\-using Content in Bioconductor Books

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/rebook.html
   :license: GPL-3
   :recipe: /`bioconductor-rebook <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rebook>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rebook/meta.yaml>`_

   Provides utilities to re\-use content across chapters of a Bioconductor book. This is mostly based on functionality developed while writing the OSCA book\, but generalized for potential use in other large books with heavy compute. Also contains some functions to assist book deployment.


.. conda:package:: bioconductor-rebook

   |downloads_bioconductor-rebook| |docker_bioconductor-rebook|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocstyle: ``>=2.22.0,<2.23.0``
   :depends bioconductor-dir.expiry: ``>=1.2.0,<1.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-codedepends: 
   :depends r-filelock: 
   :depends r-knitr: ``>=1.32``
   :depends r-rmarkdown: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rebook

   and update with::

      conda update bioconductor-rebook

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rebook:<tag>

   (see `bioconductor-rebook/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rebook| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rebook.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rebook
   :alt:   (downloads)
.. |docker_bioconductor-rebook| image:: https://quay.io/repository/biocontainers/bioconductor-rebook/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rebook
.. _`bioconductor-rebook/tags`: https://quay.io/repository/biocontainers/bioconductor-rebook?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rebook";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rebook/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rebook/README.html