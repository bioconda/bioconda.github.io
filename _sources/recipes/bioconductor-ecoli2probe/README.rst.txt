:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ecoli2probe'
.. highlight: bash

bioconductor-ecoli2probe
========================

.. conda:recipe:: bioconductor-ecoli2probe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type ecoli2

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/ecoli2probe.html
   :license: LGPL
   :recipe: /`bioconductor-ecoli2probe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecoli2probe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecoli2probe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was E\\\_coli\\\_2\\\_probe\\\_tab.


.. conda:package:: bioconductor-ecoli2probe

   |downloads_bioconductor-ecoli2probe| |docker_bioconductor-ecoli2probe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  <code>2.18.0-3</code>,  <code>2.18.0-2</code>,  </span></summary>
      

      ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ecoli2probe

   and update with::

      conda update bioconductor-ecoli2probe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ecoli2probe:<tag>

   (see `bioconductor-ecoli2probe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ecoli2probe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ecoli2probe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ecoli2probe
   :alt:   (downloads)
.. |docker_bioconductor-ecoli2probe| image:: https://quay.io/repository/biocontainers/bioconductor-ecoli2probe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ecoli2probe
.. _`bioconductor-ecoli2probe/tags`: https://quay.io/repository/biocontainers/bioconductor-ecoli2probe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ecoli2probe";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ecoli2probe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ecoli2probe/README.html