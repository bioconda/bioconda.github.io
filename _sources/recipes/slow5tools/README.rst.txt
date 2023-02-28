:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slow5tools'
.. highlight: bash

slow5tools
==========

.. conda:recipe:: slow5tools
   :replaces_section_title:
   :noindex:

   Slow5tools is a toolkit for converting \(FAST5 \<\-\> SLOW5\)\, compressing\, viewing\, indexing and manipulating data in SLOW5 format.

   :homepage: https://github.com/hasindu2008/slow5tools
   :license: MIT
   :recipe: /`slow5tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slow5tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slow5tools/meta.yaml>`_

   


.. conda:package:: slow5tools

   |downloads_slow5tools| |docker_slow5tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-2</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends hdf5: ``>=1.12.1,<1.12.2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install slow5tools

   and update with::

      conda update slow5tools

   or use the docker container::

      docker pull quay.io/biocontainers/slow5tools:<tag>

   (see `slow5tools/tags`_ for valid values for ``<tag>``)


.. |downloads_slow5tools| image:: https://img.shields.io/conda/dn/bioconda/slow5tools.svg?style=flat
   :target: https://anaconda.org/bioconda/slow5tools
   :alt:   (downloads)
.. |docker_slow5tools| image:: https://quay.io/repository/biocontainers/slow5tools/status
   :target: https://quay.io/repository/biocontainers/slow5tools
.. _`slow5tools/tags`: https://quay.io/repository/biocontainers/slow5tools?tab=tags


.. raw:: html

    <script>
        var package = "slow5tools";
        var versions = ["0.6.0","0.6.0","0.6.0","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slow5tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slow5tools/README.html