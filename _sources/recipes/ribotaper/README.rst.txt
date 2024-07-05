:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotaper'
.. highlight: bash

ribotaper
=========

.. conda:recipe:: ribotaper
   :replaces_section_title:
   :noindex:

   RiboTaper is a new analysis pipeline for Ribosome Profiling \(Ribo\-seq\) experiments\, which exploits the triplet periodicity of ribosomal footprints to call translated regions.

   :homepage: https://ohlerlab.mdc-berlin.de/software/RiboTaper_126/
   :license: GPL-3.0-or-later
   :recipe: /`ribotaper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotaper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotaper/meta.yaml>`_
   :links: biotools: :biotools:`ribotaper`, doi: :doi:`10.1038/nmeth.3688`

   


.. conda:package:: ribotaper

   |downloads_ribotaper| |docker_ribotaper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-0</code>,  <code>1.3.1a-8</code>,  <code>1.3.1a-7</code>,  <code>1.3.1a-6</code>,  <code>1.3.1a-5</code>,  <code>1.3.1a-4</code>,  <code>1.3.1a-3</code>,  <code>1.3.1a-2</code>,  <code>1.3.1a-1</code>,  </span></summary>
      

      ``1.3.1-0``,  ``1.3.1a-8``,  ``1.3.1a-7``,  ``1.3.1a-6``,  ``1.3.1a-5``,  ``1.3.1a-4``,  ``1.3.1a-3``,  ``1.3.1a-2``,  ``1.3.1a-1``,  ``1.3.1a-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: ``==2.17.0``
   :depends r-ade4: 
   :depends r-domc: 
   :depends r-foreach: 
   :depends r-iterators: 
   :depends r-multitaper: 
   :depends r-seqinr: 
   :depends r-xnomial: 
   :depends samtools: 
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

      mamba install ribotaper

   and update with::

      mamba update ribotaper

  To create a new environment, run::

      mamba create --name myenvname ribotaper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ribotaper:<tag>

   (see `ribotaper/tags`_ for valid values for ``<tag>``)


.. |downloads_ribotaper| image:: https://img.shields.io/conda/dn/bioconda/ribotaper.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotaper
   :alt:   (downloads)
.. |docker_ribotaper| image:: https://quay.io/repository/biocontainers/ribotaper/status
   :target: https://quay.io/repository/biocontainers/ribotaper
.. _`ribotaper/tags`: https://quay.io/repository/biocontainers/ribotaper?tab=tags


.. raw:: html

    <script>
        var package = "ribotaper";
        var versions = ["1.3.1","1.3.1a","1.3.1a","1.3.1a","1.3.1a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotaper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotaper/README.html