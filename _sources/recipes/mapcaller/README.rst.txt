:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapcaller'
.. highlight: bash

mapcaller
=========

.. conda:recipe:: mapcaller
   :replaces_section_title:
   :noindex:

   MapCaller\: combined short\-read mapper and variant caller

   :homepage: https://github.com/hsinnan75/MapCaller
   :license: MIT
   :recipe: /`mapcaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapcaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapcaller/meta.yaml>`_
   :links: doi: :doi:`10.1101/783605`

   An efficient and versatile approach for short\-read mapping and variant identification using high\-throughput sequenced data.


.. conda:package:: mapcaller

   |downloads_mapcaller| |docker_mapcaller|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.9.41-3</code>,  <code>0.9.9.41-2</code>,  <code>0.9.9.41-1</code>,  <code>0.9.9.41-0</code>,  <code>0.9.9.40-0</code>,  <code>0.9.9.39-0</code>,  <code>0.9.9.38-0</code>,  <code>0.9.9.37-0</code>,  <code>0.9.9.35-0</code>,  </span></summary>
      

      ``0.9.9.41-3``,  ``0.9.9.41-2``,  ``0.9.9.41-1``,  ``0.9.9.41-0``,  ``0.9.9.40-0``,  ``0.9.9.39-0``,  ``0.9.9.38-0``,  ``0.9.9.37-0``,  ``0.9.9.35-0``,  ``0.9.9.34-0``,  ``0.9.9.33-0``,  ``0.9.9.32-0``,  ``0.9.9.31-0``,  ``0.9.9.30-0``,  ``0.9.9.29-0``,  ``0.9.9.28-0``,  ``0.9.9.27-0``,  ``0.9.9.26-0``,  ``0.9.9.25-0``,  ``0.9.9.23-0``,  ``0.9.9.22-0``,  ``0.9.9.21-0``,  ``0.9.9.19-0``,  ``0.9.9.18-0``,  ``0.9.9.17-0``,  ``0.9.9.16-0``,  ``0.9.9.15-0``,  ``0.9.9.7-0``,  ``0.9.9.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<5.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mapcaller

   and update with::

      conda update mapcaller

   or use the docker container::

      docker pull quay.io/biocontainers/mapcaller:<tag>

   (see `mapcaller/tags`_ for valid values for ``<tag>``)


.. |downloads_mapcaller| image:: https://img.shields.io/conda/dn/bioconda/mapcaller.svg?style=flat
   :target: https://anaconda.org/bioconda/mapcaller
   :alt:   (downloads)
.. |docker_mapcaller| image:: https://quay.io/repository/biocontainers/mapcaller/status
   :target: https://quay.io/repository/biocontainers/mapcaller
.. _`mapcaller/tags`: https://quay.io/repository/biocontainers/mapcaller?tab=tags


.. raw:: html

    <script>
        var package = "mapcaller";
        var versions = ["0.9.9.41","0.9.9.41","0.9.9.41","0.9.9.41","0.9.9.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapcaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapcaller/README.html