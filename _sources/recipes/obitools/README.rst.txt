:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'obitools'
.. highlight: bash

obitools
========

.. conda:recipe:: obitools
   :replaces_section_title:
   :noindex:

   The OBITools package is a set of programs specifically designed for analyzing NGS data in a DNA metabarcoding context\, taking into account taxonomic information

   :homepage: http://metabarcoding.org/obitools
   :license: CeCILL-V2
   :recipe: /`obitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/obitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/obitools/meta.yaml>`_

   


.. conda:package:: obitools

   |downloads_obitools| |docker_obitools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.13-3</code>,  <code>1.2.13-2</code>,  <code>1.2.13-1</code>,  <code>1.2.13-0</code>,  <code>1.2.11-1</code>,  <code>1.2.11-0</code>,  <code>1.2.10-2</code>,  <code>1.2.10-1</code>,  <code>1.2.10-0</code>,  </span></summary>
      

      ``1.2.13-3``,  ``1.2.13-2``,  ``1.2.13-1``,  ``1.2.13-0``,  ``1.2.11-1``,  ``1.2.11-0``,  ``1.2.10-2``,  ``1.2.10-1``,  ``1.2.10-0``,  ``1.0.010-2``,  ``1.0.010-1``,  ``1.0.010-0``

      
      .. raw:: html

         </details>
      

   
   :depends ipython: ``>=3.0.0,<6.0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends xorg-libx11: 
   :depends xorg-libxau: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install obitools

   and update with::

      conda update obitools

   or use the docker container::

      docker pull quay.io/biocontainers/obitools:<tag>

   (see `obitools/tags`_ for valid values for ``<tag>``)


.. |downloads_obitools| image:: https://img.shields.io/conda/dn/bioconda/obitools.svg?style=flat
   :target: https://anaconda.org/bioconda/obitools
   :alt:   (downloads)
.. |docker_obitools| image:: https://quay.io/repository/biocontainers/obitools/status
   :target: https://quay.io/repository/biocontainers/obitools
.. _`obitools/tags`: https://quay.io/repository/biocontainers/obitools?tab=tags


.. raw:: html

    <script>
        var package = "obitools";
        var versions = ["1.2.13","1.2.13","1.2.13","1.2.13","1.2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/obitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/obitools/README.html