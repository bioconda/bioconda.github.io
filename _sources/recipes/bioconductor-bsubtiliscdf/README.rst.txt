:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsubtiliscdf'
.. highlight: bash

bioconductor-bsubtiliscdf
=========================

.. conda:recipe:: bioconductor-bsubtiliscdf
   :replaces_section_title:
   :noindex:

   bsubtiliscdf

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/bsubtiliscdf.html
   :license: LGPL
   :recipe: /`bioconductor-bsubtiliscdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsubtiliscdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsubtiliscdf/meta.yaml>`_

   A package containing an environment representing the Bsubtilis.CDF file.


.. conda:package:: bioconductor-bsubtiliscdf

   |downloads_bioconductor-bsubtiliscdf| |docker_bioconductor-bsubtiliscdf|

   :versions:
      
      

      ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsubtiliscdf

   and update with::

      conda update bioconductor-bsubtiliscdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsubtiliscdf:<tag>

   (see `bioconductor-bsubtiliscdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsubtiliscdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsubtiliscdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsubtiliscdf
   :alt:   (downloads)
.. |docker_bioconductor-bsubtiliscdf| image:: https://quay.io/repository/biocontainers/bioconductor-bsubtiliscdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsubtiliscdf
.. _`bioconductor-bsubtiliscdf/tags`: https://quay.io/repository/biocontainers/bioconductor-bsubtiliscdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsubtiliscdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsubtiliscdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsubtiliscdf/README.html