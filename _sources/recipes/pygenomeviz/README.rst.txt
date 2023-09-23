:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygenomeviz'
.. highlight: bash

pygenomeviz
===========

.. conda:recipe:: pygenomeviz
   :replaces_section_title:
   :noindex:

   A genome visualization python package for comparative genomics

   :homepage: https://github.com/moshi4/pyGenomeViz/
   :license: MIT
   :recipe: /`pygenomeviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenomeviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenomeviz/meta.yaml>`_

   


.. conda:package:: pygenomeviz

   |downloads_pygenomeviz| |docker_pygenomeviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  </span></summary>
      

      ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.79``
   :depends matplotlib-base: ``>=3.5.2``
   :depends numpy: ``>=1.21``
   :depends python: ``>=3.8``
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

      mamba install pygenomeviz

   and update with::

      mamba update pygenomeviz

  To create a new environment, run::

      mamba create --name myenvname pygenomeviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pygenomeviz:<tag>

   (see `pygenomeviz/tags`_ for valid values for ``<tag>``)


.. |downloads_pygenomeviz| image:: https://img.shields.io/conda/dn/bioconda/pygenomeviz.svg?style=flat
   :target: https://anaconda.org/bioconda/pygenomeviz
   :alt:   (downloads)
.. |docker_pygenomeviz| image:: https://quay.io/repository/biocontainers/pygenomeviz/status
   :target: https://quay.io/repository/biocontainers/pygenomeviz
.. _`pygenomeviz/tags`: https://quay.io/repository/biocontainers/pygenomeviz?tab=tags


.. raw:: html

    <script>
        var package = "pygenomeviz";
        var versions = ["0.4.3","0.4.2","0.4.1","0.4.0","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygenomeviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygenomeviz/README.html