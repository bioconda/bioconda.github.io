:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-s4vectors'
.. highlight: bash

bioconductor-s4vectors
======================

.. conda:recipe:: bioconductor-s4vectors
   :replaces_section_title:
   :noindex:

   Foundation of vector\-like and list\-like containers in Bioconductor

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/S4Vectors.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-s4vectors <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-s4vectors>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-s4vectors/meta.yaml>`_
   :links: biotools: :biotools:`s4vectors`, doi: :doi:`10.1038/nmeth.3252`

   The S4Vectors package defines the Vector and List virtual classes and a set of generic functions that extend the semantic of ordinary vectors and lists in R. Package developers can easily implement vector\-like or list\-like objects as concrete subclasses of Vector or List. In addition\, a few low\-level concrete subclasses of general interest \(e.g. DataFrame\, Rle\, Factor\, and Hits\) are implemented in the S4Vectors package itself \(many more are implemented in the IRanges package and in other Bioconductor infrastructure packages\).


.. conda:package:: bioconductor-s4vectors

   |downloads_bioconductor-s4vectors| |docker_bioconductor-s4vectors|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.40.2-2</code>,  <code>0.40.2-1</code>,  <code>0.40.2-0</code>,  <code>0.38.1-0</code>,  <code>0.36.0-1</code>,  <code>0.36.0-0</code>,  <code>0.32.4-0</code>,  <code>0.32.3-0</code>,  <code>0.32.0-0</code>,  </span></summary>
      

      ``0.40.2-2``,  ``0.40.2-1``,  ``0.40.2-0``,  ``0.38.1-0``,  ``0.36.0-1``,  ``0.36.0-0``,  ``0.32.4-0``,  ``0.32.3-0``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.1-0``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.20.1-0``,  ``0.18.3-0``,  ``0.16.0-0``,  ``0.14.7-0``,  ``0.12.2-0``,  ``0.12.0-0``,  ``0.10.3-0``,  ``0.9.0-0``,  ``0.8.11-1``,  ``0.8.11-0``,  ``0.8.7-0``,  ``0.8.5-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.6.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-s4vectors

   and update with::

      mamba update bioconductor-s4vectors

  To create a new environment, run::

      mamba create --name myenvname bioconductor-s4vectors

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-s4vectors:<tag>

   (see `bioconductor-s4vectors/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-s4vectors| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-s4vectors.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-s4vectors
   :alt:   (downloads)
.. |docker_bioconductor-s4vectors| image:: https://quay.io/repository/biocontainers/bioconductor-s4vectors/status
   :target: https://quay.io/repository/biocontainers/bioconductor-s4vectors
.. _`bioconductor-s4vectors/tags`: https://quay.io/repository/biocontainers/bioconductor-s4vectors?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-s4vectors";
        var versions = ["0.40.2","0.40.2","0.40.2","0.38.1","0.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-s4vectors/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-s4vectors/README.html