:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomepy'
.. highlight: bash

genomepy
========

.. conda:recipe:: genomepy
   :replaces_section_title:
   :noindex:

   Download genomes the easy way.

   :homepage: https://github.com/vanheeringen-lab/genomepy
   :license: MIT / MIT License
   :recipe: /`genomepy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomepy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomepy/meta.yaml>`_

   


.. conda:package:: genomepy

   |downloads_genomepy| |docker_genomepy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-0</code>,  <code>0.8.1-1</code>,  </span></summary>
      

      ``0.10.0-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.2-2``,  ``0.5.2-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: 
   :depends biopython: ``>=1.73``
   :depends bucketcache: ``>=0.12.1``
   :depends click: 
   :depends colorama: 
   :depends joblib: 
   :depends loguru: 
   :depends mygene: 
   :depends mysql-connector-python: 
   :depends norns: ``>=0.1.5``
   :depends numpy: 
   :depends pandas: 
   :depends pyfaidx: ``>=0.5.7``
   :depends python: ``>=3``
   :depends requests: 
   :depends tqdm: ``>=4.51``
   :depends ucsc-bedtogenepred: 
   :depends ucsc-genepredtobed: 
   :depends ucsc-genepredtogtf: 
   :depends ucsc-gff3togenepred: 
   :depends ucsc-gtftogenepred: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomepy

   and update with::

      conda update genomepy

   or use the docker container::

      docker pull quay.io/biocontainers/genomepy:<tag>

   (see `genomepy/tags`_ for valid values for ``<tag>``)


.. |downloads_genomepy| image:: https://img.shields.io/conda/dn/bioconda/genomepy.svg?style=flat
   :target: https://anaconda.org/bioconda/genomepy
   :alt:   (downloads)
.. |docker_genomepy| image:: https://quay.io/repository/biocontainers/genomepy/status
   :target: https://quay.io/repository/biocontainers/genomepy
.. _`genomepy/tags`: https://quay.io/repository/biocontainers/genomepy?tab=tags


.. raw:: html

    <script>
        var package = "genomepy";
        var versions = ["0.10.0","0.9.3","0.9.2","0.9.1","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomepy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomepy/README.html