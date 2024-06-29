:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pairtools'
.. highlight: bash

pairtools
=========

.. conda:recipe:: pairtools
   :replaces_section_title:
   :noindex:

   CLI tools to process mapped Hi\-C data

   :homepage: https://github.com/open2c/pairtools
   :documentation: http://pairtools.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`pairtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairtools/meta.yaml>`_

   


.. conda:package:: pairtools

   |downloads_pairtools| |docker_pairtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>0.3.0-6</code>,  <code>0.3.0-5</code>,  </span></summary>
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.3.0-6``,  ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioframe: ``>=0.3.3``
   :depends click: 
   :depends coreutils: 
   :depends htslib: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends lz4-c: 
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pandas: 
   :depends pbgzip: 
   :depends pysam: ``>=0.19``
   :depends pysam: ``>=0.22.1,<0.23.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pyyaml: 
   :depends samtools: 
   :depends scipy: ``>=1.7``
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

      mamba install pairtools

   and update with::

      mamba update pairtools

  To create a new environment, run::

      mamba create --name myenvname pairtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pairtools:<tag>

   (see `pairtools/tags`_ for valid values for ``<tag>``)


.. |downloads_pairtools| image:: https://img.shields.io/conda/dn/bioconda/pairtools.svg?style=flat
   :target: https://anaconda.org/bioconda/pairtools
   :alt:   (downloads)
.. |docker_pairtools| image:: https://quay.io/repository/biocontainers/pairtools/status
   :target: https://quay.io/repository/biocontainers/pairtools
.. _`pairtools/tags`: https://quay.io/repository/biocontainers/pairtools?tab=tags


.. raw:: html

    <script>
        var package = "pairtools";
        var versions = ["1.1.0","1.1.0","1.1.0","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pairtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pairtools/README.html