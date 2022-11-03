:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affxparser'
.. highlight: bash

bioconductor-affxparser
=======================

.. conda:recipe:: bioconductor-affxparser
   :replaces_section_title:
   :noindex:

   Affymetrix File Parsing SDK

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/affxparser.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-affxparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affxparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affxparser/meta.yaml>`_

   Package for parsing Affymetrix files \(CDF\, CEL\, CHP\, BPMAP\, BAR\).  It provides methods for fast and memory efficient parsing of Affymetrix files using the Affymetrix\' Fusion SDK. Both ASCII\- and binary\-based files are supported.  Currently\, there are methods for reading chip definition file \(CDF\) and a cell intensity file \(CEL\).  These files can be read either in full or in part.  For example\, probe signals from a few probesets can be extracted very quickly from a set of CEL files into a convenient list structure.


.. conda:package:: bioconductor-affxparser

   |downloads_bioconductor-affxparser| |docker_bioconductor-affxparser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.66.0-2</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.66.0-2``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affxparser

   and update with::

      conda update bioconductor-affxparser

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affxparser:<tag>

   (see `bioconductor-affxparser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affxparser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affxparser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affxparser
   :alt:   (downloads)
.. |docker_bioconductor-affxparser| image:: https://quay.io/repository/biocontainers/bioconductor-affxparser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affxparser
.. _`bioconductor-affxparser/tags`: https://quay.io/repository/biocontainers/bioconductor-affxparser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-affxparser";
        var versions = ["1.70.0","1.66.0","1.66.0","1.66.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affxparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affxparser/README.html