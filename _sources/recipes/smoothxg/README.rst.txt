:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smoothxg'
.. highlight: bash

smoothxg
========

.. conda:recipe:: smoothxg
   :replaces_section_title:
   :noindex:

   Local reconstruction of variation graphs using partial order alignment

   :homepage: https://github.com/pangenome/smoothxg
   :license: MIT
   :recipe: /`smoothxg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smoothxg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smoothxg/meta.yaml>`_

   


.. conda:package:: smoothxg

   |downloads_smoothxg| |docker_smoothxg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.7-1</code>,  <code>0.6.7-0</code>,  <code>0.6.5-2</code>,  <code>0.6.5-1</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.2-1</code>,  <code>0.6.2-0</code>,  <code>0.6.1-2</code>,  </span></summary>
      

      ``0.6.7-1``,  ``0.6.7-0``,  ``0.6.5-2``,  ``0.6.5-1``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libjemalloc: ``>=5.2.1``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zstd: ``>=1.5.2,<1.6.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smoothxg

   and update with::

      conda update smoothxg

   or use the docker container::

      docker pull quay.io/biocontainers/smoothxg:<tag>

   (see `smoothxg/tags`_ for valid values for ``<tag>``)


.. |downloads_smoothxg| image:: https://img.shields.io/conda/dn/bioconda/smoothxg.svg?style=flat
   :target: https://anaconda.org/bioconda/smoothxg
   :alt:   (downloads)
.. |docker_smoothxg| image:: https://quay.io/repository/biocontainers/smoothxg/status
   :target: https://quay.io/repository/biocontainers/smoothxg
.. _`smoothxg/tags`: https://quay.io/repository/biocontainers/smoothxg?tab=tags


.. raw:: html

    <script>
        var package = "smoothxg";
        var versions = ["0.6.7","0.6.7","0.6.5","0.6.5","0.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smoothxg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smoothxg/README.html