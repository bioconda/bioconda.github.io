:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quasitools'
.. highlight: bash

quasitools
==========

.. conda:recipe:: quasitools
   :replaces_section_title:
   :noindex:

   Quasitools is a collection of tools for analysing Viral Quasispecies

   :homepage: https://github.com/phac-nml/quasitools/
   :license: Apache License, Version 2.0
   :recipe: /`quasitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quasitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quasitools/meta.yaml>`_

   


.. conda:package:: quasitools

   |downloads_quasitools| |docker_quasitools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.0-2</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-1</code>,  </span></summary>
      

      ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-1``,  ``0.4.0-1``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends bowtie2: 
   :depends click: 
   :depends numpy: 
   :depends pyaavf: 
   :depends pysam: ``>=0.8.1``
   :depends python: 
   :depends samtools: ``>=1.3``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quasitools

   and update with::

      conda update quasitools

   or use the docker container::

      docker pull quay.io/biocontainers/quasitools:<tag>

   (see `quasitools/tags`_ for valid values for ``<tag>``)


.. |downloads_quasitools| image:: https://img.shields.io/conda/dn/bioconda/quasitools.svg?style=flat
   :target: https://anaconda.org/bioconda/quasitools
   :alt:   (downloads)
.. |docker_quasitools| image:: https://quay.io/repository/biocontainers/quasitools/status
   :target: https://quay.io/repository/biocontainers/quasitools
.. _`quasitools/tags`: https://quay.io/repository/biocontainers/quasitools?tab=tags


.. raw:: html

    <script>
        var package = "quasitools";
        var versions = ["0.7.0","0.7.0","0.6.0","0.6.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quasitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quasitools/README.html