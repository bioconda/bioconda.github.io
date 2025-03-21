:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'advntr'
.. highlight: bash

advntr
======

.. conda:recipe:: advntr
   :replaces_section_title:
   :noindex:

   A tool for genotyping Variable Number Tandem Repeats \(VNTR\) from sequence data

   :homepage: https://github.com/mehrdadbakhtiari/adVNTR
   :license: BSD 3-Clause
   :recipe: /`advntr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/advntr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/advntr/meta.yaml>`_

   


.. conda:package:: advntr

   |downloads_advntr| |docker_advntr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-0</code>,  <code>1.4.1-2</code>,  <code>1.4.1-1</code>,  <code>1.4.1-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.3.3-2</code>,  <code>1.3.3-1</code>,  </span></summary>
      

      ``1.5.0-0``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends cython: 
   :depends htslib: ``1.9.*``
   :depends joblib: 
   :depends keras: ``2.2.4.*``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: 
   :depends muscle: ``3.8.1551.*``
   :depends networkx: ``1.11.*``
   :depends numpy: ``>=1.16.5,<2.0a0``
   :depends pysam: ``0.15.1.*``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends scikit-learn: 
   :depends scipy: ``>=1.2.1,<2.0a0``
   :depends tensorflow: ``1.13.1.*``
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

      mamba install advntr

   and update with::

      mamba update advntr

  To create a new environment, run::

      mamba create --name myenvname advntr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/advntr:<tag>

   (see `advntr/tags`_ for valid values for ``<tag>``)


.. |downloads_advntr| image:: https://img.shields.io/conda/dn/bioconda/advntr.svg?style=flat
   :target: https://anaconda.org/bioconda/advntr
   :alt:   (downloads)
.. |docker_advntr| image:: https://quay.io/repository/biocontainers/advntr/status
   :target: https://quay.io/repository/biocontainers/advntr
.. _`advntr/tags`: https://quay.io/repository/biocontainers/advntr?tab=tags


.. raw:: html

    <script>
        var package = "advntr";
        var versions = ["1.5.0","1.4.1","1.4.1","1.4.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/advntr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/advntr/README.html