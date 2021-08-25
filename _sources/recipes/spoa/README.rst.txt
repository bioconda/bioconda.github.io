:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spoa'
.. highlight: bash

spoa
====

.. conda:recipe:: spoa
   :replaces_section_title:
   :noindex:

   SIMD partial order alignment tool\/library

   :homepage: https://github.com/rvaser/spoa
   :license: MIT
   :recipe: /`spoa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spoa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spoa/meta.yaml>`_

   


.. conda:package:: spoa

   |downloads_spoa| |docker_spoa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.7-1</code>,  <code>4.0.7-0</code>,  <code>4.0.6-0</code>,  <code>4.0.5-0</code>,  <code>4.0.3-0</code>,  <code>4.0.0-0</code>,  <code>3.4.0-0</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  </span></summary>
      

      ``4.0.7-1``,  ``4.0.7-0``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.3-0``,  ``4.0.0-0``,  ``3.4.0-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spoa

   and update with::

      conda update spoa

   or use the docker container::

      docker pull quay.io/biocontainers/spoa:<tag>

   (see `spoa/tags`_ for valid values for ``<tag>``)


.. |downloads_spoa| image:: https://img.shields.io/conda/dn/bioconda/spoa.svg?style=flat
   :target: https://anaconda.org/bioconda/spoa
   :alt:   (downloads)
.. |docker_spoa| image:: https://quay.io/repository/biocontainers/spoa/status
   :target: https://quay.io/repository/biocontainers/spoa
.. _`spoa/tags`: https://quay.io/repository/biocontainers/spoa?tab=tags


.. raw:: html

    <script>
        var package = "spoa";
        var versions = ["4.0.7","4.0.7","4.0.6","4.0.5","4.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spoa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spoa/README.html