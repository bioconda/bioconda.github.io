:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tigmint'
.. highlight: bash

tigmint
=======

.. conda:recipe:: tigmint
   :replaces_section_title:
   :noindex:

   Correct misassemblies using linked or long reads

   :homepage: https://bcgsc.github.io/tigmint/
   :documentation: https://github.com/bcgsc/tigmint#readme
   
   :developer docs: https://github.com/bcgsc/tigmint
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`tigmint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tigmint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tigmint/meta.yaml>`_
   :links: doi: :doi:`10.1101/304253`

   


.. conda:package:: tigmint

   |downloads_tigmint| |docker_tigmint|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.10-1</code>,  <code>1.2.10-0</code>,  <code>1.2.9-2</code>,  <code>1.2.9-1</code>,  <code>1.2.9-0</code>,  <code>1.2.8-0</code>,  <code>1.2.7-0</code>,  <code>1.2.6-3</code>,  <code>1.2.6-2</code>,  </span></summary>
      

      ``1.2.10-1``,  ``1.2.10-0``,  ``1.2.9-2``,  ``1.2.9-1``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.6-3``,  ``1.2.6-2``,  ``1.2.6-1``,  ``1.2.6-0``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends btllib: 
   :depends bwa: 
   :depends intervaltree: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends make: 
   :depends minimap2: 
   :depends pybedtools: 
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
   :depends zsh: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tigmint

   and update with::

      conda update tigmint

   or use the docker container::

      docker pull quay.io/biocontainers/tigmint:<tag>

   (see `tigmint/tags`_ for valid values for ``<tag>``)


.. |downloads_tigmint| image:: https://img.shields.io/conda/dn/bioconda/tigmint.svg?style=flat
   :target: https://anaconda.org/bioconda/tigmint
   :alt:   (downloads)
.. |docker_tigmint| image:: https://quay.io/repository/biocontainers/tigmint/status
   :target: https://quay.io/repository/biocontainers/tigmint
.. _`tigmint/tags`: https://quay.io/repository/biocontainers/tigmint?tab=tags


.. raw:: html

    <script>
        var package = "tigmint";
        var versions = ["1.2.10","1.2.10","1.2.9","1.2.9","1.2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tigmint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tigmint/README.html