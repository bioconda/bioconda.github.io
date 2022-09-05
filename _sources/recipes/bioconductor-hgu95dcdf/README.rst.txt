:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu95dcdf'
.. highlight: bash

bioconductor-hgu95dcdf
======================

.. conda:recipe:: bioconductor-hgu95dcdf
   :replaces_section_title:
   :noindex:

   hgu95dcdf

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/hgu95dcdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgu95dcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95dcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95dcdf/meta.yaml>`_

   A package containing an environment representing the HG U95D.CDF file.


.. conda:package:: bioconductor-hgu95dcdf

   |downloads_bioconductor-hgu95dcdf| |docker_bioconductor-hgu95dcdf|

   :versions:
      
      

      ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95dcdf

   and update with::

      conda update bioconductor-hgu95dcdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu95dcdf:<tag>

   (see `bioconductor-hgu95dcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu95dcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95dcdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu95dcdf
   :alt:   (downloads)
.. |docker_bioconductor-hgu95dcdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95dcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95dcdf
.. _`bioconductor-hgu95dcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu95dcdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu95dcdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95dcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95dcdf/README.html