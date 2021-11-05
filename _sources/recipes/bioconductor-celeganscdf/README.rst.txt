:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celeganscdf'
.. highlight: bash

bioconductor-celeganscdf
========================

.. conda:recipe:: bioconductor-celeganscdf
   :replaces_section_title:
   :noindex:

   celeganscdf

   :homepage: https://bioconductor.org/packages/3.13/data/annotation/html/celeganscdf.html
   :license: LGPL
   :recipe: /`bioconductor-celeganscdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celeganscdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celeganscdf/meta.yaml>`_

   A package containing an environment representing the Celegans.CDF file.


.. conda:package:: bioconductor-celeganscdf

   |downloads_bioconductor-celeganscdf| |docker_bioconductor-celeganscdf|

   :versions:
      
      

      ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-celeganscdf

   and update with::

      conda update bioconductor-celeganscdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-celeganscdf:<tag>

   (see `bioconductor-celeganscdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-celeganscdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celeganscdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-celeganscdf
   :alt:   (downloads)
.. |docker_bioconductor-celeganscdf| image:: https://quay.io/repository/biocontainers/bioconductor-celeganscdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celeganscdf
.. _`bioconductor-celeganscdf/tags`: https://quay.io/repository/biocontainers/bioconductor-celeganscdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-celeganscdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celeganscdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celeganscdf/README.html