:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hcg110probe'
.. highlight: bash

bioconductor-hcg110probe
========================

.. conda:recipe:: bioconductor-hcg110probe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type hcg110

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/hcg110probe.html
   :license: LGPL
   :recipe: /`bioconductor-hcg110probe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hcg110probe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hcg110probe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was HC\-G110\\\_probe\\\_tab.


.. conda:package:: bioconductor-hcg110probe

   |downloads_bioconductor-hcg110probe| |docker_bioconductor-hcg110probe|

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

      conda install bioconductor-hcg110probe

   and update with::

      conda update bioconductor-hcg110probe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hcg110probe:<tag>

   (see `bioconductor-hcg110probe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hcg110probe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hcg110probe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hcg110probe
   :alt:   (downloads)
.. |docker_bioconductor-hcg110probe| image:: https://quay.io/repository/biocontainers/bioconductor-hcg110probe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hcg110probe
.. _`bioconductor-hcg110probe/tags`: https://quay.io/repository/biocontainers/bioconductor-hcg110probe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hcg110probe";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hcg110probe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hcg110probe/README.html