:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'handyreadgenotyper'
.. highlight: bash

handyreadgenotyper
==================

.. conda:recipe:: handyreadgenotyper
   :replaces_section_title:
   :noindex:

   Tool for training model and classifying reads from environmental ONT amplicon sequencing.

   :homepage: https://github.com/AntonS-bio/HandyReadGenotyper
   :license: GPL-3.0-only
   :recipe: /`handyreadgenotyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/handyreadgenotyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/handyreadgenotyper/meta.yaml>`_

   Tool for training model and classifying reads from environmental ONT amplicon sequencing. 



.. conda:package:: handyreadgenotyper

   |downloads_handyreadgenotyper| |docker_handyreadgenotyper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.24-0</code>,  <code>0.1.22-0</code>,  <code>0.1.21-1</code>,  <code>0.1.21-0</code>,  <code>0.1.20-0</code>,  <code>0.1.18-0</code>,  <code>0.1.14-1</code>,  <code>0.1.14-0</code>,  <code>0.1.13-0</code>,  </span></summary>
      

      ``0.1.24-0``,  ``0.1.22-0``,  ``0.1.21-1``,  ``0.1.21-0``,  ``0.1.20-0``,  ``0.1.18-0``,  ``0.1.14-1``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.78``
   :depends minimap2: 
   :depends numpy: ``>=1.20.*``
   :depends pandas: ``>=2.0.0``
   :depends pysam: ``>=0.22.0``
   :depends python: ``>=3.10``
   :depends samtools: 
   :depends scikit-learn: ``>=1.3.*``
   :depends tqdm: ``>=4.66.*``
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

      mamba install handyreadgenotyper

   and update with::

      mamba update handyreadgenotyper

  To create a new environment, run::

      mamba create --name myenvname handyreadgenotyper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/handyreadgenotyper:<tag>

   (see `handyreadgenotyper/tags`_ for valid values for ``<tag>``)


.. |downloads_handyreadgenotyper| image:: https://img.shields.io/conda/dn/bioconda/handyreadgenotyper.svg?style=flat
   :target: https://anaconda.org/bioconda/handyreadgenotyper
   :alt:   (downloads)
.. |docker_handyreadgenotyper| image:: https://quay.io/repository/biocontainers/handyreadgenotyper/status
   :target: https://quay.io/repository/biocontainers/handyreadgenotyper
.. _`handyreadgenotyper/tags`: https://quay.io/repository/biocontainers/handyreadgenotyper?tab=tags


.. raw:: html

    <script>
        var package = "handyreadgenotyper";
        var versions = ["0.1.24","0.1.22","0.1.21","0.1.21","0.1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/handyreadgenotyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/handyreadgenotyper/README.html