:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'optitype'
.. highlight: bash

optitype
========

.. conda:recipe:: optitype
   :replaces_section_title:
   :noindex:

   Precision HLA typing from next\-generation sequencing data

   :homepage: https://github.com/FRED-2/OptiType
   :license: BSD
   :recipe: /`optitype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optitype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optitype/meta.yaml>`_

   


.. conda:package:: optitype

   |downloads_optitype| |docker_optitype|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.5-2</code>,  <code>1.3.5-1</code>,  <code>1.3.5-0</code>,  <code>1.3.4-0</code>,  <code>1.3.2-3</code>,  <code>1.3.2-2</code>,  <code>1.3.2-1</code>,  <code>1.3.1-0</code>,  <code>1.2.1-1</code>,  </span></summary>
      

      ``1.3.5-2``,  ``1.3.5-1``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.2-3``,  ``1.3.2-2``,  ``1.3.2-1``,  ``1.3.1-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends future: 
   :depends glpk: 
   :depends hdf5: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pyomo: 
   :depends pysam: 
   :depends pytables: 
   :depends python: 
   :depends razers3: 
   :depends samtools: 
   :depends six: 
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

      mamba install optitype

   and update with::

      mamba update optitype

  To create a new environment, run::

      mamba create --name myenvname optitype

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/optitype:<tag>

   (see `optitype/tags`_ for valid values for ``<tag>``)


.. |downloads_optitype| image:: https://img.shields.io/conda/dn/bioconda/optitype.svg?style=flat
   :target: https://anaconda.org/bioconda/optitype
   :alt:   (downloads)
.. |docker_optitype| image:: https://quay.io/repository/biocontainers/optitype/status
   :target: https://quay.io/repository/biocontainers/optitype
.. _`optitype/tags`: https://quay.io/repository/biocontainers/optitype?tab=tags


.. raw:: html

    <script>
        var package = "optitype";
        var versions = ["1.3.5","1.3.5","1.3.5","1.3.4","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/optitype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/optitype/README.html