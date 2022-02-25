:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'epic2'
.. highlight: bash

epic2
=====

.. conda:recipe:: epic2
   :replaces_section_title:
   :noindex:

   Ultraperformant Chip\-Seq broad domain finder based on SICER.

   :homepage: http://github.com/endrebak/epic2
   :license: MIT
   :recipe: /`epic2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epic2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epic2/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz232`

   


.. conda:package:: epic2

   |downloads_epic2| |docker_epic2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.52-2</code>,  <code>0.0.52-1</code>,  <code>0.0.52-0</code>,  <code>0.0.51-0</code>,  <code>0.0.50-0</code>,  <code>0.0.48-1</code>,  <code>0.0.48-0</code>,  <code>0.0.47-0</code>,  <code>0.0.44-0</code>,  </span></summary>
      

      ``0.0.52-2``,  ``0.0.52-1``,  ``0.0.52-0``,  ``0.0.51-0``,  ``0.0.50-0``,  ``0.0.48-1``,  ``0.0.48-0``,  ``0.0.47-0``,  ``0.0.44-0``,  ``0.0.43-0``,  ``0.0.41-3``,  ``0.0.41-2``,  ``0.0.41-1``,  ``0.0.41-0``,  ``0.0.40-0``,  ``0.0.39-0``,  ``0.0.37-0``,  ``0.0.36-0``,  ``0.0.35-0``,  ``0.0.34-0``,  ``0.0.33-0``,  ``0.0.26-0``,  ``0.0.16-0``,  ``0.0.15-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends natsort: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install epic2

   and update with::

      conda update epic2

   or use the docker container::

      docker pull quay.io/biocontainers/epic2:<tag>

   (see `epic2/tags`_ for valid values for ``<tag>``)


.. |downloads_epic2| image:: https://img.shields.io/conda/dn/bioconda/epic2.svg?style=flat
   :target: https://anaconda.org/bioconda/epic2
   :alt:   (downloads)
.. |docker_epic2| image:: https://quay.io/repository/biocontainers/epic2/status
   :target: https://quay.io/repository/biocontainers/epic2
.. _`epic2/tags`: https://quay.io/repository/biocontainers/epic2?tab=tags


.. raw:: html

    <script>
        var package = "epic2";
        var versions = ["0.0.52","0.0.52","0.0.52","0.0.51","0.0.50"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epic2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epic2/README.html