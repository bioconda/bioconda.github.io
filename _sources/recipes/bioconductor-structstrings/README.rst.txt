:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-structstrings'
.. highlight: bash

bioconductor-structstrings
==========================

.. conda:recipe:: bioconductor-structstrings
   :replaces_section_title:
   :noindex:

   Implementation of the dot bracket annotations with Biostrings

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Structstrings.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-structstrings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structstrings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structstrings/meta.yaml>`_

   The Structstrings package implements the widely used dot bracket annotation for storing base pairing information in structured RNA. Structstrings uses the infrastructure provided by the Biostrings package and derives the DotBracketString and related classes from the BString class. From these\, base pair tables can be produced for in depth analysis. In addition\, the loop indices of the base pairs can be retrieved as well. For better efficiency\, information conversion is implemented in C\, inspired to a large extend by the ViennaRNA package.


.. conda:package:: bioconductor-structstrings

   |downloads_bioconductor-structstrings| |docker_bioconductor-structstrings|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-crayon: 
   :depends r-stringi: 
   :depends r-stringr: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-structstrings

   and update with::

      mamba update bioconductor-structstrings

  To create a new environment, run::

      mamba create --name myenvname bioconductor-structstrings

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-structstrings:<tag>

   (see `bioconductor-structstrings/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-structstrings| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-structstrings.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-structstrings
   :alt:   (downloads)
.. |docker_bioconductor-structstrings| image:: https://quay.io/repository/biocontainers/bioconductor-structstrings/status
   :target: https://quay.io/repository/biocontainers/bioconductor-structstrings
.. _`bioconductor-structstrings/tags`: https://quay.io/repository/biocontainers/bioconductor-structstrings?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-structstrings";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-structstrings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-structstrings/README.html