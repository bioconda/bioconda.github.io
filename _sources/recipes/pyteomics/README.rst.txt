:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyteomics'
.. highlight: bash

pyteomics
=========

.. conda:recipe:: pyteomics
   :replaces_section_title:
   :noindex:

   A framework for proteomics data analysis.

   :homepage: https://github.com/levitsky/pyteomics
   :license: Apache-2.0
   :recipe: /`pyteomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyteomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyteomics/meta.yaml>`_
   :links: biotools: :biotools:`pyteomics`

   


.. conda:package:: pyteomics

   |downloads_pyteomics| |docker_pyteomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.7.5-0</code>,  <code>4.7.4-0</code>,  <code>4.7.3-0</code>,  <code>4.7.2-0</code>,  <code>4.7.1-0</code>,  <code>4.7-0</code>,  <code>4.6.3-0</code>,  <code>4.6.2-0</code>,  <code>4.6.1-0</code>,  </span></summary>
      

      ``4.7.5-0``,  ``4.7.4-0``,  ``4.7.3-0``,  ``4.7.2-0``,  ``4.7.1-0``,  ``4.7-0``,  ``4.6.3-0``,  ``4.6.2-0``,  ``4.6.1-0``,  ``4.6-0``,  ``4.5.6-0``,  ``4.5.5-0``,  ``4.5.4-0``,  ``4.5.3-0``,  ``4.5.2-0``,  ``4.5.1-0``,  ``4.5-0``,  ``4.4.2-0``,  ``4.4.1-0``,  ``4.4.0-0``,  ``4.3.3-0``,  ``4.3.2-1``,  ``4.3.2-0``,  ``4.2-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1-0``,  ``4.0.1-0``,  ``3.5.1-2``,  ``3.5.1-0``,  ``3.4-1``,  ``3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends lxml: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends sqlalchemy: 
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

      mamba install pyteomics

   and update with::

      mamba update pyteomics

  To create a new environment, run::

      mamba create --name myenvname pyteomics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyteomics:<tag>

   (see `pyteomics/tags`_ for valid values for ``<tag>``)


.. |downloads_pyteomics| image:: https://img.shields.io/conda/dn/bioconda/pyteomics.svg?style=flat
   :target: https://anaconda.org/bioconda/pyteomics
   :alt:   (downloads)
.. |docker_pyteomics| image:: https://quay.io/repository/biocontainers/pyteomics/status
   :target: https://quay.io/repository/biocontainers/pyteomics
.. _`pyteomics/tags`: https://quay.io/repository/biocontainers/pyteomics?tab=tags


.. raw:: html

    <script>
        var package = "pyteomics";
        var versions = ["4.7.5","4.7.4","4.7.3","4.7.2","4.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyteomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyteomics/README.html