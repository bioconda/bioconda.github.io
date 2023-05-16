:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poppunk'
.. highlight: bash

poppunk
=======

.. conda:recipe:: poppunk
   :replaces_section_title:
   :noindex:

   PopPUNK \(POPulation Partitioning Using Nucleotide Kmers\)

   :homepage: https://www.poppunk.net
   :license: APACHE / Apache-2.0
   :recipe: /`poppunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poppunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poppunk/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.241455.118`

   


.. conda:package:: poppunk

   |downloads_poppunk| |docker_poppunk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.5.0-0</code>,  <code>2.4.0-2</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.3.0-0</code>,  <code>2.2.0-0</code>,  <code>2.1.1-0</code>,  </span></summary>
      

      ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends biopython: 
   :depends dendropy: ``>=4.4.0``
   :depends graph-tool: ``>=2.35``
   :depends h5py: 
   :depends hdbscan: 
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.2.0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mandrake: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends pp-sketchlib: ``>=2.0.1``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends rapidnj: 
   :depends requests: 
   :depends scikit-learn: ``>=0.24``
   :depends scipy: 
   :depends tqdm: 
   :depends treeswift: 
   :depends xorg-libxaw: 
   :depends xorg-libxcomposite: 
   :depends xorg-libxcursor: 
   :depends xorg-libxdamage: 
   :depends xorg-libxfixes: 
   :depends xorg-libxi: 
   :depends xorg-libxinerama: 
   :depends xorg-libxpm: 
   :depends xorg-libxrandr: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install poppunk

   and update with::

      conda update poppunk

   or use the docker container::

      docker pull quay.io/biocontainers/poppunk:<tag>

   (see `poppunk/tags`_ for valid values for ``<tag>``)


.. |downloads_poppunk| image:: https://img.shields.io/conda/dn/bioconda/poppunk.svg?style=flat
   :target: https://anaconda.org/bioconda/poppunk
   :alt:   (downloads)
.. |docker_poppunk| image:: https://quay.io/repository/biocontainers/poppunk/status
   :target: https://quay.io/repository/biocontainers/poppunk
.. _`poppunk/tags`: https://quay.io/repository/biocontainers/poppunk?tab=tags


.. raw:: html

    <script>
        var package = "poppunk";
        var versions = ["2.6.0","2.6.0","2.5.0","2.4.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poppunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poppunk/README.html