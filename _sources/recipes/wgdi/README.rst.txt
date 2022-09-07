:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgdi'
.. highlight: bash

wgdi
====

.. conda:recipe:: wgdi
   :replaces_section_title:
   :noindex:

   Whole Genome Duplication Identification

   :homepage: https://github.com/SunPengChuan/wgdi
   :license: BSD / BSD-2-Clause
   :recipe: /`wgdi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgdi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgdi/meta.yaml>`_

   Python utility libraries on comparative genomics


.. conda:package:: wgdi

   |downloads_wgdi| |docker_wgdi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-0</code>,  <code>0.5.9-0</code>,  <code>0.5.8-0</code>,  <code>0.5.7-0</code>,  <code>0.5.6-0</code>,  <code>0.5.4-0</code>,  <code>0.5.3-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-1</code>,  </span></summary>
      

      ``0.6.0-0``,  ``0.5.9-0``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.9-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends divvier: ``1.01``
   :depends fasttree: 
   :depends iqtree: 
   :depends mafft: 
   :depends matplotlib-base: 
   :depends muscle: ``3.8.1551``
   :depends numpy: 
   :depends pal2nal: 
   :depends paml: 
   :depends pandas: ``>=1.1.0``
   :depends python: ``>=3``
   :depends scipy: 
   :depends trimal: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wgdi

   and update with::

      conda update wgdi

   or use the docker container::

      docker pull quay.io/biocontainers/wgdi:<tag>

   (see `wgdi/tags`_ for valid values for ``<tag>``)


.. |downloads_wgdi| image:: https://img.shields.io/conda/dn/bioconda/wgdi.svg?style=flat
   :target: https://anaconda.org/bioconda/wgdi
   :alt:   (downloads)
.. |docker_wgdi| image:: https://quay.io/repository/biocontainers/wgdi/status
   :target: https://quay.io/repository/biocontainers/wgdi
.. _`wgdi/tags`: https://quay.io/repository/biocontainers/wgdi?tab=tags


.. raw:: html

    <script>
        var package = "wgdi";
        var versions = ["0.6.0","0.5.9","0.5.8","0.5.7","0.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgdi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgdi/README.html