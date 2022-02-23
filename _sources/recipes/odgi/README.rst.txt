:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'odgi'
.. highlight: bash

odgi
====

.. conda:recipe:: odgi
   :replaces_section_title:
   :noindex:

   An optimized dynamic genome\/graph implementation

   :homepage: https://github.com/pangenome/odgi
   :license: MIT
   :recipe: /`odgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/odgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/odgi/meta.yaml>`_

   


.. conda:package:: odgi

   |downloads_odgi| |docker_odgi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.3-1</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6-1</code>,  <code>0.6-0</code>,  <code>0.4.1-1</code>,  <code>0.4.1-0</code>,  <code>0.3-1</code>,  </span></summary>
      

      ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6-1``,  ``0.6-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.3-1``,  ``0.3-0``,  ``0.2-0``,  ``v0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libjemalloc: ``>=5.2.1``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install odgi

   and update with::

      conda update odgi

   or use the docker container::

      docker pull quay.io/biocontainers/odgi:<tag>

   (see `odgi/tags`_ for valid values for ``<tag>``)


.. |downloads_odgi| image:: https://img.shields.io/conda/dn/bioconda/odgi.svg?style=flat
   :target: https://anaconda.org/bioconda/odgi
   :alt:   (downloads)
.. |docker_odgi| image:: https://quay.io/repository/biocontainers/odgi/status
   :target: https://quay.io/repository/biocontainers/odgi
.. _`odgi/tags`: https://quay.io/repository/biocontainers/odgi?tab=tags


.. raw:: html

    <script>
        var package = "odgi";
        var versions = ["0.6.3","0.6.3","0.6.2","0.6.1","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/odgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/odgi/README.html