:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cobra'
.. highlight: bash

cobra
=====

.. conda:recipe:: cobra
   :replaces_section_title:
   :noindex:

   COBRApy is a package for constraint\-based modeling of biological networks.

   :homepage: https://opencobra.github.io/cobrapy
   :license: GNU Lesser General Public License v2 or later (LGPLv2+) or GNU General Public License v2 or later (GPLv2+)
   :recipe: /`cobra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobra/meta.yaml>`_

   


.. conda:package:: cobra

   |downloads_cobra| |docker_cobra|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.21.0-1</code>,  <code>0.21.0-0</code>,  <code>0.20.0-0</code>,  <code>0.19.0-0</code>,  <code>0.18.1-1</code>,  <code>0.18.1-0</code>,  <code>0.17.1-0</code>,  <code>0.17.0-0</code>,  <code>0.16.0-0</code>,  </span></summary>
      

      ``0.21.0-1``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.0-0``,  ``0.18.1-1``,  ``0.18.1-0``,  ``0.17.1-0``,  ``0.17.0-0``,  ``0.16.0-0``,  ``0.15.4-0``,  ``0.10.1-1``,  ``0.10.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.4.0b6-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: ``>=1.4``
   :depends depinfo: ``>=1.5.1``
   :depends diskcache: ``>=5.0``
   :depends future: 
   :depends httpx: ``>=0.14``
   :depends numpy: ``>=1.13``
   :depends optlang: ``<1.4.6``
   :depends pandas: ``>=1.0``
   :depends pydantic: ``>=1.6``
   :depends python: 
   :depends python-libsbml: ``>=5.18.0``
   :depends rich: ``>=6.0``
   :depends ruamel.yaml: ``>=0.16``
   :depends six: 
   :depends swiglpk: ``>=4.65``
   :depends tabulate: 
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

      mamba install cobra

   and update with::

      mamba update cobra

  To create a new environment, run::

      mamba create --name myenvname cobra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cobra:<tag>

   (see `cobra/tags`_ for valid values for ``<tag>``)


.. |downloads_cobra| image:: https://img.shields.io/conda/dn/bioconda/cobra.svg?style=flat
   :target: https://anaconda.org/bioconda/cobra
   :alt:   (downloads)
.. |docker_cobra| image:: https://quay.io/repository/biocontainers/cobra/status
   :target: https://quay.io/repository/biocontainers/cobra
.. _`cobra/tags`: https://quay.io/repository/biocontainers/cobra?tab=tags


.. raw:: html

    <script>
        var package = "cobra";
        var versions = ["0.21.0","0.21.0","0.20.0","0.19.0","0.18.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cobra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cobra/README.html