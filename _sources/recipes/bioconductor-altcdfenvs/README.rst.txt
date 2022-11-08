:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-altcdfenvs'
.. highlight: bash

bioconductor-altcdfenvs
=======================

.. conda:recipe:: bioconductor-altcdfenvs
   :replaces_section_title:
   :noindex:

   alternative CDF environments \(aka probeset mappings\)

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/altcdfenvs.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-altcdfenvs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-altcdfenvs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-altcdfenvs/meta.yaml>`_
   :links: biotools: :biotools:`altcdfenvs`

   Convenience data structures and functions to handle cdfenvs


.. conda:package:: bioconductor-altcdfenvs

   |downloads_bioconductor-altcdfenvs| |docker_bioconductor-altcdfenvs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.60.0-0</code>,  <code>2.56.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-1</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.0-1</code>,  <code>2.44.0-0</code>,  </span></summary>
      

      ``2.60.0-0``,  ``2.56.0-0``,  ``2.54.0-0``,  ``2.52.0-1``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-1``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-hypergraph: ``>=1.70.0,<1.71.0``
   :depends bioconductor-makecdfenv: ``>=1.74.0,<1.75.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-altcdfenvs

   and update with::

      conda update bioconductor-altcdfenvs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-altcdfenvs:<tag>

   (see `bioconductor-altcdfenvs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-altcdfenvs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-altcdfenvs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-altcdfenvs
   :alt:   (downloads)
.. |docker_bioconductor-altcdfenvs| image:: https://quay.io/repository/biocontainers/bioconductor-altcdfenvs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-altcdfenvs
.. _`bioconductor-altcdfenvs/tags`: https://quay.io/repository/biocontainers/bioconductor-altcdfenvs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-altcdfenvs";
        var versions = ["2.60.0","2.56.0","2.54.0","2.52.0","2.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-altcdfenvs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-altcdfenvs/README.html