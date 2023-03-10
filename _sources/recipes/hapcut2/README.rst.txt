:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hapcut2'
.. highlight: bash

hapcut2
=======

.. conda:recipe:: hapcut2
   :replaces_section_title:
   :noindex:

   Tools for haplotype assembly from sequence data

   :homepage: https://github.com/vibansal/HapCUT2/
   :license: BSD-2-Clause
   :recipe: /`hapcut2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapcut2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapcut2/meta.yaml>`_

   


.. conda:package:: hapcut2

   |downloads_hapcut2| |docker_hapcut2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.3-4</code>,  <code>1.3.3-3</code>,  <code>1.3.3-2</code>,  <code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  <code>1.2-1</code>,  <code>1.2-0</code>,  </span></summary>
      

      ``1.3.3-4``,  ``1.3.3-3``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.2-1``,  ``1.2-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pysam: 
   :depends python: ``>=3.5``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hapcut2

   and update with::

      conda update hapcut2

   or use the docker container::

      docker pull quay.io/biocontainers/hapcut2:<tag>

   (see `hapcut2/tags`_ for valid values for ``<tag>``)


.. |downloads_hapcut2| image:: https://img.shields.io/conda/dn/bioconda/hapcut2.svg?style=flat
   :target: https://anaconda.org/bioconda/hapcut2
   :alt:   (downloads)
.. |docker_hapcut2| image:: https://quay.io/repository/biocontainers/hapcut2/status
   :target: https://quay.io/repository/biocontainers/hapcut2
.. _`hapcut2/tags`: https://quay.io/repository/biocontainers/hapcut2?tab=tags


.. raw:: html

    <script>
        var package = "hapcut2";
        var versions = ["1.3.3","1.3.3","1.3.3","1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hapcut2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hapcut2/README.html