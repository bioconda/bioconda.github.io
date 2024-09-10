:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shortstack'
.. highlight: bash

shortstack
==========

.. conda:recipe:: shortstack
   :replaces_section_title:
   :noindex:

   ShortStack\: Comprehensive annotation and quantification of small RNA genes

   :homepage: https://github.com/MikeAxtell/ShortStack
   :license: MIT / MIT
   :recipe: /`shortstack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortstack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortstack/meta.yaml>`_

   


.. conda:package:: shortstack

   |downloads_shortstack| |docker_shortstack|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.0-0</code>,  <code>4.0.4-1</code>,  <code>4.0.4-0</code>,  <code>4.0.3-0</code>,  <code>4.0.2-0</code>,  <code>4.0.1-0</code>,  <code>4.0.0-0</code>,  <code>3.8.5-4</code>,  <code>3.8.5-3</code>,  </span></summary>
      

      ``4.1.0-0``,  ``4.0.4-1``,  ``4.0.4-0``,  ``4.0.3-0``,  ``4.0.2-0``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.8.5-4``,  ``3.8.5-3``,  ``3.8.5-2``,  ``3.8.5-1``,  ``3.8.5-0``,  ``3.8.3-0``,  ``3.6-1``,  ``3.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends biopython: 
   :depends bowtie: ``>=1.3.1``
   :depends cutadapt: 
   :depends numpy: 
   :depends python: ``>=3.12.3``
   :depends samtools: ``>=1.20``
   :depends shorttracks: ``>=1.2``
   :depends strucvis: ``>=0.9``
   :depends tqdm: 
   :depends viennarna: ``2.*``
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

      mamba install shortstack

   and update with::

      mamba update shortstack

  To create a new environment, run::

      mamba create --name myenvname shortstack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shortstack:<tag>

   (see `shortstack/tags`_ for valid values for ``<tag>``)


.. |downloads_shortstack| image:: https://img.shields.io/conda/dn/bioconda/shortstack.svg?style=flat
   :target: https://anaconda.org/bioconda/shortstack
   :alt:   (downloads)
.. |docker_shortstack| image:: https://quay.io/repository/biocontainers/shortstack/status
   :target: https://quay.io/repository/biocontainers/shortstack
.. _`shortstack/tags`: https://quay.io/repository/biocontainers/shortstack?tab=tags


.. raw:: html

    <script>
        var package = "shortstack";
        var versions = ["4.1.0","4.0.4","4.0.4","4.0.3","4.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shortstack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shortstack/README.html