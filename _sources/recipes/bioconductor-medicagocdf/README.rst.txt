:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-medicagocdf'
.. highlight: bash

bioconductor-medicagocdf
========================

.. conda:recipe:: bioconductor-medicagocdf
   :replaces_section_title:
   :noindex:

   medicagocdf

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/medicagocdf.html
   :license: LGPL
   :recipe: /`bioconductor-medicagocdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-medicagocdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-medicagocdf/meta.yaml>`_

   A package containing an environment representing the Medicago.cdf file.


.. conda:package:: bioconductor-medicagocdf

   |downloads_bioconductor-medicagocdf| |docker_bioconductor-medicagocdf|

   :versions:
      
      

      ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-medicagocdf

   and update with::

      conda update bioconductor-medicagocdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-medicagocdf:<tag>

   (see `bioconductor-medicagocdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-medicagocdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-medicagocdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-medicagocdf
   :alt:   (downloads)
.. |docker_bioconductor-medicagocdf| image:: https://quay.io/repository/biocontainers/bioconductor-medicagocdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-medicagocdf
.. _`bioconductor-medicagocdf/tags`: https://quay.io/repository/biocontainers/bioconductor-medicagocdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-medicagocdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-medicagocdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-medicagocdf/README.html