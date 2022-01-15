:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libsequence'
.. highlight: bash

libsequence
===========

.. conda:recipe:: libsequence
   :replaces_section_title:
   :noindex:

   A C\+\+ class library for evolutionary genetics.

   :homepage: http://http://molpopgen.github.io/libsequence/
   :license: GNU Lesser General Public License v3 or later (LGPLv3+)
   :recipe: /`libsequence <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libsequence>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libsequence/meta.yaml>`_

   


.. conda:package:: libsequence

   |downloads_libsequence| |docker_libsequence|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.8-2</code>,  <code>1.9.8-1</code>,  <code>1.9.8-0</code>,  <code>1.9.7-0</code>,  <code>1.9.6-0</code>,  <code>1.9.5-0</code>,  <code>1.9.4-0</code>,  <code>1.9.3-0</code>,  <code>1.9.2-2</code>,  </span></summary>
      

      ``1.9.8-2``,  ``1.9.8-1``,  ``1.9.8-0``,  ``1.9.7-0``,  ``1.9.6-0``,  ``1.9.5-0``,  ``1.9.4-0``,  ``1.9.3-0``,  ``1.9.2-2``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.1-1``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.4-5``,  ``1.8.4-4``,  ``1.8.4-3``,  ``1.8.4-2``,  ``1.8.4-1``,  ``1.8.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libsequence

   and update with::

      conda update libsequence

   or use the docker container::

      docker pull quay.io/biocontainers/libsequence:<tag>

   (see `libsequence/tags`_ for valid values for ``<tag>``)


.. |downloads_libsequence| image:: https://img.shields.io/conda/dn/bioconda/libsequence.svg?style=flat
   :target: https://anaconda.org/bioconda/libsequence
   :alt:   (downloads)
.. |docker_libsequence| image:: https://quay.io/repository/biocontainers/libsequence/status
   :target: https://quay.io/repository/biocontainers/libsequence
.. _`libsequence/tags`: https://quay.io/repository/biocontainers/libsequence?tab=tags


.. raw:: html

    <script>
        var package = "libsequence";
        var versions = ["1.9.8","1.9.8","1.9.8","1.9.7","1.9.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libsequence/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libsequence/README.html