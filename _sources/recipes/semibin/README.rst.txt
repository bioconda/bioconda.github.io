:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'semibin'
.. highlight: bash

semibin
=======

.. conda:recipe:: semibin
   :replaces_section_title:
   :noindex:

   Metagenomic binning with semi\-supervised siamese neural networks

   :homepage: https://github.com/BigDataBiology/SemiBin
   :documentation: https://semibin.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`semibin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semibin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/semibin/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-022-29843-y`, doi: :doi:`10.1093/bioinformatics/btad209`, biotools: :biotools:`semibin`

   


.. conda:package:: semibin

   |downloads_semibin| |docker_semibin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-1</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  </span></summary>
      

      ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.5.1-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3-0``,  ``0.2-1``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends coloredlogs: 
   :depends fraggenescan: 
   :depends hmmer: 
   :depends mmseqs2: ``13.45111.*``
   :depends numexpr: 
   :depends numpy: 
   :depends pandas: 
   :depends prodigal: 
   :depends python: ``>=3.7``
   :depends python-igraph: 
   :depends pytorch: 
   :depends pyyaml: 
   :depends requests: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends tqdm: 
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

      mamba install semibin

   and update with::

      mamba update semibin

  To create a new environment, run::

      mamba create --name myenvname semibin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/semibin:<tag>

   (see `semibin/tags`_ for valid values for ``<tag>``)


.. |downloads_semibin| image:: https://img.shields.io/conda/dn/bioconda/semibin.svg?style=flat
   :target: https://anaconda.org/bioconda/semibin
   :alt:   (downloads)
.. |docker_semibin| image:: https://quay.io/repository/biocontainers/semibin/status
   :target: https://quay.io/repository/biocontainers/semibin
.. _`semibin/tags`: https://quay.io/repository/biocontainers/semibin?tab=tags


.. raw:: html

    <script>
        var package = "semibin";
        var versions = ["2.0.1","2.0.0","2.0.0","1.5.1","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/semibin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/semibin/README.html