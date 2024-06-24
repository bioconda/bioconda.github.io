:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cortexpy'
.. highlight: bash

cortexpy
========

.. conda:recipe:: cortexpy
   :replaces_section_title:
   :noindex:

   A Python API for manipulating \(Mc\)Cortex de novo assembly graph and link data

   :homepage: https://github.com/winni2k/cortexpy
   :documentation: https://cortexpy.readthedocs.io/en/v0.46.5/
   
   :license: APACHE / Apache Software
   :recipe: /`cortexpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cortexpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cortexpy/meta.yaml>`_

   


.. conda:package:: cortexpy

   |downloads_cortexpy| |docker_cortexpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.46.5-5</code>,  <code>0.46.5-4</code>,  <code>0.46.5-3</code>,  <code>0.46.5-2</code>,  <code>0.46.5-1</code>,  <code>0.46.5-0</code>,  <code>0.46.4-0</code>,  <code>0.45.7-0</code>,  <code>0.45.6-0</code>,  </span></summary>
      

      ``0.46.5-5``,  ``0.46.5-4``,  ``0.46.5-3``,  ``0.46.5-2``,  ``0.46.5-1``,  ``0.46.5-0``,  ``0.46.4-0``,  ``0.45.7-0``,  ``0.45.6-0``,  ``0.44.0-0``,  ``0.41.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends attrs: 
   :depends biopython: 
   :depends delegation: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends msgpack-python: 
   :depends networkx: 
   :depends numpy: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends pyyaml: 
   :depends schema: 
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

      mamba install cortexpy

   and update with::

      mamba update cortexpy

  To create a new environment, run::

      mamba create --name myenvname cortexpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cortexpy:<tag>

   (see `cortexpy/tags`_ for valid values for ``<tag>``)


.. |downloads_cortexpy| image:: https://img.shields.io/conda/dn/bioconda/cortexpy.svg?style=flat
   :target: https://anaconda.org/bioconda/cortexpy
   :alt:   (downloads)
.. |docker_cortexpy| image:: https://quay.io/repository/biocontainers/cortexpy/status
   :target: https://quay.io/repository/biocontainers/cortexpy
.. _`cortexpy/tags`: https://quay.io/repository/biocontainers/cortexpy?tab=tags


.. raw:: html

    <script>
        var package = "cortexpy";
        var versions = ["0.46.5","0.46.5","0.46.5","0.46.5","0.46.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cortexpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cortexpy/README.html