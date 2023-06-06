:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncls'
.. highlight: bash

ncls
====

.. conda:recipe:: ncls
   :replaces_section_title:
   :noindex:

   Fast overlap datastructure.

   :homepage: https://github.com/endrebak/ncls
   :license: BSD
   :recipe: /`ncls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncls>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncls/meta.yaml>`_

   


.. conda:package:: ncls

   |downloads_ncls| |docker_ncls|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.68-1</code>,  <code>0.0.68-0</code>,  <code>0.0.66-3</code>,  <code>0.0.66-1</code>,  <code>0.0.66-0</code>,  <code>0.0.65-1</code>,  <code>0.0.65-0</code>,  <code>0.0.64-1</code>,  <code>0.0.64-0</code>,  </span></summary>
      

      ``0.0.68-1``,  ``0.0.68-0``,  ``0.0.66-3``,  ``0.0.66-1``,  ``0.0.66-0``,  ``0.0.65-1``,  ``0.0.65-0``,  ``0.0.64-1``,  ``0.0.64-0``,  ``0.0.63-0``,  ``0.0.62-0``,  ``0.0.60-0``,  ``0.0.57-1``,  ``0.0.57-0``,  ``0.0.56-0``,  ``0.0.54-0``,  ``0.0.53-2``,  ``0.0.53-1``,  ``0.0.53-0``,  ``0.0.52-0``,  ``0.0.51-0``,  ``0.0.50-0``,  ``0.0.49-0``,  ``0.0.48-0``,  ``0.0.47-0``,  ``0.0.46-0``,  ``0.0.45-0``,  ``0.0.44-0``,  ``0.0.43-0``,  ``0.0.42-3``,  ``0.0.42-2``,  ``0.0.42-1``,  ``0.0.42-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncls

   and update with::

      conda update ncls

   or use the docker container::

      docker pull quay.io/biocontainers/ncls:<tag>

   (see `ncls/tags`_ for valid values for ``<tag>``)


.. |downloads_ncls| image:: https://img.shields.io/conda/dn/bioconda/ncls.svg?style=flat
   :target: https://anaconda.org/bioconda/ncls
   :alt:   (downloads)
.. |docker_ncls| image:: https://quay.io/repository/biocontainers/ncls/status
   :target: https://quay.io/repository/biocontainers/ncls
.. _`ncls/tags`: https://quay.io/repository/biocontainers/ncls?tab=tags


.. raw:: html

    <script>
        var package = "ncls";
        var versions = ["0.0.68","0.0.68","0.0.66","0.0.66","0.0.66"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncls/README.html