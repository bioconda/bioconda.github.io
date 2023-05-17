:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'covtobed'
.. highlight: bash

covtobed
========

.. conda:recipe:: covtobed
   :replaces_section_title:
   :noindex:

   covtobed \- generate a BED file of covered regions from a BAM file

   :homepage: https://github.com/telatin/covtobed/
   :license: MIT
   :recipe: /`covtobed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covtobed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/covtobed/meta.yaml>`_

   


.. conda:package:: covtobed

   |downloads_covtobed| |docker_covtobed|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.5-2</code>,  <code>1.3.5-1</code>,  <code>1.3.5-0</code>,  <code>1.3.3-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.4-0</code>,  </span></summary>
      

      ``1.3.5-2``,  ``1.3.5-1``,  ``1.3.5-0``,  ``1.3.3-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.6-0``,  ``0.4-0``,  ``0.3-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install covtobed

   and update with::

      conda update covtobed

   or use the docker container::

      docker pull quay.io/biocontainers/covtobed:<tag>

   (see `covtobed/tags`_ for valid values for ``<tag>``)


.. |downloads_covtobed| image:: https://img.shields.io/conda/dn/bioconda/covtobed.svg?style=flat
   :target: https://anaconda.org/bioconda/covtobed
   :alt:   (downloads)
.. |docker_covtobed| image:: https://quay.io/repository/biocontainers/covtobed/status
   :target: https://quay.io/repository/biocontainers/covtobed
.. _`covtobed/tags`: https://quay.io/repository/biocontainers/covtobed?tab=tags


.. raw:: html

    <script>
        var package = "covtobed";
        var versions = ["1.3.5","1.3.5","1.3.5","1.3.3","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/covtobed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/covtobed/README.html