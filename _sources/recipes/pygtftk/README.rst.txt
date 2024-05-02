:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygtftk'
.. highlight: bash

pygtftk
=======

.. conda:recipe:: pygtftk
   :replaces_section_title:
   :noindex:

   The gtftk suite providing facilities to manipulate genomic annotations in gtf format.

   :homepage: http://github.com/dputhier/pygtftk
   :license: MIT
   :recipe: /`pygtftk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygtftk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygtftk/meta.yaml>`_

   


.. conda:package:: pygtftk

   |downloads_pygtftk| |docker_pygtftk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.2-2</code>,  <code>1.6.2-1</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.3-1</code>,  <code>1.5.3-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  </span></summary>
      

      ``1.6.2-2``,  ``1.6.2-1``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.7-2``,  ``1.2.7-1``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: ``>=2.23.1``
   :depends billiard: ``>=3.6.4.0``
   :depends biopython: ``>=1.69``
   :depends bzip2: 
   :depends cffi: ``>=1.10.0``
   :depends cloudpickle: ``>=0.4.0``
   :depends ftputil: ``>=3.3.1,<4.0.0``
   :depends future: 
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends matplotlib-base: ``>=2.0.2``
   :depends mpmath: ``>=1.1.0``
   :depends nose: 
   :depends numpy: ``>=1.15.3``
   :depends numpy: ``>=1.26.4,<2.0a0``
   :depends openblas: ``>=0.3.17``
   :depends pandas: ``>=0.23.3``
   :depends plotnine: ``>=0.4.0``
   :depends pybedtools: ``>=0.7.8``
   :depends pybigwig: ``>=0.3.12``
   :depends pyparsing: ``>=2.2.0``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python-graphviz: 
   :depends python_abi: ``3.9.* *_cp39``
   :depends pyyaml: ``>=3.12``
   :depends requests: ``>=2.13.0``
   :depends scikit-learn: ``>=0.21.2,<1``
   :depends scipy: ``>=1.1.0``
   :depends seaborn: 
   :depends xz: 
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

      mamba install pygtftk

   and update with::

      mamba update pygtftk

  To create a new environment, run::

      mamba create --name myenvname pygtftk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pygtftk:<tag>

   (see `pygtftk/tags`_ for valid values for ``<tag>``)


.. |downloads_pygtftk| image:: https://img.shields.io/conda/dn/bioconda/pygtftk.svg?style=flat
   :target: https://anaconda.org/bioconda/pygtftk
   :alt:   (downloads)
.. |docker_pygtftk| image:: https://quay.io/repository/biocontainers/pygtftk/status
   :target: https://quay.io/repository/biocontainers/pygtftk
.. _`pygtftk/tags`: https://quay.io/repository/biocontainers/pygtftk?tab=tags


.. raw:: html

    <script>
        var package = "pygtftk";
        var versions = ["1.6.2","1.6.2","1.6.2","1.6.1","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygtftk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygtftk/README.html