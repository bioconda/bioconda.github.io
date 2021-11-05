:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tomatocdf'
.. highlight: bash

bioconductor-tomatocdf
======================

.. conda:recipe:: bioconductor-tomatocdf
   :replaces_section_title:
   :noindex:

   tomatocdf

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/tomatocdf.html
   :license: LGPL
   :recipe: /`bioconductor-tomatocdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomatocdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomatocdf/meta.yaml>`_

   A package containing an environment representing the Tomato.cdf file.


.. conda:package:: bioconductor-tomatocdf

   |downloads_bioconductor-tomatocdf| |docker_bioconductor-tomatocdf|

   :versions:
      
      

      ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-1``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tomatocdf

   and update with::

      conda update bioconductor-tomatocdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tomatocdf:<tag>

   (see `bioconductor-tomatocdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tomatocdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tomatocdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tomatocdf
   :alt:   (downloads)
.. |docker_bioconductor-tomatocdf| image:: https://quay.io/repository/biocontainers/bioconductor-tomatocdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tomatocdf
.. _`bioconductor-tomatocdf/tags`: https://quay.io/repository/biocontainers/bioconductor-tomatocdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tomatocdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tomatocdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tomatocdf/README.html