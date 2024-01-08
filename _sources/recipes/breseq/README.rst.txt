:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'breseq'
.. highlight: bash

breseq
======

.. conda:recipe:: breseq
   :replaces_section_title:
   :noindex:

   A computational pipeline for finding mutations relative to a reference sequence in short\-read DNA re\-sequencing data.

   :homepage: https://github.com/barricklab/breseq
   :documentation: https://barricklab.org/twiki/pub/Lab/ToolsBacterialGenomeResequencing/documentation/
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`breseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breseq/meta.yaml>`_

   


.. conda:package:: breseq

   |downloads_breseq| |docker_breseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.38.2-0</code>,  <code>0.38.1-1</code>,  <code>0.38.1-0</code>,  <code>0.37.1-1</code>,  <code>0.37.1-0</code>,  <code>0.37.0-0</code>,  <code>0.36.1-1</code>,  <code>0.36.1-0</code>,  <code>0.36.0-0</code>,  </span></summary>
      

      ``0.38.2-0``,  ``0.38.1-1``,  ``0.38.1-0``,  ``0.37.1-1``,  ``0.37.1-0``,  ``0.37.0-0``,  ``0.36.1-1``,  ``0.36.1-0``,  ``0.36.0-0``,  ``0.35.7-0``,  ``0.35.6-0``,  ``0.35.5-1``,  ``0.35.5-0``,  ``0.35.4-0``,  ``0.35.3-0``,  ``0.35.2-0``,  ``0.35.1-0``,  ``0.35.0-0``,  ``0.34.1-0``,  ``0.34.0-0``,  ``0.33.2-0``,  ``0.33.0-0``,  ``0.31.1-3``,  ``0.31.1-2``,  ``0.31.1-1``,  ``0.29.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bowtie2: ``>=2.0.0,!=2.0.3,!=2.0.4,!=2.3.1``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends r-base: 
   :depends r-cairo: 
   :depends zlib: 
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

      mamba install breseq

   and update with::

      mamba update breseq

  To create a new environment, run::

      mamba create --name myenvname breseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/breseq:<tag>

   (see `breseq/tags`_ for valid values for ``<tag>``)


.. |downloads_breseq| image:: https://img.shields.io/conda/dn/bioconda/breseq.svg?style=flat
   :target: https://anaconda.org/bioconda/breseq
   :alt:   (downloads)
.. |docker_breseq| image:: https://quay.io/repository/biocontainers/breseq/status
   :target: https://quay.io/repository/biocontainers/breseq
.. _`breseq/tags`: https://quay.io/repository/biocontainers/breseq?tab=tags


.. raw:: html

    <script>
        var package = "breseq";
        var versions = ["0.38.2","0.38.1","0.38.1","0.37.1","0.37.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breseq/README.html