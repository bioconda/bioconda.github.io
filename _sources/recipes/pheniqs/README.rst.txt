:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pheniqs'
.. highlight: bash

pheniqs
=======

.. conda:recipe:: pheniqs
   :replaces_section_title:
   :noindex:

   Pheniqs is a flexible generic barcode classifier for high\-throughput next\-gen sequencing written in multi threaded C\+\+11. It caters to a wide variety of experimental designs by addressing multiple combinatorial index tags in arbitrary locations along reads. Pheniqs implements a noise and quality aware probabilistic classifier with improved accuracy over standard edit distance methods and reports classification quality in standard SAM auxiliary tags. Please not configuation syntax has slightly changed for 2.1.x version.

   :homepage: http://biosails.github.io/pheniqs
   :developer docs: https://github.com/biosails/pheniqs
   :license: GPL3
   :recipe: /`pheniqs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pheniqs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pheniqs/meta.yaml>`_

   


.. conda:package:: pheniqs

   |downloads_pheniqs| |docker_pheniqs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-7</code>,  <code>2.1.0-6</code>,  <code>2.1.0-5</code>,  <code>2.1.0-4</code>,  <code>2.1.0-3</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.6-3</code>,  </span></summary>
      

      ``2.1.0-7``,  ``2.1.0-6``,  ``2.1.0-5``,  ``2.1.0-4``,  ``2.1.0-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.6-3``,  ``2.0.6-2``,  ``2.0.6-1``,  ``2.0.6-0``,  ``2.0.3-1``,  ``2.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends rapidjson: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pheniqs

   and update with::

      conda update pheniqs

   or use the docker container::

      docker pull quay.io/biocontainers/pheniqs:<tag>

   (see `pheniqs/tags`_ for valid values for ``<tag>``)


.. |downloads_pheniqs| image:: https://img.shields.io/conda/dn/bioconda/pheniqs.svg?style=flat
   :target: https://anaconda.org/bioconda/pheniqs
   :alt:   (downloads)
.. |docker_pheniqs| image:: https://quay.io/repository/biocontainers/pheniqs/status
   :target: https://quay.io/repository/biocontainers/pheniqs
.. _`pheniqs/tags`: https://quay.io/repository/biocontainers/pheniqs?tab=tags


.. raw:: html

    <script>
        var package = "pheniqs";
        var versions = ["2.1.0","2.1.0","2.1.0","2.1.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pheniqs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pheniqs/README.html