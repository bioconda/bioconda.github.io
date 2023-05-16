:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sparc'
.. highlight: bash

sparc
=====

.. conda:recipe:: sparc
   :replaces_section_title:
   :noindex:

   A sparsity\-based consensus algorithm for long erroneous sequencing reads.

   :homepage: https://github.com/yechengxi/Sparc
   :license: MIT
   :recipe: /`sparc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparc/meta.yaml>`_

   


.. conda:package:: sparc

   |downloads_sparc| |docker_sparc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20160205-10</code>,  <code>20160205-9</code>,  <code>20160205-8</code>,  <code>20160205-7</code>,  <code>20160205-6</code>,  <code>20160205-5</code>,  <code>20160205-4</code>,  <code>20160205-3</code>,  <code>20160205-2</code>,  </span></summary>
      

      ``20160205-10``,  ``20160205-9``,  ``20160205-8``,  ``20160205-7``,  ``20160205-6``,  ``20160205-5``,  ``20160205-4``,  ``20160205-3``,  ``20160205-2``,  ``20160205-1``,  ``20160205-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sparc

   and update with::

      conda update sparc

   or use the docker container::

      docker pull quay.io/biocontainers/sparc:<tag>

   (see `sparc/tags`_ for valid values for ``<tag>``)


.. |downloads_sparc| image:: https://img.shields.io/conda/dn/bioconda/sparc.svg?style=flat
   :target: https://anaconda.org/bioconda/sparc
   :alt:   (downloads)
.. |docker_sparc| image:: https://quay.io/repository/biocontainers/sparc/status
   :target: https://quay.io/repository/biocontainers/sparc
.. _`sparc/tags`: https://quay.io/repository/biocontainers/sparc?tab=tags


.. raw:: html

    <script>
        var package = "sparc";
        var versions = ["20160205","20160205","20160205","20160205","20160205"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sparc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sparc/README.html