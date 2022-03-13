:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'whatshap'
.. highlight: bash

whatshap
========

.. conda:recipe:: whatshap
   :replaces_section_title:
   :noindex:

   phase genomic variants using DNA sequencing reads \(haplotype assembly\)

   :homepage: https://whatshap.readthedocs.io/
   :license: MIT License
   :recipe: /`whatshap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatshap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatshap/meta.yaml>`_
   :links: biotools: :biotools:`whatshap`, doi: :doi:`10.1089/cmb.2014.0157`

   


.. conda:package:: whatshap

   |downloads_whatshap| |docker_whatshap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3-1</code>,  <code>1.3-0</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.1-1</code>,  <code>1.1-0</code>,  <code>1.0-1</code>,  <code>1.0-0</code>,  <code>0.18-0</code>,  </span></summary>
      

      ``1.3-1``,  ``1.3-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.18-0``,  ``0.17-0``,  ``0.16-0``,  ``0.15-0``,  ``0.14.1-0``,  ``0.13-0``,  ``0.12-0``,  ``0.11-0``,  ``0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.73``
   :depends dataclasses: 
   :depends htslib: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends networkx: ``>=2.4``
   :depends pyfaidx: ``>=0.5.5.2``
   :depends pysam: ``>=0.17``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends scipy: 
   :depends setuptools: 
   :depends xopen: ``>=1.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install whatshap

   and update with::

      conda update whatshap

   or use the docker container::

      docker pull quay.io/biocontainers/whatshap:<tag>

   (see `whatshap/tags`_ for valid values for ``<tag>``)


.. |downloads_whatshap| image:: https://img.shields.io/conda/dn/bioconda/whatshap.svg?style=flat
   :target: https://anaconda.org/bioconda/whatshap
   :alt:   (downloads)
.. |docker_whatshap| image:: https://quay.io/repository/biocontainers/whatshap/status
   :target: https://quay.io/repository/biocontainers/whatshap
.. _`whatshap/tags`: https://quay.io/repository/biocontainers/whatshap?tab=tags


.. raw:: html

    <script>
        var package = "whatshap";
        var versions = ["1.3","1.3","1.2.1","1.2.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/whatshap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/whatshap/README.html