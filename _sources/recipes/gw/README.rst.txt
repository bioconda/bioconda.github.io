:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gw'
.. highlight: bash

gw
==

.. conda:recipe:: gw
   :replaces_section_title:
   :noindex:

   View genomic sequencing data and vcf files

   :homepage: https://github.com/kcleal/gw
   :license: MIT
   :recipe: /`gw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gw/meta.yaml>`_

   


.. conda:package:: gw

   |downloads_gw| |docker_gw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.3-0</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.4.0-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.4.3-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.8-0``,  ``0.1.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends fontconfig: ``>=2.13.96,<3.0a0``
   :depends fonts-conda-ecosystem: 
   :depends freetype: ``>=2.12.1,<3.0a0``
   :depends glfw: 
   :depends htslib: ``>=1.16,<1.17.0a0``
   :depends libcurl: ``>=7.87.0,<8.0a0``
   :depends libdeflate: ``>=1.13,<1.14.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gw

   and update with::

      conda update gw

   or use the docker container::

      docker pull quay.io/biocontainers/gw:<tag>

   (see `gw/tags`_ for valid values for ``<tag>``)


.. |downloads_gw| image:: https://img.shields.io/conda/dn/bioconda/gw.svg?style=flat
   :target: https://anaconda.org/bioconda/gw
   :alt:   (downloads)
.. |docker_gw| image:: https://quay.io/repository/biocontainers/gw/status
   :target: https://quay.io/repository/biocontainers/gw
.. _`gw/tags`: https://quay.io/repository/biocontainers/gw?tab=tags


.. raw:: html

    <script>
        var package = "gw";
        var versions = ["0.4.3","0.4.2","0.4.2","0.4.0","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gw/README.html