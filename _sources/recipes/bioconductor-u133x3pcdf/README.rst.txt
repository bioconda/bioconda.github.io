:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-u133x3pcdf'
.. highlight: bash

bioconductor-u133x3pcdf
=======================

.. conda:recipe:: bioconductor-u133x3pcdf
   :replaces_section_title:
   :noindex:

   u133x3pcdf

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/u133x3pcdf.html
   :license: LGPL
   :recipe: /`bioconductor-u133x3pcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-u133x3pcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-u133x3pcdf/meta.yaml>`_

   A package containing an environment representing the U133\_X3P.cdf file.


.. conda:package:: bioconductor-u133x3pcdf

   |downloads_bioconductor-u133x3pcdf| |docker_bioconductor-u133x3pcdf|

   :versions:
      
      

      ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-u133x3pcdf

   and update with::

      conda update bioconductor-u133x3pcdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-u133x3pcdf:<tag>

   (see `bioconductor-u133x3pcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-u133x3pcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-u133x3pcdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-u133x3pcdf
   :alt:   (downloads)
.. |docker_bioconductor-u133x3pcdf| image:: https://quay.io/repository/biocontainers/bioconductor-u133x3pcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-u133x3pcdf
.. _`bioconductor-u133x3pcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-u133x3pcdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-u133x3pcdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-u133x3pcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-u133x3pcdf/README.html