:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'break-point-inspector'
.. highlight: bash

break-point-inspector
=====================

.. conda:recipe:: break-point-inspector
   :replaces_section_title:
   :noindex:

   BPI uses Manta’s variant calls to re\-analyse BAM files and precisely determine the location of the breaks\, and applies a set of filters to remove false positives\, thereby increasing the accuracy of Manta’s calls.

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/break-point-inspector
   :license: MIT
   :recipe: /`break-point-inspector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/break-point-inspector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/break-point-inspector/meta.yaml>`_

   


.. conda:package:: break-point-inspector

   |downloads_break-point-inspector| |docker_break-point-inspector|

   :versions:
      
      

      ``1.5-1``,  ``1.5-0``

      

   
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install break-point-inspector

   and update with::

      conda update break-point-inspector

   or use the docker container::

      docker pull quay.io/biocontainers/break-point-inspector:<tag>

   (see `break-point-inspector/tags`_ for valid values for ``<tag>``)


.. |downloads_break-point-inspector| image:: https://img.shields.io/conda/dn/bioconda/break-point-inspector.svg?style=flat
   :target: https://anaconda.org/bioconda/break-point-inspector
   :alt:   (downloads)
.. |docker_break-point-inspector| image:: https://quay.io/repository/biocontainers/break-point-inspector/status
   :target: https://quay.io/repository/biocontainers/break-point-inspector
.. _`break-point-inspector/tags`: https://quay.io/repository/biocontainers/break-point-inspector?tab=tags


.. raw:: html

    <script>
        var package = "break-point-inspector";
        var versions = ["1.5","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/break-point-inspector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/break-point-inspector/README.html