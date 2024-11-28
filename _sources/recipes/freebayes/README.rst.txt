:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'freebayes'
.. highlight: bash

freebayes
=========

.. conda:recipe:: freebayes
   :replaces_section_title:
   :noindex:

   Bayesian haplotype\-based polymorphism discovery and genotyping.

   :homepage: https://github.com/freebayes/freebayes
   :documentation: https://github.com/freebayes/freebayes/blob/v1.3.8/README.md
   
   :license: MIT / MIT
   :recipe: /`freebayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freebayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freebayes/meta.yaml>`_
   :links: biotools: :biotools:`freebayes`, usegalaxy-eu: :usegalaxy-eu:`freebayes`, doi: :doi:`10.48550/arXiv.1207.3907`

   


.. conda:package:: freebayes

   |downloads_freebayes| |docker_freebayes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.8-2</code>,  <code>1.3.8-1</code>,  <code>1.3.8-0</code>,  <code>1.3.7-2</code>,  <code>1.3.7-1</code>,  <code>1.3.7-0</code>,  <code>1.3.6-7</code>,  <code>1.3.6-6</code>,  <code>1.3.6-5</code>,  </span></summary>
      

      ``1.3.8-2``,  ``1.3.8-1``,  ``1.3.8-0``,  ``1.3.7-2``,  ``1.3.7-1``,  ``1.3.7-0``,  ``1.3.6-7``,  ``1.3.6-6``,  ``1.3.6-5``,  ``1.3.6-4``,  ``1.3.6-3``,  ``1.3.6-2``,  ``1.3.6-1``,  ``1.3.6-0``,  ``1.3.5-4``,  ``1.3.5-3``,  ``1.3.5-2``,  ``1.3.5-1``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.2-2``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-0``,  ``1.1.0.46-5``,  ``1.1.0.46-4``,  ``1.1.0.46-3``,  ``1.1.0.46-2``,  ``1.1.0.46-1``,  ``1.1.0.46-0``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.2.29-2``,  ``1.0.2.29-1``,  ``1.0.2.29-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.9.21.26-0``,  ``0.9.21.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.20,<1.22.0a0``
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends parallel: 
   :depends samtools: 
   :depends tabixpp: ``>=1.1.2,<1.1.3.0a0``
   :depends vcflib: ``>=1.0.10,<2.0a0``
   :depends wfa2-lib: ``>=2.3.5,<3.0a0``
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

      mamba install freebayes

   and update with::

      mamba update freebayes

  To create a new environment, run::

      mamba create --name myenvname freebayes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/freebayes:<tag>

   (see `freebayes/tags`_ for valid values for ``<tag>``)


.. |downloads_freebayes| image:: https://img.shields.io/conda/dn/bioconda/freebayes.svg?style=flat
   :target: https://anaconda.org/bioconda/freebayes
   :alt:   (downloads)
.. |docker_freebayes| image:: https://quay.io/repository/biocontainers/freebayes/status
   :target: https://quay.io/repository/biocontainers/freebayes
.. _`freebayes/tags`: https://quay.io/repository/biocontainers/freebayes?tab=tags


.. raw:: html

    <script>
        var package = "freebayes";
        var versions = ["1.3.8","1.3.8","1.3.8","1.3.7","1.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/freebayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/freebayes/README.html