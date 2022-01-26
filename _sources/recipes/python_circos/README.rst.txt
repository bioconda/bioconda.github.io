:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python_circos'
.. highlight: bash

python_circos
=============

.. conda:recipe:: python_circos
   :replaces_section_title:
   :noindex:

   Circos plots for python

   :homepage: https://github.com/ponnhide/pyCircos
   :license: GPL-3.0
   :recipe: /`python_circos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python_circos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python_circos/meta.yaml>`_

   


.. conda:package:: python_circos

   |downloads_python_circos| |docker_python_circos|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends biopython: ``>=1.78``
   :depends matplotlib-base: ``>=3.4``
   :depends python: ``>=3.7``
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python_circos

   and update with::

      conda update python_circos

   or use the docker container::

      docker pull quay.io/biocontainers/python_circos:<tag>

   (see `python_circos/tags`_ for valid values for ``<tag>``)


.. |downloads_python_circos| image:: https://img.shields.io/conda/dn/bioconda/python_circos.svg?style=flat
   :target: https://anaconda.org/bioconda/python_circos
   :alt:   (downloads)
.. |docker_python_circos| image:: https://quay.io/repository/biocontainers/python_circos/status
   :target: https://quay.io/repository/biocontainers/python_circos
.. _`python_circos/tags`: https://quay.io/repository/biocontainers/python_circos?tab=tags


.. raw:: html

    <script>
        var package = "python_circos";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python_circos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python_circos/README.html