:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanopolish'
.. highlight: bash

nanopolish
==========

.. conda:recipe:: nanopolish
   :replaces_section_title:
   :noindex:

   Signal\-level algorithms for MinION data.

   :homepage: https://github.com/jts/nanopolish
   :license: MIT
   :recipe: /`nanopolish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolish/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`nanopolish_eventalign`

   


.. conda:package:: nanopolish

   |downloads_nanopolish| |docker_nanopolish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.0-2</code>,  <code>0.14.0-1</code>,  <code>0.14.0-0</code>,  <code>0.13.2-10</code>,  <code>0.13.2-9</code>,  <code>0.13.2-8</code>,  <code>0.13.2-7</code>,  <code>0.13.2-6</code>,  <code>0.13.2-5</code>,  </span></summary>
      

      ``0.14.0-2``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.2-10``,  ``0.13.2-9``,  ``0.13.2-8``,  ``0.13.2-7``,  ``0.13.2-6``,  ``0.13.2-5``,  ``0.13.2-4``,  ``0.13.2-2``,  ``0.13.2-1``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.5-2``,  ``0.12.5-1``,  ``0.12.5-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.0-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.9.2-5``,  ``0.9.2-4``,  ``0.9.2-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.5-4``,  ``0.8.5-3``,  ``0.8.1-3``,  ``0.7.1-3``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.6.0.dev-0``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends biopython: 
   :depends hdf5: ``>=1.12.1,<1.12.2.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ont_vbz_hdf_plugin: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanopolish

   and update with::

      conda update nanopolish

   or use the docker container::

      docker pull quay.io/biocontainers/nanopolish:<tag>

   (see `nanopolish/tags`_ for valid values for ``<tag>``)


.. |downloads_nanopolish| image:: https://img.shields.io/conda/dn/bioconda/nanopolish.svg?style=flat
   :target: https://anaconda.org/bioconda/nanopolish
   :alt:   (downloads)
.. |docker_nanopolish| image:: https://quay.io/repository/biocontainers/nanopolish/status
   :target: https://quay.io/repository/biocontainers/nanopolish
.. _`nanopolish/tags`: https://quay.io/repository/biocontainers/nanopolish?tab=tags


.. raw:: html

    <script>
        var package = "nanopolish";
        var versions = ["0.14.0","0.14.0","0.14.0","0.13.2","0.13.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanopolish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanopolish/README.html