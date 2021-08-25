:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alfred'
.. highlight: bash

alfred
======

.. conda:recipe:: alfred
   :replaces_section_title:
   :noindex:

   BAM alignment statistics\, feature counting and feature annotation

   :homepage: https://github.com/tobiasrausch/alfred
   :license: BSD / BSD License
   :recipe: /`alfred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alfred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alfred/meta.yaml>`_

   


.. conda:package:: alfred

   |downloads_alfred| |docker_alfred|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.3-1</code>,  <code>0.2.3-0</code>,  <code>0.2.1-2</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  <code>0.1.19-0</code>,  <code>0.1.18-0</code>,  <code>0.1.17-2</code>,  <code>0.1.17-1</code>,  </span></summary>
      

      ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1.19-0``,  ``0.1.18-0``,  ``0.1.17-2``,  ``0.1.17-1``,  ``0.1.17-0``,  ``0.1.16-1``,  ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.13-0``,  ``0.1.12-1``,  ``0.1.12-0``,  ``0.1.9-0``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-2``,  ``0.1.5-4``,  ``0.1.5-3``,  ``0.1.5-2``,  ``0.1.5-1``,  ``0.1.3-4``,  ``0.1.3-3``,  ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.2-4``,  ``0.1.2-3``,  ``0.1.2-2``,  ``0.1.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install alfred

   and update with::

      conda update alfred

   or use the docker container::

      docker pull quay.io/biocontainers/alfred:<tag>

   (see `alfred/tags`_ for valid values for ``<tag>``)


.. |downloads_alfred| image:: https://img.shields.io/conda/dn/bioconda/alfred.svg?style=flat
   :target: https://anaconda.org/bioconda/alfred
   :alt:   (downloads)
.. |docker_alfred| image:: https://quay.io/repository/biocontainers/alfred/status
   :target: https://quay.io/repository/biocontainers/alfred
.. _`alfred/tags`: https://quay.io/repository/biocontainers/alfred?tab=tags


.. raw:: html

    <script>
        var package = "alfred";
        var versions = ["0.2.3","0.2.3","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alfred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alfred/README.html