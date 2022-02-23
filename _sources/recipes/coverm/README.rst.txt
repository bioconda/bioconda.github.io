:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coverm'
.. highlight: bash

coverm
======

.. conda:recipe:: coverm
   :replaces_section_title:
   :noindex:

   CoverM aims to be a configurable\, easy to use and fast DNA read coverage and relative abundance calculator focused on metagenomics applications

   :homepage: https://github.com/wwood/CoverM
   :license: GPL3
   :recipe: /`coverm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coverm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coverm/meta.yaml>`_

   


.. conda:package:: coverm

   |downloads_coverm| |docker_coverm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-4</code>,  <code>0.6.1-3</code>,  <code>0.6.1-2</code>,  <code>0.6.1-1</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-2</code>,  <code>0.4.0-1</code>,  </span></summary>
      

      ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0.alpha7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: ``>=0.7.17``
   :depends dashing: ``>=0.4.0``
   :depends fastani: ``>=1.31``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends minimap2: ``2.17.*``
   :depends openblas: 
   :depends samtools: ``>=1.9``
   :depends starcode: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install coverm

   and update with::

      conda update coverm

   or use the docker container::

      docker pull quay.io/biocontainers/coverm:<tag>

   (see `coverm/tags`_ for valid values for ``<tag>``)


.. |downloads_coverm| image:: https://img.shields.io/conda/dn/bioconda/coverm.svg?style=flat
   :target: https://anaconda.org/bioconda/coverm
   :alt:   (downloads)
.. |docker_coverm| image:: https://quay.io/repository/biocontainers/coverm/status
   :target: https://quay.io/repository/biocontainers/coverm
.. _`coverm/tags`: https://quay.io/repository/biocontainers/coverm?tab=tags


.. raw:: html

    <script>
        var package = "coverm";
        var versions = ["0.6.1","0.6.1","0.6.1","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coverm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coverm/README.html