:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybedgraph'
.. highlight: bash

pybedgraph
==========

.. conda:recipe:: pybedgraph
   :replaces_section_title:
   :noindex:

   A package for fast operations on 1\-dimensional genomic signal tracks

   :homepage: https://github.com/TheJacksonLaboratory/pyBedGraph
   :license: MIT / MIT
   :recipe: /`pybedgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedgraph/meta.yaml>`_

   


.. conda:package:: pybedgraph

   |downloads_pybedgraph| |docker_pybedgraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.43-4</code>,  <code>0.5.43-3</code>,  <code>0.5.43-2</code>,  <code>0.5.43-1</code>,  <code>0.5.43-0</code>,  <code>0.5.42-0</code>,  <code>0.5.39-0</code>,  <code>0.5.38-0</code>,  <code>0.5.37-0</code>,  </span></summary>
      

      ``0.5.43-4``,  ``0.5.43-3``,  ``0.5.43-2``,  ``0.5.43-1``,  ``0.5.43-0``,  ``0.5.42-0``,  ``0.5.39-0``,  ``0.5.38-0``,  ``0.5.37-0``,  ``0.5.36-0``,  ``0.5.35-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.16.4``
   :depends pybigwig: ``>=0.3.16``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install pybedgraph

   and update with::

      mamba update pybedgraph

  To create a new environment, run::

      mamba create --name myenvname pybedgraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybedgraph:<tag>

   (see `pybedgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_pybedgraph| image:: https://img.shields.io/conda/dn/bioconda/pybedgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/pybedgraph
   :alt:   (downloads)
.. |docker_pybedgraph| image:: https://quay.io/repository/biocontainers/pybedgraph/status
   :target: https://quay.io/repository/biocontainers/pybedgraph
.. _`pybedgraph/tags`: https://quay.io/repository/biocontainers/pybedgraph?tab=tags


.. raw:: html

    <script>
        var package = "pybedgraph";
        var versions = ["0.5.43","0.5.43","0.5.43","0.5.43","0.5.43"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybedgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybedgraph/README.html