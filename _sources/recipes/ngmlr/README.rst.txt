:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngmlr'
.. highlight: bash

ngmlr
=====

.. conda:recipe:: ngmlr
   :replaces_section_title:
   :noindex:

   ngmlr is a long\-read mapper designed to align PacBio or Oxford Nanopore reads to a reference genome and optimized for structural variation detection

   :homepage: https://github.com/philres/ngmlr
   :license: MIT
   :recipe: /`ngmlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmlr/meta.yaml>`_

   


.. conda:package:: ngmlr

   |downloads_ngmlr| |docker_ngmlr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.7-6</code>,  <code>0.2.7-5</code>,  <code>0.2.7-4</code>,  <code>0.2.7-3</code>,  <code>0.2.7-2</code>,  <code>0.2.7-1</code>,  <code>0.2.7-0</code>,  <code>0.2.6-1</code>,  <code>0.2.6-0</code>,  </span></summary>
      

      ``0.2.7-6``,  ``0.2.7-5``,  ``0.2.7-4``,  ``0.2.7-3``,  ``0.2.7-2``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngmlr

   and update with::

      conda update ngmlr

   or use the docker container::

      docker pull quay.io/biocontainers/ngmlr:<tag>

   (see `ngmlr/tags`_ for valid values for ``<tag>``)


.. |downloads_ngmlr| image:: https://img.shields.io/conda/dn/bioconda/ngmlr.svg?style=flat
   :target: https://anaconda.org/bioconda/ngmlr
   :alt:   (downloads)
.. |docker_ngmlr| image:: https://quay.io/repository/biocontainers/ngmlr/status
   :target: https://quay.io/repository/biocontainers/ngmlr
.. _`ngmlr/tags`: https://quay.io/repository/biocontainers/ngmlr?tab=tags


.. raw:: html

    <script>
        var package = "ngmlr";
        var versions = ["0.2.7","0.2.7","0.2.7","0.2.7","0.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngmlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngmlr/README.html