:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unicycler'
.. highlight: bash

unicycler
=========

.. conda:recipe:: unicycler
   :replaces_section_title:
   :noindex:

   Hybrid assembly pipeline for bacterial genomes

   :homepage: https://github.com/rrwick/Unicycler
   :license: GPL / GPL-3.0
   :recipe: /`unicycler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unicycler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unicycler/meta.yaml>`_
   :links: biotools: :biotools:`unicycler`, usegalaxy-eu: :usegalaxy-eu:`unicycler`

   


.. conda:package:: unicycler

   |downloads_unicycler| |docker_unicycler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.8-4</code>,  <code>0.4.8-3</code>,  <code>0.4.8-2</code>,  <code>0.4.8-1</code>,  <code>0.4.8-0</code>,  <code>0.4.7-1</code>,  <code>0.4.7-0</code>,  <code>0.4.6-0</code>,  <code>0.4.4-4</code>,  </span></summary>
      

      ``0.4.8-4``,  ``0.4.8-3``,  ``0.4.8-2``,  ``0.4.8-1``,  ``0.4.8-0``,  ``0.4.7-1``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.4-4``,  ``0.4.4-3``,  ``0.4.4-2``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.1-0``,  ``0.3.0b-1``,  ``0.3.0b-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends bowtie2: 
   :depends freebayes: 
   :depends libcxx: ``>=11.1.0``
   :depends miniasm: 
   :depends openjdk: 
   :depends pilon: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends racon: 
   :depends samtools: ``>=1.0``
   :depends spades: ``>=3.6.2``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unicycler

   and update with::

      conda update unicycler

   or use the docker container::

      docker pull quay.io/biocontainers/unicycler:<tag>

   (see `unicycler/tags`_ for valid values for ``<tag>``)


.. |downloads_unicycler| image:: https://img.shields.io/conda/dn/bioconda/unicycler.svg?style=flat
   :target: https://anaconda.org/bioconda/unicycler
   :alt:   (downloads)
.. |docker_unicycler| image:: https://quay.io/repository/biocontainers/unicycler/status
   :target: https://quay.io/repository/biocontainers/unicycler
.. _`unicycler/tags`: https://quay.io/repository/biocontainers/unicycler?tab=tags


.. raw:: html

    <script>
        var package = "unicycler";
        var versions = ["0.4.8","0.4.8","0.4.8","0.4.8","0.4.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unicycler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unicycler/README.html