:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidgenerics'
.. highlight: bash

r-acidgenerics
==============

.. conda:recipe:: r-acidgenerics
   :replaces_section_title:
   :noindex:

   S4 generic functions for Acid Genomics packages.

   :homepage: https://r.acidgenomics.com/packages/acidgenerics/
   :developer docs: https://github.com/acidgenomics/r-acidgenerics
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidgenerics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgenerics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgenerics/meta.yaml>`_

   


.. conda:package:: r-acidgenerics

   |downloads_r-acidgenerics| |docker_r-acidgenerics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.20-0</code>,  <code>0.5.19-0</code>,  <code>0.5.18-0</code>,  <code>0.5.17-2</code>,  <code>0.5.17-1</code>,  <code>0.5.17-0</code>,  <code>0.5.16-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  </span></summary>
      

      ``0.5.20-0``,  ``0.5.19-0``,  ``0.5.18-0``,  ``0.5.17-2``,  ``0.5.17-1``,  ``0.5.17-0``,  ``0.5.16-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.14-0``,  ``0.3.12-0``,  ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0``
   :depends bioconductor-iranges: ``>=2.26.0``
   :depends bioconductor-s4vectors: ``>=0.30.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-acidgenerics

   and update with::

      conda update r-acidgenerics

   or use the docker container::

      docker pull quay.io/biocontainers/r-acidgenerics:<tag>

   (see `r-acidgenerics/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidgenerics| image:: https://img.shields.io/conda/dn/bioconda/r-acidgenerics.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidgenerics
   :alt:   (downloads)
.. |docker_r-acidgenerics| image:: https://quay.io/repository/biocontainers/r-acidgenerics/status
   :target: https://quay.io/repository/biocontainers/r-acidgenerics
.. _`r-acidgenerics/tags`: https://quay.io/repository/biocontainers/r-acidgenerics?tab=tags


.. raw:: html

    <script>
        var package = "r-acidgenerics";
        var versions = ["0.5.20","0.5.19","0.5.18","0.5.17","0.5.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidgenerics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidgenerics/README.html