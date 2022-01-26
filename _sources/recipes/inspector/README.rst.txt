:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'inspector'
.. highlight: bash

inspector
=========

.. conda:recipe:: inspector
   :replaces_section_title:
   :noindex:

   Accurate long\-read de novo assembly evaluation with Inspector

   :homepage: https://github.com/ChongLab/Inspector
   :license: MIT / MIT
   :recipe: /`inspector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inspector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/inspector/meta.yaml>`_

   


.. conda:package:: inspector

   |downloads_inspector| |docker_inspector|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends flye: ``2.8.3.*``
   :depends minimap2: ``2.15.*``
   :depends pysam: ``0.16.0.1.*``
   :depends python: 
   :depends samtools: ``1.9.*``
   :depends statsmodels: ``0.10.1.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install inspector

   and update with::

      conda update inspector

   or use the docker container::

      docker pull quay.io/biocontainers/inspector:<tag>

   (see `inspector/tags`_ for valid values for ``<tag>``)


.. |downloads_inspector| image:: https://img.shields.io/conda/dn/bioconda/inspector.svg?style=flat
   :target: https://anaconda.org/bioconda/inspector
   :alt:   (downloads)
.. |docker_inspector| image:: https://quay.io/repository/biocontainers/inspector/status
   :target: https://quay.io/repository/biocontainers/inspector
.. _`inspector/tags`: https://quay.io/repository/biocontainers/inspector?tab=tags


.. raw:: html

    <script>
        var package = "inspector";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/inspector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/inspector/README.html