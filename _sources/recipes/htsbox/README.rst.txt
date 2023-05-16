:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htsbox'
.. highlight: bash

htsbox
======

.. conda:recipe:: htsbox
   :replaces_section_title:
   :noindex:

   HTSbox is a fork of early HTSlib. It is a collection of small experimental tools manipulating HTS\-related files.

   :homepage: https://github.com/lh3/htsbox
   :license: Unknown
   :recipe: /`htsbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsbox/meta.yaml>`_

   


.. conda:package:: htsbox

   |downloads_htsbox| |docker_htsbox|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>r346-4</code>,  <code>r346-3</code>,  <code>r346-2</code>,  <code>r346-1</code>,  <code>r346-0</code>,  <code>r340-2</code>,  <code>r340-1</code>,  <code>r340-0</code>,  <code>r327-0</code>,  </span></summary>
      

      ``r346-4``,  ``r346-3``,  ``r346-2``,  ``r346-1``,  ``r346-0``,  ``r340-2``,  ``r340-1``,  ``r340-0``,  ``r327-0``,  ``r315-4``,  ``r315-3``,  ``r315-2``,  ``r315-1``,  ``r315-0``,  ``r312-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install htsbox

   and update with::

      conda update htsbox

   or use the docker container::

      docker pull quay.io/biocontainers/htsbox:<tag>

   (see `htsbox/tags`_ for valid values for ``<tag>``)


.. |downloads_htsbox| image:: https://img.shields.io/conda/dn/bioconda/htsbox.svg?style=flat
   :target: https://anaconda.org/bioconda/htsbox
   :alt:   (downloads)
.. |docker_htsbox| image:: https://quay.io/repository/biocontainers/htsbox/status
   :target: https://quay.io/repository/biocontainers/htsbox
.. _`htsbox/tags`: https://quay.io/repository/biocontainers/htsbox?tab=tags


.. raw:: html

    <script>
        var package = "htsbox";
        var versions = ["r346","r346","r346","r346","r346"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htsbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htsbox/README.html