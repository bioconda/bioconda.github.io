:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-bits'
.. highlight: bash

ngs-bits
========

.. conda:recipe:: ngs-bits
   :replaces_section_title:
   :noindex:

   Short\-read sequencing tools

   :homepage: https://github.com/imgag/ngs-bits
   :license: MIT license
   :recipe: /`ngs-bits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-bits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-bits/meta.yaml>`_

   


.. conda:package:: ngs-bits

   |downloads_ngs-bits| |docker_ngs-bits|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2021_12-2</code>,  <code>2021_12-1</code>,  <code>2021_12-0</code>,  <code>2021_09-0</code>,  <code>2021_06-0</code>,  <code>2021_03-1</code>,  <code>2021_03-0</code>,  <code>2020_12-0</code>,  <code>2020_09-0</code>,  </span></summary>
      

      ``2021_12-2``,  ``2021_12-1``,  ``2021_12-0``,  ``2021_09-0``,  ``2021_06-0``,  ``2021_03-1``,  ``2021_03-0``,  ``2020_12-0``,  ``2020_09-0``,  ``2020_06-0``,  ``2020_03-0``,  ``2019_11-0``,  ``2019_09-0``,  ``2019_08-0``,  ``2019_07-0``,  ``2019_05-0``,  ``2019_04-0``,  ``2019_03-0``,  ``2018_11-2``,  ``2018_10-2``,  ``2018_06-2``,  ``2018_06-1``,  ``2018_04-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends matplotlib-base: 
   :depends python: 
   :depends qt: ``>=5.12.9,<5.13.0a0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngs-bits

   and update with::

      conda update ngs-bits

   or use the docker container::

      docker pull quay.io/biocontainers/ngs-bits:<tag>

   (see `ngs-bits/tags`_ for valid values for ``<tag>``)


.. |downloads_ngs-bits| image:: https://img.shields.io/conda/dn/bioconda/ngs-bits.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-bits
   :alt:   (downloads)
.. |docker_ngs-bits| image:: https://quay.io/repository/biocontainers/ngs-bits/status
   :target: https://quay.io/repository/biocontainers/ngs-bits
.. _`ngs-bits/tags`: https://quay.io/repository/biocontainers/ngs-bits?tab=tags


.. raw:: html

    <script>
        var package = "ngs-bits";
        var versions = ["2021_12","2021_12","2021_12","2021_09","2021_06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-bits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-bits/README.html