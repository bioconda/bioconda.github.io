:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygenometracks'
.. highlight: bash

pygenometracks
==============

.. conda:recipe:: pygenometracks
   :replaces_section_title:
   :noindex:

   Standalone program and library to plot beautiful genome browser tracks.

   :homepage: https://github.com/deeptools/pyGenomeTracks/
   :license: GPL3
   :recipe: /`pygenometracks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenometracks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenometracks/meta.yaml>`_

   


.. conda:package:: pygenometracks

   |downloads_pygenometracks| |docker_pygenometracks|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.8-0</code>,  <code>3.7-0</code>,  <code>3.6-0</code>,  <code>3.5.1-0</code>,  <code>3.5-1</code>,  <code>3.5-0</code>,  <code>3.4-0</code>,  <code>3.3-1</code>,  <code>3.3-0</code>,  </span></summary>
      

      ``3.8-0``,  ``3.7-0``,  ``3.6-0``,  ``3.5.1-0``,  ``3.5-1``,  ``3.5-0``,  ``3.4-0``,  ``3.3-1``,  ``3.3-0``,  ``3.2.1-0``,  ``3.2-0``,  ``3.1.2-1``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1-0``,  ``3.0-0``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``,  ``1.0-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bx-python: ``>=0.8.13``
   :depends future: ``>=0.17.0``
   :depends gffutils: ``>=0.9``
   :depends hicmatrix: ``>=15``
   :depends intervaltree: ``>=2.1.0``
   :depends matplotlib-base: ``>=3.1.1,<=3.6.2``
   :depends numpy: ``>=1.20``
   :depends pybedtools: ``>=0.8.1``
   :depends pybigwig: ``>=0.3.16``
   :depends pyfaidx: ``>=0.1.3``
   :depends pysam: ``>=0.14``
   :depends python: ``>=3.7``
   :depends tqdm: ``>=4.20``
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

      mamba install pygenometracks

   and update with::

      mamba update pygenometracks

  To create a new environment, run::

      mamba create --name myenvname pygenometracks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pygenometracks:<tag>

   (see `pygenometracks/tags`_ for valid values for ``<tag>``)


.. |downloads_pygenometracks| image:: https://img.shields.io/conda/dn/bioconda/pygenometracks.svg?style=flat
   :target: https://anaconda.org/bioconda/pygenometracks
   :alt:   (downloads)
.. |docker_pygenometracks| image:: https://quay.io/repository/biocontainers/pygenometracks/status
   :target: https://quay.io/repository/biocontainers/pygenometracks
.. _`pygenometracks/tags`: https://quay.io/repository/biocontainers/pygenometracks?tab=tags


.. raw:: html

    <script>
        var package = "pygenometracks";
        var versions = ["3.8","3.7","3.6","3.5.1","3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygenometracks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygenometracks/README.html