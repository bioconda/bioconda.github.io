:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'midas'
.. highlight: bash

midas
=====

.. conda:recipe:: midas
   :replaces_section_title:
   :noindex:

   An integrated pipeline for estimating strain\-level genomic variation from metagenomic data

   :homepage: https://github.com/snayfach/MIDAS
   :license: GPL / GPL-3.0
   :recipe: /`midas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/midas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/midas/meta.yaml>`_

   


.. conda:package:: midas

   |downloads_midas| |docker_midas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.2-7</code>,  <code>1.3.2-6</code>,  <code>1.3.2-5</code>,  <code>1.3.2-4</code>,  <code>1.3.2-3</code>,  <code>1.3.2-2</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  </span></summary>
      

      ``1.3.2-7``,  ``1.3.2-6``,  ``1.3.2-5``,  ``1.3.2-4``,  ``1.3.2-3``,  ``1.3.2-2``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-1``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.6.2``
   :depends bowtie2: ``2.3.2.*``
   :depends hs-blastn: 
   :depends numpy: ``>=1.7.0``
   :depends pandas: ``>=0.17.1``
   :depends pysam: ``>=0.8.1``
   :depends python: ``>=2.7``
   :depends samtools: ``1.4.0.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install midas

   and update with::

      conda update midas

   or use the docker container::

      docker pull quay.io/biocontainers/midas:<tag>

   (see `midas/tags`_ for valid values for ``<tag>``)


.. |downloads_midas| image:: https://img.shields.io/conda/dn/bioconda/midas.svg?style=flat
   :target: https://anaconda.org/bioconda/midas
   :alt:   (downloads)
.. |docker_midas| image:: https://quay.io/repository/biocontainers/midas/status
   :target: https://quay.io/repository/biocontainers/midas
.. _`midas/tags`: https://quay.io/repository/biocontainers/midas?tab=tags


.. raw:: html

    <script>
        var package = "midas";
        var versions = ["1.3.2","1.3.2","1.3.2","1.3.2","1.3.2"];
    </script>





Notes
-----
MIDAS requires reference database that needs to be additionally downloaded and set\, https\:\/\/github.com\/snayfach\/MIDAS\/blob\/master\/docs\/ref\_db.md.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/midas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/midas/README.html