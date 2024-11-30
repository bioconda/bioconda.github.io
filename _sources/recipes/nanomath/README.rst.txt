:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanomath'
.. highlight: bash

nanomath
========

.. conda:recipe:: nanomath
   :replaces_section_title:
   :noindex:

   A few simple math function for other Oxford Nanopore processing scripts

   :homepage: https://github.com/wdecoster/nanomath
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`nanomath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomath/meta.yaml>`_

   


.. conda:package:: nanomath

   |downloads_nanomath| |docker_nanomath|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.0.0-0</code>,  <code>0.23.3-0</code>,  <code>0.23.2-0</code>,  <code>0.23.1-1</code>,  <code>0.23.1-0</code>,  </span></summary>
      

      ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``,  ``0.23.3-0``,  ``0.23.2-0``,  ``0.23.1-1``,  ``0.23.1-0``,  ``0.22.0-1``,  ``0.22.0-0``,  ``0.21.0-2``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.18.1-0``,  ``0.16.2-0``,  ``0.14.2-0``,  ``0.12.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends deprecated: 
   :depends numpy: ``>1.8``
   :depends pandas: 
   :depends python: ``>=3``
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

      mamba install nanomath

   and update with::

      mamba update nanomath

  To create a new environment, run::

      mamba create --name myenvname nanomath

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanomath:<tag>

   (see `nanomath/tags`_ for valid values for ``<tag>``)


.. |downloads_nanomath| image:: https://img.shields.io/conda/dn/bioconda/nanomath.svg?style=flat
   :target: https://anaconda.org/bioconda/nanomath
   :alt:   (downloads)
.. |docker_nanomath| image:: https://quay.io/repository/biocontainers/nanomath/status
   :target: https://quay.io/repository/biocontainers/nanomath
.. _`nanomath/tags`: https://quay.io/repository/biocontainers/nanomath?tab=tags


.. raw:: html

    <script>
        var package = "nanomath";
        var versions = ["1.4.0","1.3.0","1.2.1","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanomath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanomath/README.html