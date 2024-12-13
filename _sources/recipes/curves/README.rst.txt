:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'curves'
.. highlight: bash

curves
======

.. conda:recipe:: curves
   :replaces_section_title:
   :noindex:

   CURVES\+\: Conformational analysis of single nucleic acid structures or of molecular dynamics trajectories

   :homepage: http://curvesplus.bsc.es/misc
   :license: APACHE / Apache Software License
   :recipe: /`curves <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curves>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curves/meta.yaml>`_

   Curves\+ is a revised version of the Curves approach for analysing the structure of nucleic acids. It respects the international conventions for nucleic acid analysis\, runs much faster and provides new data.


.. conda:package:: curves

   |downloads_curves| |docker_curves|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.2-3</code>,  <code>3.0.2-2</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-4</code>,  <code>3.0.0-3</code>,  <code>3.0.0-2</code>,  <code>3.0.0-1</code>,  </span></summary>
      

      ``3.0.2-3``,  ``3.0.2-2``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-4``,  ``3.0.0-3``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends ambertools: ``>=22.0``
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends libnetcdf: ``>=4.9.2,<4.9.3.0a0``
   :depends libstdcxx: ``>=13``
   :depends netcdf-fortran: ``>=4.6.1,<4.7.0a0``
   :depends python_abi: ``3.9.* *_cp39``
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

      mamba install curves

   and update with::

      mamba update curves

  To create a new environment, run::

      mamba create --name myenvname curves

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/curves:<tag>

   (see `curves/tags`_ for valid values for ``<tag>``)


.. |downloads_curves| image:: https://img.shields.io/conda/dn/bioconda/curves.svg?style=flat
   :target: https://anaconda.org/bioconda/curves
   :alt:   (downloads)
.. |docker_curves| image:: https://quay.io/repository/biocontainers/curves/status
   :target: https://quay.io/repository/biocontainers/curves
.. _`curves/tags`: https://quay.io/repository/biocontainers/curves?tab=tags


.. raw:: html

    <script>
        var package = "curves";
        var versions = ["3.0.2","3.0.2","3.0.2","3.0.2","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/curves/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/curves/README.html