:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sambamba'
.. highlight: bash

sambamba
========

.. conda:recipe:: sambamba
   :replaces_section_title:
   :noindex:

   Tools for working with SAM\/BAM data

   :homepage: https://github.com/biod/sambamba
   :documentation: https://lomereiter.github.io/sambamba/docs/sambamba-view.html
   
   :license: GPL2 / GPL2
   :recipe: /`sambamba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sambamba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sambamba/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv098`

   


.. conda:package:: sambamba

   |downloads_sambamba| |docker_sambamba|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-0</code>,  <code>0.8.2-2</code>,  <code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.1-3</code>,  <code>0.7.1-2</code>,  <code>0.7.1-1</code>,  <code>0.7.1-0</code>,  </span></summary>
      

      ``1.0-0``,  ``0.8.2-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-3``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.9-0``,  ``0.6.8-2``,  ``0.6.8-1``,  ``0.6.8-0``,  ``0.6.6-2``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.9-1``,  ``0.5.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends ldc: ``>=1.28.1,<1.29.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends lz4-c: ``>=1.9.3,<1.10.0a0``
   :depends xz: ``>=5.2.6,<5.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sambamba

   and update with::

      conda update sambamba

   or use the docker container::

      docker pull quay.io/biocontainers/sambamba:<tag>

   (see `sambamba/tags`_ for valid values for ``<tag>``)


.. |downloads_sambamba| image:: https://img.shields.io/conda/dn/bioconda/sambamba.svg?style=flat
   :target: https://anaconda.org/bioconda/sambamba
   :alt:   (downloads)
.. |docker_sambamba| image:: https://quay.io/repository/biocontainers/sambamba/status
   :target: https://quay.io/repository/biocontainers/sambamba
.. _`sambamba/tags`: https://quay.io/repository/biocontainers/sambamba?tab=tags


.. raw:: html

    <script>
        var package = "sambamba";
        var versions = ["1.0","0.8.2","0.8.1","0.8.1","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sambamba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sambamba/README.html