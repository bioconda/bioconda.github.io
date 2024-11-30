:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-bioext'
.. highlight: bash

python-bioext
=============

.. conda:recipe:: python-bioext
   :replaces_section_title:
   :noindex:

   A few handy bioinformatics tools not already in BioPython

   :homepage: https://github.com/veg/BioExt.git
   :license: GPL3 / GPL-3.0-only
   :recipe: /`python-bioext <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-bioext>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-bioext/meta.yaml>`_

   


.. conda:package:: python-bioext

   |downloads_python-bioext| |docker_python-bioext|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.21.9-0</code>,  <code>0.21.8-1</code>,  <code>0.21.8-0</code>,  <code>0.21.7-1</code>,  <code>0.21.7-0</code>,  <code>0.21.2-0</code>,  <code>0.21.1-0</code>,  <code>0.21.0-0</code>,  <code>0.20.4-2</code>,  </span></summary>
      

      ``0.21.9-0``,  ``0.21.8-1``,  ``0.21.8-0``,  ``0.21.7-1``,  ``0.21.7-0``,  ``0.21.2-0``,  ``0.21.1-0``,  ``0.21.0-0``,  ``0.20.4-2``,  ``0.20.4-1``,  ``0.20.4-0``,  ``0.20.2-0``,  ``0.20.1-1``,  ``0.20.1-0``,  ``0.19.7-1``,  ``0.19.7-0``,  ``0.18.6-2``,  ``0.18.6-1``,  ``0.18.6-0``,  ``0.17.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.78``
   :depends freetype: 
   :depends joblib: 
   :depends libgcc: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx: 
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :depends six: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install python-bioext

   and update with::

      mamba update python-bioext

  To create a new environment, run::

      mamba create --name myenvname python-bioext

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-bioext:<tag>

   (see `python-bioext/tags`_ for valid values for ``<tag>``)


.. |downloads_python-bioext| image:: https://img.shields.io/conda/dn/bioconda/python-bioext.svg?style=flat
   :target: https://anaconda.org/bioconda/python-bioext
   :alt:   (downloads)
.. |docker_python-bioext| image:: https://quay.io/repository/biocontainers/python-bioext/status
   :target: https://quay.io/repository/biocontainers/python-bioext
.. _`python-bioext/tags`: https://quay.io/repository/biocontainers/python-bioext?tab=tags


.. raw:: html

    <script>
        var package = "python-bioext";
        var versions = ["0.21.9","0.21.8","0.21.8","0.21.7","0.21.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-bioext/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-bioext/README.html