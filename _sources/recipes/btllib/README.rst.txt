:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'btllib'
.. highlight: bash

btllib
======

.. conda:recipe:: btllib
   :replaces_section_title:
   :noindex:

   Bioinformatics common code library in C\+\+ with Python wrappers\, from Bioinformatics Technology Lab

   :homepage: https://github.com/bcgsc/btllib
   :license: GPL-3.0
   :recipe: /`btllib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btllib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/btllib/meta.yaml>`_

   


.. conda:package:: btllib

   |downloads_btllib| |docker_btllib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.1-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.10-0</code>,  <code>1.4.8-0</code>,  <code>1.4.4-0</code>,  </span></summary>
      

      ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.10-0``,  ``1.4.8-0``,  ``1.4.4-0``,  ``1.4.3-2``,  ``1.4.3-1``,  ``1.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: 
   :depends gzip: 
   :depends libgcc-ng: ``>=12``
   :depends libgomp: 
   :depends libstdcxx-ng: ``>=12``
   :depends lrzip: 
   :depends pigz: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
   :depends tar: 
   :depends wget: 
   :depends xz: 
   :depends zip: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install btllib

   and update with::

      conda update btllib

   or use the docker container::

      docker pull quay.io/biocontainers/btllib:<tag>

   (see `btllib/tags`_ for valid values for ``<tag>``)


.. |downloads_btllib| image:: https://img.shields.io/conda/dn/bioconda/btllib.svg?style=flat
   :target: https://anaconda.org/bioconda/btllib
   :alt:   (downloads)
.. |docker_btllib| image:: https://quay.io/repository/biocontainers/btllib/status
   :target: https://quay.io/repository/biocontainers/btllib
.. _`btllib/tags`: https://quay.io/repository/biocontainers/btllib?tab=tags


.. raw:: html

    <script>
        var package = "btllib";
        var versions = ["1.6.1","1.6.0","1.6.0","1.5.1","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/btllib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/btllib/README.html