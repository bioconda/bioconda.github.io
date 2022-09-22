:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pd.porcine'
.. highlight: bash

bioconductor-pd.porcine
=======================

.. conda:recipe:: bioconductor-pd.porcine
   :replaces_section_title:
   :noindex:

   Platform Design Info for The Manufacturer\'s Name Porcine

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/pd.porcine.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pd.porcine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.porcine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pd.porcine/meta.yaml>`_

   Platform Design Info for The Manufacturer\'s Name Porcine


.. conda:package:: bioconductor-pd.porcine

   |downloads_bioconductor-pd.porcine| |docker_bioconductor-pd.porcine|

   :versions:
      
      

      ``3.12.0-9``,  ``3.12.0-8``,  ``3.12.0-7``,  ``3.12.0-6``,  ``3.12.0-5``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-oligo: ``>=1.58.0,<1.59.0``
   :depends bioconductor-oligoclasses: ``>=1.56.0,<1.57.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dbi: ``>=0.3.1``
   :depends r-rsqlite: ``>=1.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pd.porcine

   and update with::

      conda update bioconductor-pd.porcine

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pd.porcine:<tag>

   (see `bioconductor-pd.porcine/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pd.porcine| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pd.porcine.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pd.porcine
   :alt:   (downloads)
.. |docker_bioconductor-pd.porcine| image:: https://quay.io/repository/biocontainers/bioconductor-pd.porcine/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pd.porcine
.. _`bioconductor-pd.porcine/tags`: https://quay.io/repository/biocontainers/bioconductor-pd.porcine?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pd.porcine";
        var versions = ["3.12.0","3.12.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pd.porcine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pd.porcine/README.html