:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnali'
.. highlight: bash

gnali
=====

.. conda:recipe:: gnali
   :replaces_section_title:
   :noindex:

   gNALI \(gene nonessentiality and loss\-of\-function identifier\) is a tool for finding PLoF gene variants.

   :homepage: https://github.com/phac-nml/gnali
   :license: APACHE / Apache-2.0
   :recipe: /`gnali <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnali>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnali/meta.yaml>`_

   


.. conda:package:: gnali

   |downloads_gnali| |docker_gnali|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-0</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  </span></summary>
      

      ``1.1.0-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends ensembl-vep: 
   :depends filelock: 
   :depends git: ``>=2``
   :depends htslib: 
   :depends numpy: 
   :depends pandas: 
   :depends perl-bio-bigfile: 
   :depends progress: 
   :depends py-bgzip: 
   :depends pybiomart: 
   :depends pysam: ``<0.16``
   :depends python: ``>=3.6``
   :depends python-magic: 
   :depends pyyaml: 
   :depends samtools: 
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

      mamba install gnali

   and update with::

      mamba update gnali

  To create a new environment, run::

      mamba create --name myenvname gnali

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gnali:<tag>

   (see `gnali/tags`_ for valid values for ``<tag>``)


.. |downloads_gnali| image:: https://img.shields.io/conda/dn/bioconda/gnali.svg?style=flat
   :target: https://anaconda.org/bioconda/gnali
   :alt:   (downloads)
.. |docker_gnali| image:: https://quay.io/repository/biocontainers/gnali/status
   :target: https://quay.io/repository/biocontainers/gnali
.. _`gnali/tags`: https://quay.io/repository/biocontainers/gnali?tab=tags


.. raw:: html

    <script>
        var package = "gnali";
        var versions = ["1.1.0","1.0.5","1.0.5","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnali/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnali/README.html