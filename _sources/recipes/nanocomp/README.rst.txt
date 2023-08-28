:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanocomp'
.. highlight: bash

nanocomp
========

.. conda:recipe:: nanocomp
   :replaces_section_title:
   :noindex:

   Comparing runs of Oxford Nanopore sequencing data and alignments

   :homepage: https://github.com/wdecoster/NanoComp
   :license: MIT / MIT
   :recipe: /`nanocomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocomp/meta.yaml>`_

   


.. conda:package:: nanocomp

   |downloads_nanocomp| |docker_nanocomp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.23.1-0</code>,  <code>1.22.0-0</code>,  <code>1.21.2-0</code>,  <code>1.21.0-0</code>,  <code>1.20.0-0</code>,  <code>1.19.3-0</code>,  <code>1.19.1-0</code>,  <code>1.19.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.23.1-0``,  ``1.22.0-0``,  ``1.21.2-0``,  ``1.21.0-0``,  ``1.20.0-0``,  ``1.19.3-0``,  ``1.19.1-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.15.1-0``,  ``1.15.0-0``,  ``1.14.1-0``,  ``1.13.1-0``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.11.3-0``,  ``1.11.2-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.23.1-0``,  ``0.23.0-1``,  ``0.19.0-1``,  ``0.19.0-0``,  ``0.16.0-0``,  ``0.15.0-0``,  ``0.12.4-0``,  ``0.7.0-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends nanoget: ``>=1.19.0``
   :depends nanomath: ``>=1.0.0``
   :depends nanoplot: ``>=1.39.0``
   :depends numpy: ``>=1.16.5``
   :depends pandas: 
   :depends plotly: ``>=3.4.2``
   :depends psutil: 
   :depends pyarrow: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install nanocomp

   and update with::

      mamba update nanocomp

  To create a new environment, run::

      mamba create --name myenvname nanocomp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanocomp:<tag>

   (see `nanocomp/tags`_ for valid values for ``<tag>``)


.. |downloads_nanocomp| image:: https://img.shields.io/conda/dn/bioconda/nanocomp.svg?style=flat
   :target: https://anaconda.org/bioconda/nanocomp
   :alt:   (downloads)
.. |docker_nanocomp| image:: https://quay.io/repository/biocontainers/nanocomp/status
   :target: https://quay.io/repository/biocontainers/nanocomp
.. _`nanocomp/tags`: https://quay.io/repository/biocontainers/nanocomp?tab=tags


.. raw:: html

    <script>
        var package = "nanocomp";
        var versions = ["1.23.1","1.22.0","1.21.2","1.21.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanocomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanocomp/README.html