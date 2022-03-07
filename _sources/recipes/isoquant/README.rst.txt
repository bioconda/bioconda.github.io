:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isoquant'
.. highlight: bash

isoquant
========

.. conda:recipe:: isoquant
   :replaces_section_title:
   :noindex:

   IsoQuant is a tool for reference\-based analysis of long RNA reads.

   :homepage: https://github.com/ablab/IsoQuant
   :license: GPL2
   :recipe: /`isoquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoquant/meta.yaml>`_

   


.. conda:package:: isoquant

   |downloads_isoquant| |docker_isoquant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends argcomplete: ``<=1.11.1``
   :depends argh: ``<=0.26.2``
   :depends biopython: ``<=1.76``
   :depends gffutils: ``<=0.10.1``
   :depends minimap2: 
   :depends numpy: ``<=1.18.1``
   :depends pandas: ``<=1.0.1``
   :depends pybedtools: ``0.8.1``
   :depends pyfaidx: ``<=0.5.8``
   :depends pysam: ``>=0.15``
   :depends python: 
   :depends samtools: ``1.10``
   :depends simplejson: ``<=3.17.0``
   :depends six: ``<=1.14.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install isoquant

   and update with::

      conda update isoquant

   or use the docker container::

      docker pull quay.io/biocontainers/isoquant:<tag>

   (see `isoquant/tags`_ for valid values for ``<tag>``)


.. |downloads_isoquant| image:: https://img.shields.io/conda/dn/bioconda/isoquant.svg?style=flat
   :target: https://anaconda.org/bioconda/isoquant
   :alt:   (downloads)
.. |docker_isoquant| image:: https://quay.io/repository/biocontainers/isoquant/status
   :target: https://quay.io/repository/biocontainers/isoquant
.. _`isoquant/tags`: https://quay.io/repository/biocontainers/isoquant?tab=tags


.. raw:: html

    <script>
        var package = "isoquant";
        var versions = ["2.2.0","2.1.1","2.1.0","2.0.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isoquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isoquant/README.html