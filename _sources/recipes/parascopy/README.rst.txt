:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parascopy'
.. highlight: bash

parascopy
=========

.. conda:recipe:: parascopy
   :replaces_section_title:
   :noindex:

   Calling paralog\-specific copy number and sequence variants in duplicated genes using short\-read whole\-genome sequencing.

   :homepage: https://github.com/tprodanov/parascopy
   :license: MIT
   :recipe: /`parascopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parascopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parascopy/meta.yaml>`_

   


.. conda:package:: parascopy

   |downloads_parascopy| |docker_parascopy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.7-0</code>,  <code>1.9.1-0</code>,  <code>1.7.6-0</code>,  <code>1.7.4-0</code>,  <code>1.7.3-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  </span></summary>
      

      ``1.9.7-0``,  ``1.9.1-0``,  ``1.7.6-0``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.6-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.70``
   :depends bwa: ``>=0.7``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.16,<1.17.0a0``
   :depends intervaltree: ``>=3.0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.15``
   :depends parasail-python: ``>=1.2``
   :depends pysam: ``>=0.17``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: ``>=1.11``
   :depends scipy: ``>=1.5``
   :depends simpleeval: ``>=0.9``
   :depends tabixpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install parascopy

   and update with::

      conda update parascopy

   or use the docker container::

      docker pull quay.io/biocontainers/parascopy:<tag>

   (see `parascopy/tags`_ for valid values for ``<tag>``)


.. |downloads_parascopy| image:: https://img.shields.io/conda/dn/bioconda/parascopy.svg?style=flat
   :target: https://anaconda.org/bioconda/parascopy
   :alt:   (downloads)
.. |docker_parascopy| image:: https://quay.io/repository/biocontainers/parascopy/status
   :target: https://quay.io/repository/biocontainers/parascopy
.. _`parascopy/tags`: https://quay.io/repository/biocontainers/parascopy?tab=tags


.. raw:: html

    <script>
        var package = "parascopy";
        var versions = ["1.9.7","1.9.1","1.7.6","1.7.4","1.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parascopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parascopy/README.html