:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arriba'
.. highlight: bash

arriba
======

.. conda:recipe:: arriba
   :replaces_section_title:
   :noindex:

   Fast and accurate gene fusion detection from RNA\-Seq data

   :homepage: https://github.com/suhrig/arriba
   :license: MIT
   :recipe: /`arriba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arriba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arriba/meta.yaml>`_

   


.. conda:package:: arriba

   |downloads_arriba| |docker_arriba|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-1</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.2.0-2</code>,  </span></summary>
      

      ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-genomicranges: 
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=3.3.0``
   :depends r-circlize: 
   :depends samtools: ``>=1.9``
   :depends star: ``>=2.7.10a``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arriba

   and update with::

      conda update arriba

   or use the docker container::

      docker pull quay.io/biocontainers/arriba:<tag>

   (see `arriba/tags`_ for valid values for ``<tag>``)


.. |downloads_arriba| image:: https://img.shields.io/conda/dn/bioconda/arriba.svg?style=flat
   :target: https://anaconda.org/bioconda/arriba
   :alt:   (downloads)
.. |docker_arriba| image:: https://quay.io/repository/biocontainers/arriba/status
   :target: https://quay.io/repository/biocontainers/arriba
.. _`arriba/tags`: https://quay.io/repository/biocontainers/arriba?tab=tags


.. raw:: html

    <script>
        var package = "arriba";
        var versions = ["2.2.1","2.2.1","2.2.0","2.1.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arriba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arriba/README.html