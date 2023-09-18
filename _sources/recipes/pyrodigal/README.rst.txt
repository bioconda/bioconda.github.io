:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrodigal'
.. highlight: bash

pyrodigal
=========

.. conda:recipe:: pyrodigal
   :replaces_section_title:
   :noindex:

   Python bindings to Prodigal\, an ORF finder for microbial sequences.

   :homepage: https://github.com/althonos/pyrodigal
   :documentation: https://pyrodigal.readthedocs.org/
   
   :license: GPL / GPL-3
   :recipe: /`pyrodigal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrodigal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrodigal/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.04296`

   


.. conda:package:: pyrodigal

   |downloads_pyrodigal| |docker_pyrodigal|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-0</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  <code>2.2.0-0</code>,  <code>2.1.0-3</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.4-0</code>,  <code>2.0.3-0</code>,  </span></summary>
      

      ``3.0.0-0``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.0-3``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.2-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.7-0``,  ``0.4.6-1``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.3.0-0``,  ``0.2.1-1``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends archspec: ``>=0.2.0``
   :depends libgcc-ng: ``>=12``
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

      mamba install pyrodigal

   and update with::

      mamba update pyrodigal

  To create a new environment, run::

      mamba create --name myenvname pyrodigal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyrodigal:<tag>

   (see `pyrodigal/tags`_ for valid values for ``<tag>``)


.. |downloads_pyrodigal| image:: https://img.shields.io/conda/dn/bioconda/pyrodigal.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrodigal
   :alt:   (downloads)
.. |docker_pyrodigal| image:: https://quay.io/repository/biocontainers/pyrodigal/status
   :target: https://quay.io/repository/biocontainers/pyrodigal
.. _`pyrodigal/tags`: https://quay.io/repository/biocontainers/pyrodigal?tab=tags


.. raw:: html

    <script>
        var package = "pyrodigal";
        var versions = ["3.0.0","2.3.0","2.3.0","2.2.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrodigal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrodigal/README.html