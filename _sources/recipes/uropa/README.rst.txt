:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'uropa'
.. highlight: bash

uropa
=====

.. conda:recipe:: uropa
   :replaces_section_title:
   :noindex:

   UROPA \(Universal RObust Peak Annotator\) is a command line based tool\, intended for genomic region annotation from e.g. peak calling.
   It detects the most appropriate annotation by taking parameters such as feature type\, anchor\, direction and strand into account.
   Furthermore\, it allows filtering for GTF attribute values\, e.g. protein\_coding.


   :homepage: https://github.molgen.mpg.de/loosolab/UROPA
   :documentation: http://uropa-manual.readthedocs.io
   
   :license: MIT
   :recipe: /`uropa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uropa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uropa/meta.yaml>`_

   


.. conda:package:: uropa

   |downloads_uropa| |docker_uropa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.2-0</code>,  <code>3.5.0-0</code>,  <code>3.4.0-0</code>,  <code>3.3.4-0</code>,  <code>3.3.3-0</code>,  <code>3.3.2-0</code>,  <code>3.3.0-0</code>,  <code>3.2.0-0</code>,  <code>3.1.0-0</code>,  </span></summary>
      

      ``3.5.2-0``,  ``3.5.0-0``,  ``3.4.0-0``,  ``3.3.4-0``,  ``3.3.3-0``,  ``3.3.2-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.0.3-0``,  ``2.0.2a0-2``,  ``2.0.2a0-0``,  ``2.0.0a0-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-graph: 
   :depends bioconductor-rbgl: 
   :depends numpy: ``<1.16``
   :depends pysam: ``>=0.15.3``
   :depends python: 
   :depends r-base: 
   :depends r-getopt: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gridextra: 
   :depends r-jsonlite: 
   :depends r-tidyr: 
   :depends r-upsetr: 
   :depends r-venndiagram: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install uropa

   and update with::

      conda update uropa

   or use the docker container::

      docker pull quay.io/biocontainers/uropa:<tag>

   (see `uropa/tags`_ for valid values for ``<tag>``)


.. |downloads_uropa| image:: https://img.shields.io/conda/dn/bioconda/uropa.svg?style=flat
   :target: https://anaconda.org/bioconda/uropa
   :alt:   (downloads)
.. |docker_uropa| image:: https://quay.io/repository/biocontainers/uropa/status
   :target: https://quay.io/repository/biocontainers/uropa
.. _`uropa/tags`: https://quay.io/repository/biocontainers/uropa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uropa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uropa/README.html