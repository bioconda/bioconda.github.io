:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qtlseq'
.. highlight: bash

qtlseq
======

.. conda:recipe:: qtlseq
   :replaces_section_title:
   :noindex:

   QTL\-seq\: pipeline to identify causative mutations responsible for a phenotype

   :homepage: https://github.com/YuSugihara/QTL-seq
   :license: GPL / GPL-3.0-or-later
   :recipe: /`qtlseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qtlseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qtlseq/meta.yaml>`_
   :links: biotools: :biotools:`qtlseq`, doi: :doi:`10.1111/tpj.12105`

   


.. conda:package:: qtlseq

   |downloads_qtlseq| |docker_qtlseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.7-0</code>,  <code>2.0.6-0</code>,  </span></summary>
      

      ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``>=1.7``
   :depends bwa: 
   :depends htslib: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.5``
   :depends samtools: ``>=1.7``
   :depends seaborn: 
   :depends snpeff: 
   :depends trimmomatic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qtlseq

   and update with::

      conda update qtlseq

   or use the docker container::

      docker pull quay.io/biocontainers/qtlseq:<tag>

   (see `qtlseq/tags`_ for valid values for ``<tag>``)


.. |downloads_qtlseq| image:: https://img.shields.io/conda/dn/bioconda/qtlseq.svg?style=flat
   :target: https://anaconda.org/bioconda/qtlseq
   :alt:   (downloads)
.. |docker_qtlseq| image:: https://quay.io/repository/biocontainers/qtlseq/status
   :target: https://quay.io/repository/biocontainers/qtlseq
.. _`qtlseq/tags`: https://quay.io/repository/biocontainers/qtlseq?tab=tags


.. raw:: html

    <script>
        var package = "qtlseq";
        var versions = ["2.2.3","2.2.2","2.2.0","2.2.0","2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qtlseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qtlseq/README.html