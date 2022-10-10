:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomedata'
.. highlight: bash

genomedata
==========

.. conda:recipe:: genomedata
   :replaces_section_title:
   :noindex:

   tools for accessing large amounts of genomic data

   :homepage: http://genomedata.hoffmanlab.org/
   :license: GPL2
   :recipe: /`genomedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomedata/meta.yaml>`_
   :links: biotools: :biotools:`genomedata`, doi: :doi:`10.1093/bioinformatics/btq164`

   


.. conda:package:: genomedata

   |downloads_genomedata| |docker_genomedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-3</code>,  <code>1.5.0-2</code>,  <code>1.5.0-1</code>,  <code>1.5.0-0</code>,  <code>1.4.4-6</code>,  <code>1.4.4-5</code>,  <code>1.4.4-4</code>,  <code>1.4.4-3</code>,  <code>1.4.4-1</code>,  </span></summary>
      

      ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.4-6``,  ``1.4.4-5``,  ``1.4.4-4``,  ``1.4.4-3``,  ``1.4.4-1``,  ``1.4.4-0``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.6-0``,  ``1.3.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends hdf5: ``>=1.12.1,<1.12.2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends path.py: 
   :depends pytables: ``>=3.4.3``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends six: 
   :depends textinput: 
   :depends ucsc-bigwigtobedgraph: ``>=377``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomedata

   and update with::

      conda update genomedata

   or use the docker container::

      docker pull quay.io/biocontainers/genomedata:<tag>

   (see `genomedata/tags`_ for valid values for ``<tag>``)


.. |downloads_genomedata| image:: https://img.shields.io/conda/dn/bioconda/genomedata.svg?style=flat
   :target: https://anaconda.org/bioconda/genomedata
   :alt:   (downloads)
.. |docker_genomedata| image:: https://quay.io/repository/biocontainers/genomedata/status
   :target: https://quay.io/repository/biocontainers/genomedata
.. _`genomedata/tags`: https://quay.io/repository/biocontainers/genomedata?tab=tags


.. raw:: html

    <script>
        var package = "genomedata";
        var versions = ["1.5.0","1.5.0","1.5.0","1.5.0","1.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomedata/README.html