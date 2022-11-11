:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anansescanpy'
.. highlight: bash

anansescanpy
============

.. conda:recipe:: anansescanpy
   :replaces_section_title:
   :noindex:

   implementation of scANANSE for scanpy objects in Python

   :homepage: https://github.com/Arts-of-coding/AnanseScanpy
   :license: Apache-2.0
   :recipe: /`anansescanpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anansescanpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anansescanpy/meta.yaml>`_

   


.. conda:package:: anansescanpy

   |downloads_anansescanpy| |docker_anansescanpy|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-0``

      

   
   :depends anndata: ``>=0.8.0``
   :depends jupyterlab: ``>=3.3.4``
   :depends numpy: ``>=1.23.3``
   :depends pandas: ``>=1.4.4``
   :depends python: ``>=3.6``
   :depends scanpy: ``>=1.9.1``
   :depends scipy: ``>=1.9.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install anansescanpy

   and update with::

      conda update anansescanpy

   or use the docker container::

      docker pull quay.io/biocontainers/anansescanpy:<tag>

   (see `anansescanpy/tags`_ for valid values for ``<tag>``)


.. |downloads_anansescanpy| image:: https://img.shields.io/conda/dn/bioconda/anansescanpy.svg?style=flat
   :target: https://anaconda.org/bioconda/anansescanpy
   :alt:   (downloads)
.. |docker_anansescanpy| image:: https://quay.io/repository/biocontainers/anansescanpy/status
   :target: https://quay.io/repository/biocontainers/anansescanpy
.. _`anansescanpy/tags`: https://quay.io/repository/biocontainers/anansescanpy?tab=tags


.. raw:: html

    <script>
        var package = "anansescanpy";
        var versions = ["0.1.5","0.1.4","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anansescanpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anansescanpy/README.html