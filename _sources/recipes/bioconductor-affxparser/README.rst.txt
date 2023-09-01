:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affxparser'
.. highlight: bash

bioconductor-affxparser
=======================

.. conda:recipe:: bioconductor-affxparser
   :replaces_section_title:
   :noindex:

   Affymetrix File Parsing SDK

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/affxparser.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-affxparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affxparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affxparser/meta.yaml>`_

   Package for parsing Affymetrix files \(CDF\, CEL\, CHP\, BPMAP\, BAR\).  It provides methods for fast and memory efficient parsing of Affymetrix files using the Affymetrix\' Fusion SDK. Both ASCII\- and binary\-based files are supported.  Currently\, there are methods for reading chip definition file \(CDF\) and a cell intensity file \(CEL\).  These files can be read either in full or in part.  For example\, probe signals from a few probesets can be extracted very quickly from a set of CEL files into a convenient list structure.


.. conda:package:: bioconductor-affxparser

   |downloads_bioconductor-affxparser| |docker_bioconductor-affxparser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.70.0-2</code>,  <code>1.70.0-1</code>,  <code>1.70.0-0</code>,  <code>1.66.0-2</code>,  <code>1.66.0-1</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.70.0-2``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.66.0-2``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-affxparser

   and update with::

      mamba update bioconductor-affxparser

  To create a new environment, run::

      mamba create --name myenvname bioconductor-affxparser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.72.0","1.70.0","1.70.0","1.70.0","1.66.0"];
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