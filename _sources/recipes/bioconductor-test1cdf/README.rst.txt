:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-test1cdf'
.. highlight: bash

bioconductor-test1cdf
=====================

.. conda:recipe:: bioconductor-test1cdf
   :replaces_section_title:
   :noindex:

   test1cdf

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/test1cdf.html
   :license: LGPL
   :recipe: /`bioconductor-test1cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-test1cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-test1cdf/meta.yaml>`_

   A package containing an environment representing the Test1.CDF file.


.. conda:package:: bioconductor-test1cdf

   |downloads_bioconductor-test1cdf| |docker_bioconductor-test1cdf|

   :versions:
      
      

      ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-test1cdf

   and update with::

      conda update bioconductor-test1cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-test1cdf:<tag>

   (see `bioconductor-test1cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-test1cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-test1cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-test1cdf
   :alt:   (downloads)
.. |docker_bioconductor-test1cdf| image:: https://quay.io/repository/biocontainers/bioconductor-test1cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-test1cdf
.. _`bioconductor-test1cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-test1cdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-test1cdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-test1cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-test1cdf/README.html