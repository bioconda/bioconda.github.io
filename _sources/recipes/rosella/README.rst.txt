:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rosella'
.. highlight: bash

rosella
=======

.. conda:recipe:: rosella
   :replaces_section_title:
   :noindex:

   Metagenomic binning pipeline and algorithm using UMAP and HDBSCAN

   :homepage: https://github.com/rhysnewell/rosella.git
   :license: GPL3
   :recipe: /`rosella <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rosella>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rosella/meta.yaml>`_

   


.. conda:package:: rosella

   |downloads_rosella| |docker_rosella|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.4.1-2</code>,  <code>0.4.1-1</code>,  <code>0.4.1-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.0-0</code>,  <code>0.2.4-0</code>,  </span></summary>
      

      ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: 
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends minimap2: 
   :depends openssl: ``>=1.1.1q,<1.1.2a``
   :depends parallel: 
   :depends samtools: 
   :depends starcode: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rosella

   and update with::

      conda update rosella

   or use the docker container::

      docker pull quay.io/biocontainers/rosella:<tag>

   (see `rosella/tags`_ for valid values for ``<tag>``)


.. |downloads_rosella| image:: https://img.shields.io/conda/dn/bioconda/rosella.svg?style=flat
   :target: https://anaconda.org/bioconda/rosella
   :alt:   (downloads)
.. |docker_rosella| image:: https://quay.io/repository/biocontainers/rosella/status
   :target: https://quay.io/repository/biocontainers/rosella
.. _`rosella/tags`: https://quay.io/repository/biocontainers/rosella?tab=tags


.. raw:: html

    <script>
        var package = "rosella";
        var versions = ["0.4.2","0.4.2","0.4.1","0.4.1","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rosella/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rosella/README.html