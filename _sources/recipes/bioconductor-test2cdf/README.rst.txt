:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-test2cdf'
.. highlight: bash

bioconductor-test2cdf
=====================

.. conda:recipe:: bioconductor-test2cdf
   :replaces_section_title:
   :noindex:

   test2cdf

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/test2cdf.html
   :license: LGPL
   :recipe: /`bioconductor-test2cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-test2cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-test2cdf/meta.yaml>`_

   A package containing an environment representing the Test2.CDF file.


.. conda:package:: bioconductor-test2cdf

   |downloads_bioconductor-test2cdf| |docker_bioconductor-test2cdf|

   :versions:
      
      

      ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-test2cdf

   and update with::

      conda update bioconductor-test2cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-test2cdf:<tag>

   (see `bioconductor-test2cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-test2cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-test2cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-test2cdf
   :alt:   (downloads)
.. |docker_bioconductor-test2cdf| image:: https://quay.io/repository/biocontainers/bioconductor-test2cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-test2cdf
.. _`bioconductor-test2cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-test2cdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-test2cdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-test2cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-test2cdf/README.html