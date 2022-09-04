:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-caninecdf'
.. highlight: bash

bioconductor-caninecdf
======================

.. conda:recipe:: bioconductor-caninecdf
   :replaces_section_title:
   :noindex:

   caninecdf

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/caninecdf.html
   :license: LGPL
   :recipe: /`bioconductor-caninecdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-caninecdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-caninecdf/meta.yaml>`_

   A package containing an environment representing the Canine.cdf file.


.. conda:package:: bioconductor-caninecdf

   |downloads_bioconductor-caninecdf| |docker_bioconductor-caninecdf|

   :versions:
      
      

      ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-caninecdf

   and update with::

      conda update bioconductor-caninecdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-caninecdf:<tag>

   (see `bioconductor-caninecdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-caninecdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-caninecdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-caninecdf
   :alt:   (downloads)
.. |docker_bioconductor-caninecdf| image:: https://quay.io/repository/biocontainers/bioconductor-caninecdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-caninecdf
.. _`bioconductor-caninecdf/tags`: https://quay.io/repository/biocontainers/bioconductor-caninecdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-caninecdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-caninecdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-caninecdf/README.html