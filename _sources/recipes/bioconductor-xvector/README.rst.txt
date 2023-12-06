:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xvector'
.. highlight: bash

bioconductor-xvector
====================

.. conda:recipe:: bioconductor-xvector
   :replaces_section_title:
   :noindex:

   Foundation of external vector representation and manipulation in Bioconductor

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/XVector.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-xvector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xvector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xvector/meta.yaml>`_
   :links: biotools: :biotools:`xvector`, doi: :doi:`10.1038/nmeth.3252`

   Provides memory efficient S4 classes for storing sequences \"externally\" \(e.g. behind an R external pointer\, or on disk\).


.. conda:package:: bioconductor-xvector

   |downloads_bioconductor-xvector| |docker_bioconductor-xvector|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.42.0-1</code>,  <code>0.42.0-0</code>,  <code>0.40.0-0</code>,  <code>0.38.0-1</code>,  <code>0.38.0-0</code>,  <code>0.34.0-2</code>,  <code>0.34.0-1</code>,  <code>0.34.0-0</code>,  <code>0.32.0-0</code>,  </span></summary>
      

      ``0.42.0-1``,  ``0.42.0-0``,  ``0.40.0-0``,  ``0.38.0-1``,  ``0.38.0-0``,  ``0.34.0-2``,  ``0.34.0-1``,  ``0.34.0-0``,  ``0.32.0-0``,  ``0.30.0-1``,  ``0.30.0-0``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-1``,  ``0.22.0-0``,  ``0.20.0-0``,  ``0.18.0-0``,  ``0.16.0-0``,  ``0.14.1-0``,  ``0.12.1-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-xvector

   and update with::

      mamba update bioconductor-xvector

  To create a new environment, run::

      mamba create --name myenvname bioconductor-xvector

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xvector:<tag>

   (see `bioconductor-xvector/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xvector| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xvector.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xvector
   :alt:   (downloads)
.. |docker_bioconductor-xvector| image:: https://quay.io/repository/biocontainers/bioconductor-xvector/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xvector
.. _`bioconductor-xvector/tags`: https://quay.io/repository/biocontainers/bioconductor-xvector?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xvector";
        var versions = ["0.42.0","0.42.0","0.40.0","0.38.0","0.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xvector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xvector/README.html