:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arcs'
.. highlight: bash

arcs
====

.. conda:recipe:: arcs
   :replaces_section_title:
   :noindex:

   Scaffolding genome sequence assemblies using linked or long reads

   :homepage: https://github.com/bcgsc/arcs
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`arcs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arcs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arcs/meta.yaml>`_

   


.. conda:package:: arcs

   |downloads_arcs| |docker_arcs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.7-2</code>,  <code>1.2.7-1</code>,  <code>1.2.7-0</code>,  <code>1.2.6-0</code>,  <code>1.2.5-1</code>,  <code>1.2.5-0</code>,  <code>1.2.4-1</code>,  <code>1.2.4-0</code>,  <code>1.2.3-1</code>,  </span></summary>
      

      ``1.2.7-2``,  ``1.2.7-1``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends btllib: ``>=1.7.2,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends make: 
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

      mamba install arcs

   and update with::

      mamba update arcs

  To create a new environment, run::

      mamba create --name myenvname arcs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/arcs:<tag>

   (see `arcs/tags`_ for valid values for ``<tag>``)


.. |downloads_arcs| image:: https://img.shields.io/conda/dn/bioconda/arcs.svg?style=flat
   :target: https://anaconda.org/bioconda/arcs
   :alt:   (downloads)
.. |docker_arcs| image:: https://quay.io/repository/biocontainers/arcs/status
   :target: https://quay.io/repository/biocontainers/arcs
.. _`arcs/tags`: https://quay.io/repository/biocontainers/arcs?tab=tags


.. raw:: html

    <script>
        var package = "arcs";
        var versions = ["1.2.7","1.2.7","1.2.7","1.2.6","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arcs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arcs/README.html