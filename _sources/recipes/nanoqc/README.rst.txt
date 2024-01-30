:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoqc'
.. highlight: bash

nanoqc
======

.. conda:recipe:: nanoqc
   :replaces_section_title:
   :noindex:

   Create fastQC\-like plots for Oxford Nanopore sequencing data

   :homepage: https://github.com/wdecoster/nanoQC
   :license: MIT / MIT License
   :recipe: /`nanoqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoqc/meta.yaml>`_

   


.. conda:package:: nanoqc

   |downloads_nanoqc| |docker_nanoqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.4-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.8.1-1</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.3-0</code>,  </span></summary>
      

      ``0.9.4-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.8.1-1``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends bokeh: ``>=2.4,<3``
   :depends numpy: 
   :depends python: ``>=3``
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

      mamba install nanoqc

   and update with::

      mamba update nanoqc

  To create a new environment, run::

      mamba create --name myenvname nanoqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanoqc:<tag>

   (see `nanoqc/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoqc| image:: https://img.shields.io/conda/dn/bioconda/nanoqc.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoqc
   :alt:   (downloads)
.. |docker_nanoqc| image:: https://quay.io/repository/biocontainers/nanoqc/status
   :target: https://quay.io/repository/biocontainers/nanoqc
.. _`nanoqc/tags`: https://quay.io/repository/biocontainers/nanoqc?tab=tags


.. raw:: html

    <script>
        var package = "nanoqc";
        var versions = ["0.9.4","0.9.2","0.9.1","0.8.1","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoqc/README.html