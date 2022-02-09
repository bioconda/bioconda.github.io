:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bowtie2'
.. highlight: bash

bowtie2
=======

.. conda:recipe:: bowtie2
   :replaces_section_title:
   :noindex:

   Fast and sensitive gapped read alignment

   :homepage: http://bowtie-bio.sourceforge.net/bowtie2/index.shtml
   :license: GPL-3.0-only
   :recipe: /`bowtie2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bowtie2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bowtie2/meta.yaml>`_
   :links: biotools: :biotools:`bowtie2`, doi: :doi:`10.1038/nmeth.1923`, debian: :debian:`bowtie2`, usegalaxy-eu: :usegalaxy-eu:`bowtie2`

   


.. conda:package:: bowtie2

   |downloads_bowtie2| |docker_bowtie2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.5-1</code>,  <code>2.4.5-0</code>,  <code>2.4.4-1</code>,  <code>2.4.4-0</code>,  <code>2.4.3-0</code>,  <code>2.4.2-2</code>,  <code>2.4.2-1</code>,  <code>2.4.2-0</code>,  <code>2.4.1-3</code>,  </span></summary>
      

      ``2.4.5-1``,  ``2.4.5-0``,  ``2.4.4-1``,  ``2.4.4-0``,  ``2.4.3-0``,  ``2.4.2-2``,  ``2.4.2-1``,  ``2.4.2-0``,  ``2.4.1-3``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.3.5.1-0``,  ``2.3.5-0``,  ``2.3.4.3-1``,  ``2.3.4.3-0``,  ``2.3.4.2-0``,  ``2.3.4.1-1``,  ``2.3.4.1-0``,  ``2.3.4-0``,  ``2.3.3.1-0``,  ``2.3.2-1``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.8-2``,  ``2.2.8-1``,  ``2.2.8-0``,  ``2.2.7-1``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.5-8``,  ``2.2.5-7``,  ``2.2.5-6``,  ``2.2.5-5``,  ``2.2.5-4``,  ``2.2.5-3``,  ``2.2.5-2``,  ``2.2.5-1``,  ``2.2.4-8``,  ``2.2.4-7``,  ``2.2.4-6``,  ``2.2.4-5``,  ``2.2.4-4``,  ``2.2.4-3``,  ``2.2.4-2``,  ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.1-5``,  ``2.2.1-4``,  ``2.2.1-3``,  ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends perl: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends tbb: ``>=2020.2,<2021.0.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :depends zstd: ``>=1.5.2,<1.6.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bowtie2

   and update with::

      conda update bowtie2

   or use the docker container::

      docker pull quay.io/biocontainers/bowtie2:<tag>

   (see `bowtie2/tags`_ for valid values for ``<tag>``)


.. |downloads_bowtie2| image:: https://img.shields.io/conda/dn/bioconda/bowtie2.svg?style=flat
   :target: https://anaconda.org/bioconda/bowtie2
   :alt:   (downloads)
.. |docker_bowtie2| image:: https://quay.io/repository/biocontainers/bowtie2/status
   :target: https://quay.io/repository/biocontainers/bowtie2
.. _`bowtie2/tags`: https://quay.io/repository/biocontainers/bowtie2?tab=tags


.. raw:: html

    <script>
        var package = "bowtie2";
        var versions = ["2.4.5","2.4.5","2.4.4","2.4.4","2.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bowtie2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bowtie2/README.html