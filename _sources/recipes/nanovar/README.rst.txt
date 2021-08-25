:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanovar'
.. highlight: bash

nanovar
=======

.. conda:recipe:: nanovar
   :replaces_section_title:
   :noindex:

   Structural variant caller using low\-depth long reads

   :homepage: https://github.com/cytham/nanovar
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`nanovar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanovar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanovar/meta.yaml>`_

   


.. conda:package:: nanovar

   |downloads_nanovar| |docker_nanovar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.9-1</code>,  <code>1.3.9-0</code>,  <code>1.3.8-1</code>,  <code>1.3.8-0</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.4-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  </span></summary>
      

      ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8-1``,  ``1.3.8-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: ``>=2.26.0``
   :depends biopython: ``>=1.74``
   :depends blast: ``>=2.5.0``
   :depends hs-blastn: ``>=0.0.5``
   :depends libgcc-ng: ``>=9.3.0``
   :depends matplotlib-base: ``>=2.2.3``
   :depends minimap2: ``>=2.17``
   :depends natsort: ``>=6.2.0``
   :depends numpy: ``>=1.17.3``
   :depends progress: ``>=1.4``
   :depends pybedtools: ``>=0.8.2``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends samtools: ``>=1.3``
   :depends scipy: ``>=1.2.1``
   :depends tensorflow-mkl: ``>=2.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanovar

   and update with::

      conda update nanovar

   or use the docker container::

      docker pull quay.io/biocontainers/nanovar:<tag>

   (see `nanovar/tags`_ for valid values for ``<tag>``)


.. |downloads_nanovar| image:: https://img.shields.io/conda/dn/bioconda/nanovar.svg?style=flat
   :target: https://anaconda.org/bioconda/nanovar
   :alt:   (downloads)
.. |docker_nanovar| image:: https://quay.io/repository/biocontainers/nanovar/status
   :target: https://quay.io/repository/biocontainers/nanovar
.. _`nanovar/tags`: https://quay.io/repository/biocontainers/nanovar?tab=tags


.. raw:: html

    <script>
        var package = "nanovar";
        var versions = ["1.3.9","1.3.9","1.3.8","1.3.8","1.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanovar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanovar/README.html