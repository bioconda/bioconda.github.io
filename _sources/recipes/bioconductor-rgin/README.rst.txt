:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgin'
.. highlight: bash

bioconductor-rgin
=================

.. conda:recipe:: bioconductor-rgin
   :replaces_section_title:
   :noindex:

   gin in R

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/Rgin.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rgin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgin/meta.yaml>`_

   C\+\+ implementation of SConES.


.. conda:package:: bioconductor-rgin

   |downloads_bioconductor-rgin| |docker_bioconductor-rgin|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcppeigen: ``>=0.3.3.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgin

   and update with::

      conda update bioconductor-rgin

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgin:<tag>

   (see `bioconductor-rgin/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgin| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgin.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgin
   :alt:   (downloads)
.. |docker_bioconductor-rgin| image:: https://quay.io/repository/biocontainers/bioconductor-rgin/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgin
.. _`bioconductor-rgin/tags`: https://quay.io/repository/biocontainers/bioconductor-rgin?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgin";
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgin/README.html