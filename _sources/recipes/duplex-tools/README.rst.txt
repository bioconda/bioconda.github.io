:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'duplex-tools'
.. highlight: bash

duplex-tools
============

.. conda:recipe:: duplex-tools
   :replaces_section_title:
   :noindex:

   Duplex Tools contains a set of utilities for dealing with ONT Duplex sequencing data

   :homepage: https://github.com/nanoporetech/duplex-tools
   :license: MPL-2.0
   :recipe: /`duplex-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duplex-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duplex-tools/meta.yaml>`_

   


.. conda:package:: duplex-tools

   |downloads_duplex-tools| |docker_duplex-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.17-0</code>,  <code>0.2.15-0</code>,  <code>0.2.14-0</code>,  <code>0.2.13-0</code>,  <code>0.2.12-0</code>,  <code>0.2.11-0</code>,  <code>0.2.10-0</code>,  <code>0.2.9-0</code>,  <code>0.2.8-0</code>,  </span></summary>
      

      ``0.2.17-0``,  ``0.2.15-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends more-itertools: 
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends parasail-python: 
   :depends pathlib: 
   :depends pyfastx: 
   :depends pysam: 
   :depends python: 
   :depends python-edlib: 
   :depends tqdm: 
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

      mamba install duplex-tools

   and update with::

      mamba update duplex-tools

  To create a new environment, run::

      mamba create --name myenvname duplex-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/duplex-tools:<tag>

   (see `duplex-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_duplex-tools| image:: https://img.shields.io/conda/dn/bioconda/duplex-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/duplex-tools
   :alt:   (downloads)
.. |docker_duplex-tools| image:: https://quay.io/repository/biocontainers/duplex-tools/status
   :target: https://quay.io/repository/biocontainers/duplex-tools
.. _`duplex-tools/tags`: https://quay.io/repository/biocontainers/duplex-tools?tab=tags


.. raw:: html

    <script>
        var package = "duplex-tools";
        var versions = ["0.2.17","0.2.15","0.2.14","0.2.13","0.2.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/duplex-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/duplex-tools/README.html