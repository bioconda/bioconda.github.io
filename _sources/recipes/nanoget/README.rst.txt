:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoget'
.. highlight: bash

nanoget
=======

.. conda:recipe:: nanoget
   :replaces_section_title:
   :noindex:

   Functions to extract information from Oxford Nanopore sequencing data and alignments.

   :homepage: https://github.com/wdecoster/nanoget
   :license: GPL / GPL-3.0-only
   :recipe: /`nanoget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoget/meta.yaml>`_

   


.. conda:package:: nanoget

   |downloads_nanoget| |docker_nanoget|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.19.3-0</code>,  <code>1.19.1-0</code>,  <code>1.18.1-0</code>,  <code>1.18.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.1-0</code>,  <code>1.16.0-0</code>,  <code>1.15.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.19.3-0``,  ``1.19.1-0``,  ``1.18.1-0``,  ``1.18.0-0``,  ``1.17.0-0``,  ``1.16.1-0``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.13.2-0``,  ``1.13.1-0``,  ``1.13.0-0``,  ``1.12.2-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.6-0``,  ``1.7.4-0``,  ``1.5.2-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.2.2-0``,  ``1.0.2-0``,  ``1.0.0-0``,  ``0.11.7-0``,  ``0.11.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends numpy: 
   :depends pandas: ``>=2.0.0``
   :depends pysam: ``>0.10.0``
   :depends python: ``>=3.0``
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

      mamba install nanoget

   and update with::

      mamba update nanoget

  To create a new environment, run::

      mamba create --name myenvname nanoget

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanoget:<tag>

   (see `nanoget/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoget| image:: https://img.shields.io/conda/dn/bioconda/nanoget.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoget
   :alt:   (downloads)
.. |docker_nanoget| image:: https://quay.io/repository/biocontainers/nanoget/status
   :target: https://quay.io/repository/biocontainers/nanoget
.. _`nanoget/tags`: https://quay.io/repository/biocontainers/nanoget?tab=tags


.. raw:: html

    <script>
        var package = "nanoget";
        var versions = ["1.19.3","1.19.1","1.18.1","1.18.0","1.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoget/README.html