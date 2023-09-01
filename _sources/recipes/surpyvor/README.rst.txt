:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'surpyvor'
.. highlight: bash

surpyvor
========

.. conda:recipe:: surpyvor
   :replaces_section_title:
   :noindex:

   Evaluating\, merging and plotting SV vcf files

   :homepage: https://github.com/wdecoster/surpyvor
   :license: MIT / MIT License
   :recipe: /`surpyvor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/surpyvor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/surpyvor/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.244939.118`

   


.. conda:package:: surpyvor

   |downloads_surpyvor| |docker_surpyvor|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.15.0-0</code>,  <code>0.14.0-0</code>,  <code>0.13.0-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.0-0</code>,  <code>0.8.1-1</code>,  <code>0.8.1-0</code>,  <code>0.6.0-1</code>,  </span></summary>
      

      ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.0-1``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends cyvcf2: 
   :depends htslib: 
   :depends matplotlib-base: 
   :depends matplotlib-venn: 
   :depends numpy: 
   :depends python: ``>=3``
   :depends survivor: 
   :depends upsetplot: 
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

      mamba install surpyvor

   and update with::

      mamba update surpyvor

  To create a new environment, run::

      mamba create --name myenvname surpyvor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/surpyvor:<tag>

   (see `surpyvor/tags`_ for valid values for ``<tag>``)


.. |downloads_surpyvor| image:: https://img.shields.io/conda/dn/bioconda/surpyvor.svg?style=flat
   :target: https://anaconda.org/bioconda/surpyvor
   :alt:   (downloads)
.. |docker_surpyvor| image:: https://quay.io/repository/biocontainers/surpyvor/status
   :target: https://quay.io/repository/biocontainers/surpyvor
.. _`surpyvor/tags`: https://quay.io/repository/biocontainers/surpyvor?tab=tags


.. raw:: html

    <script>
        var package = "surpyvor";
        var versions = ["0.15.0","0.14.0","0.13.0","0.12.0","0.11.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/surpyvor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/surpyvor/README.html