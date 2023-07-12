:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-wasabi'
.. highlight: bash

r-wasabi
========

.. conda:recipe:: r-wasabi
   :replaces_section_title:
   :noindex:

   Prepare Sailfish and Salmon output for downstream analysis

   :homepage: https://github.com/COMBINE-lab/wasabi
   :license: BSD-3-clause
   :recipe: /`r-wasabi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wasabi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wasabi/meta.yaml>`_

   


.. conda:package:: r-wasabi

   |downloads_r-wasabi| |docker_r-wasabi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-6</code>,  <code>1.0.1-5</code>,  <code>1.0.1-4</code>,  <code>1.0.1-3</code>,  <code>1.0.1-2</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>1.0.0-1</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rhdf5: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-rjson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-wasabi

   and update with::

      conda update r-wasabi

   or use the docker container::

      docker pull quay.io/biocontainers/r-wasabi:<tag>

   (see `r-wasabi/tags`_ for valid values for ``<tag>``)


.. |downloads_r-wasabi| image:: https://img.shields.io/conda/dn/bioconda/r-wasabi.svg?style=flat
   :target: https://anaconda.org/bioconda/r-wasabi
   :alt:   (downloads)
.. |docker_r-wasabi| image:: https://quay.io/repository/biocontainers/r-wasabi/status
   :target: https://quay.io/repository/biocontainers/r-wasabi
.. _`r-wasabi/tags`: https://quay.io/repository/biocontainers/r-wasabi?tab=tags


.. raw:: html

    <script>
        var package = "r-wasabi";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-wasabi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-wasabi/README.html