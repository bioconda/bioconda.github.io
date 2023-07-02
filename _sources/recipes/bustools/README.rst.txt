:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bustools'
.. highlight: bash

bustools
========

.. conda:recipe:: bustools
   :replaces_section_title:
   :noindex:

   bustools is a program for manipulating BUS files for single cell RNA\-Seq datasets.       

   :homepage: https://github.com/BUStools/bustools
   :license: BSD 2-Clause "Simplified" License
   :recipe: /`bustools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bustools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bustools/meta.yaml>`_

   


.. conda:package:: bustools

   |downloads_bustools| |docker_bustools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.43.0-0</code>,  <code>0.42.0-2</code>,  <code>0.42.0-1</code>,  <code>0.42.0-0</code>,  <code>0.41.0-2</code>,  <code>0.41.0-1</code>,  <code>0.41.0-0</code>,  <code>0.40.0-1</code>,  <code>0.40.0-0</code>,  </span></summary>
      

      ``0.43.0-0``,  ``0.42.0-2``,  ``0.42.0-1``,  ``0.42.0-0``,  ``0.41.0-2``,  ``0.41.0-1``,  ``0.41.0-0``,  ``0.40.0-1``,  ``0.40.0-0``,  ``0.39.4-0``,  ``0.39.3-0``,  ``0.39.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends hdf5: ``>=1.12.2,<1.12.3.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bustools

   and update with::

      conda update bustools

   or use the docker container::

      docker pull quay.io/biocontainers/bustools:<tag>

   (see `bustools/tags`_ for valid values for ``<tag>``)


.. |downloads_bustools| image:: https://img.shields.io/conda/dn/bioconda/bustools.svg?style=flat
   :target: https://anaconda.org/bioconda/bustools
   :alt:   (downloads)
.. |docker_bustools| image:: https://quay.io/repository/biocontainers/bustools/status
   :target: https://quay.io/repository/biocontainers/bustools
.. _`bustools/tags`: https://quay.io/repository/biocontainers/bustools?tab=tags


.. raw:: html

    <script>
        var package = "bustools";
        var versions = ["0.43.0","0.42.0","0.42.0","0.42.0","0.41.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bustools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bustools/README.html