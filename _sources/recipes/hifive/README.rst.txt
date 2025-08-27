:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hifive'
.. highlight: bash

hifive
======

.. conda:recipe:: hifive
   :replaces_section_title:
   :noindex:

   Python library for normalizing and analyzing HiC and 5C data

   :homepage: https://github.com/bxlab/hifive
   :license: MIT / MIT
   :recipe: /`hifive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifive/meta.yaml>`_

   


.. conda:package:: hifive

   |downloads_hifive| |docker_hifive|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.7-4</code>,  <code>1.5.7-3</code>,  <code>1.5.7-2</code>,  <code>1.5.7-1</code>,  <code>1.5.7-0</code>,  <code>1.5.6-2</code>,  <code>1.5.6-0</code>,  <code>1.5.3-0</code>,  <code>1.5.1-0</code>,  </span></summary>
      

      ``1.5.7-4``,  ``1.5.7-3``,  ``1.5.7-2``,  ``1.5.7-1``,  ``1.5.7-0``,  ``1.5.6-2``,  ``1.5.6-0``,  ``1.5.3-0``,  ``1.5.1-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends h5py: 
   :depends libcxx: ``>=12.0.1``
   :depends numpy: 
   :depends pillow: 
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends pyx: ``0.12.1``
   :depends scipy: 
   :depends setuptools_cython: 
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

      mamba install hifive

   and update with::

      mamba update hifive

  To create a new environment, run::

      mamba create --name myenvname hifive

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hifive:<tag>

   (see `hifive/tags`_ for valid values for ``<tag>``)


.. |downloads_hifive| image:: https://img.shields.io/conda/dn/bioconda/hifive.svg?style=flat
   :target: https://anaconda.org/bioconda/hifive
   :alt:   (downloads)
.. |docker_hifive| image:: https://quay.io/repository/biocontainers/hifive/status
   :target: https://quay.io/repository/biocontainers/hifive
.. _`hifive/tags`: https://quay.io/repository/biocontainers/hifive?tab=tags


.. raw:: html

    <script>
        var package = "hifive";
        var versions = ["1.5.7","1.5.7","1.5.7","1.5.7","1.5.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hifive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hifive/README.html