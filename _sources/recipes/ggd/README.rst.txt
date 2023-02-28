:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ggd'
.. highlight: bash

ggd
===

.. conda:recipe:: ggd
   :replaces_section_title:
   :noindex:

   GoGetData \(GGD\) is a genomic data managment system. It provide simple and reproducible access to a repository of genomic data. Simply put\, it is \'Conda\' for genomic data

   :homepage: https://github.com/gogetdata/ggd-cli
   :license: MIT
   :recipe: /`ggd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggd/meta.yaml>`_

   


.. conda:package:: ggd

   |downloads_ggd| |docker_ggd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.1.3-0</code>,  <code>0.1.2-1</code>,  </span></summary>
      

      ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends check-sort-order: ``>=0.0.7``
   :depends conda: ``>=4.8.2,<=4.9.0``
   :depends conda-build: ``>=3.18.12,<=3.19.3``
   :depends cyvcf2: 
   :depends future: 
   :depends fuzzywuzzy: 
   :depends git: 
   :depends gitpython: 
   :depends gsort: ``>=0.1.4``
   :depends htslib: 
   :depends krb5: 
   :depends oyaml: 
   :depends pysam: 
   :depends pytest: 
   :depends pytest-socket: 
   :depends python: 
   :depends python-levenshtein: 
   :depends pyyaml: 
   :depends requests: ``>=2.22.*``
   :depends ripgrep: 
   :depends samtools: ``>=1.10``
   :depends wget: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ggd

   and update with::

      conda update ggd

   or use the docker container::

      docker pull quay.io/biocontainers/ggd:<tag>

   (see `ggd/tags`_ for valid values for ``<tag>``)


.. |downloads_ggd| image:: https://img.shields.io/conda/dn/bioconda/ggd.svg?style=flat
   :target: https://anaconda.org/bioconda/ggd
   :alt:   (downloads)
.. |docker_ggd| image:: https://quay.io/repository/biocontainers/ggd/status
   :target: https://quay.io/repository/biocontainers/ggd
.. _`ggd/tags`: https://quay.io/repository/biocontainers/ggd?tab=tags


.. raw:: html

    <script>
        var package = "ggd";
        var versions = ["1.1.3","1.1.2","1.1.1","1.1.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ggd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ggd/README.html