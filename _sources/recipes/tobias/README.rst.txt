:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tobias'
.. highlight: bash

tobias
======

.. conda:recipe:: tobias
   :replaces_section_title:
   :noindex:

   Transcription factor Occupancy prediction By Investigation of ATAC\-seq Signal

   :homepage: https://github.com/loosolab/TOBIAS
   :documentation: https://github.com/loosolab/TOBIAS/wiki
   
   :developer docs: https://pypi.org/project/tobias/
   :license: MIT
   :recipe: /`tobias <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tobias>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tobias/meta.yaml>`_
   :links: biotools: :biotools:`TOBIAS`, doi: :doi:`10.1038/s41467-020-18035-1`

   TOBIAS \(Transcription factor Occupancy prediction By Investigation of ATAC\-seq Signal\) is a collection
   of command\-line bioinformatics tools for performing footprinting analysis on ATAC\-seq data.



.. conda:package:: tobias

   |downloads_tobias| |docker_tobias|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.16.0-0</code>,  <code>0.15.1-0</code>,  <code>0.13.3-1</code>,  <code>0.13.3-0</code>,  <code>0.13.2-1</code>,  <code>0.13.2-0</code>,  <code>0.13.1-0</code>,  <code>0.13.0-0</code>,  <code>0.12.12-0</code>,  </span></summary>
      

      ``0.16.0-0``,  ``0.15.1-0``,  ``0.13.3-1``,  ``0.13.3-0``,  ``0.13.2-1``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.12-0``,  ``0.12.11-0``,  ``0.12.10-1``,  ``0.12.10-0``,  ``0.12.9-0``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.6-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.6-1``,  ``0.11.6-0``,  ``0.11.4-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.4-0``,  ``0.6.1-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends adjusttext: 
   :depends boto3: 
   :depends importlib-metadata: 
   :depends kneed: 
   :depends libgcc-ng: ``>=12``
   :depends logomaker: 
   :depends matplotlib-base: ``>=2``
   :depends moods: 
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pandas: 
   :depends pybedtools: 
   :depends pybigwig: ``>=0.3``
   :depends pypdf2: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pyyaml: ``>5.1``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: ``>=0.9.1``
   :depends svist4get: ``>=1.2.24``
   :depends xgboost: ``>=0.71``
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install tobias

   and update with::

      mamba update tobias

  To create a new environment, run::

      mamba create --name myenvname tobias

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tobias:<tag>

   (see `tobias/tags`_ for valid values for ``<tag>``)


.. |downloads_tobias| image:: https://img.shields.io/conda/dn/bioconda/tobias.svg?style=flat
   :target: https://anaconda.org/bioconda/tobias
   :alt:   (downloads)
.. |docker_tobias| image:: https://quay.io/repository/biocontainers/tobias/status
   :target: https://quay.io/repository/biocontainers/tobias
.. _`tobias/tags`: https://quay.io/repository/biocontainers/tobias?tab=tags


.. raw:: html

    <script>
        var package = "tobias";
        var versions = ["0.16.0","0.15.1","0.13.3","0.13.3","0.13.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tobias/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tobias/README.html