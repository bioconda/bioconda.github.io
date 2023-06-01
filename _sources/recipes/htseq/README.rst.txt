:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htseq'
.. highlight: bash

htseq
=====

.. conda:recipe:: htseq
   :replaces_section_title:
   :noindex:

   HTSeq is a Python library to facilitate processing and analysis of data from high\-throughput sequencing \(HTS\) experiments.

   :homepage: https://github.com/htseq/htseq
   :license: GPL / GPL-3.0-only
   :recipe: /`htseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htseq/meta.yaml>`_
   :links: biotools: :biotools:`htseq`, usegalaxy-eu: :usegalaxy-eu:`htseq_count`, doi: :doi:`10.1093/bioinformatics/btu638`

   


.. conda:package:: htseq

   |downloads_htseq| |docker_htseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.3-0</code>,  <code>2.0.2-1</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>1.99.2-2</code>,  <code>1.99.2-1</code>,  <code>1.99.2-0</code>,  <code>0.13.5-1</code>,  <code>0.13.5-0</code>,  </span></summary>
      

      ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.99.2-2``,  ``1.99.2-1``,  ``1.99.2-0``,  ``0.13.5-1``,  ``0.13.5-0``,  ``0.12.4-2``,  ``0.12.4-1``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.11.3-0``,  ``0.11.2-1``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.9.1-4``,  ``0.9.1-3``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.7.2-4``,  ``0.7.2-3``,  ``0.7.2-2``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.6.1.post1-6``,  ``0.6.1.post1-5``,  ``0.6.1.post1-4``,  ``0.6.1-5``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.1p1-1``,  ``0.6.1p1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: ``>=1.4``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pysam: ``>=0.15.1``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install htseq

   and update with::

      conda update htseq

   or use the docker container::

      docker pull quay.io/biocontainers/htseq:<tag>

   (see `htseq/tags`_ for valid values for ``<tag>``)


.. |downloads_htseq| image:: https://img.shields.io/conda/dn/bioconda/htseq.svg?style=flat
   :target: https://anaconda.org/bioconda/htseq
   :alt:   (downloads)
.. |docker_htseq| image:: https://quay.io/repository/biocontainers/htseq/status
   :target: https://quay.io/repository/biocontainers/htseq
.. _`htseq/tags`: https://quay.io/repository/biocontainers/htseq?tab=tags


.. raw:: html

    <script>
        var package = "htseq";
        var versions = ["2.0.3","2.0.2","2.0.2","2.0.1","1.99.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htseq/README.html