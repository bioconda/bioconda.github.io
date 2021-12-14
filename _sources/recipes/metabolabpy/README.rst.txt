:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabolabpy'
.. highlight: bash

metabolabpy
===========

.. conda:recipe:: metabolabpy
   :replaces_section_title:
   :noindex:

   Python package for data processing of NMR 1D and 2D metabolomics and metabolism tracing data

   :homepage: https://github.com/ludwigc/metabolabpy
   :license: GPL3" / GNU General Public v3 (GPLv3)
   :recipe: /`metabolabpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabolabpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabolabpy/meta.yaml>`_

   


.. conda:package:: metabolabpy

   |downloads_metabolabpy| |docker_metabolabpy|

   :versions:
      
      

      ``0.6.51-0``,  ``0.6.50-0``,  ``0.6.49-0``,  ``0.6.48-0``,  ``0.6.46-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pyautogui: 
   :depends pyside2: 
   :depends python: ``>3.7``
   :depends qtmodern: 
   :depends scipy: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metabolabpy

   and update with::

      conda update metabolabpy

   or use the docker container::

      docker pull quay.io/biocontainers/metabolabpy:<tag>

   (see `metabolabpy/tags`_ for valid values for ``<tag>``)


.. |downloads_metabolabpy| image:: https://img.shields.io/conda/dn/bioconda/metabolabpy.svg?style=flat
   :target: https://anaconda.org/bioconda/metabolabpy
   :alt:   (downloads)
.. |docker_metabolabpy| image:: https://quay.io/repository/biocontainers/metabolabpy/status
   :target: https://quay.io/repository/biocontainers/metabolabpy
.. _`metabolabpy/tags`: https://quay.io/repository/biocontainers/metabolabpy?tab=tags


.. raw:: html

    <script>
        var package = "metabolabpy";
        var versions = ["0.6.51","0.6.50","0.6.49","0.6.48","0.6.46"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabolabpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabolabpy/README.html