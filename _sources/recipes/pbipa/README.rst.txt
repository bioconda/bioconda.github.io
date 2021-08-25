:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbipa'
.. highlight: bash

pbipa
=====

.. conda:recipe:: pbipa
   :replaces_section_title:
   :noindex:

   Improved Phased Assembly

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD 3-Clause Clear License
   :recipe: /`pbipa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbipa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbipa/meta.yaml>`_

   


.. conda:package:: pbipa

   |downloads_pbipa| |docker_pbipa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.2-0</code>,  <code>1.0.5-0</code>,  </span></summary>
      

      ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.0.5-0``,  ``1.0.3-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.10``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends minimap2: 
   :depends networkx: 
   :depends pb-falconc: 
   :depends pbmm2: 
   :depends pcre: ``>=8.44,<9.0a0``
   :depends racon: 
   :depends samtools: ``>=1.10``
   :depends snakemake-minimal: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbipa

   and update with::

      conda update pbipa

   or use the docker container::

      docker pull quay.io/biocontainers/pbipa:<tag>

   (see `pbipa/tags`_ for valid values for ``<tag>``)


.. |downloads_pbipa| image:: https://img.shields.io/conda/dn/bioconda/pbipa.svg?style=flat
   :target: https://anaconda.org/bioconda/pbipa
   :alt:   (downloads)
.. |docker_pbipa| image:: https://quay.io/repository/biocontainers/pbipa/status
   :target: https://quay.io/repository/biocontainers/pbipa
.. _`pbipa/tags`: https://quay.io/repository/biocontainers/pbipa?tab=tags


.. raw:: html

    <script>
        var package = "pbipa";
        var versions = ["1.3.2","1.3.1","1.3.0","1.3.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbipa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbipa/README.html