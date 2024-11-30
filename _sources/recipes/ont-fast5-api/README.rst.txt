:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ont-fast5-api'
.. highlight: bash

ont-fast5-api
=============

.. conda:recipe:: ont-fast5-api
   :replaces_section_title:
   :noindex:

   Oxford Nanopore Technologies fast5 API software

   :homepage: https://github.com/nanoporetech/ont_fast5_api
   :license: MOZILLA / MPL-2.0
   :recipe: /`ont-fast5-api <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-fast5-api>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-fast5-api/meta.yaml>`_

   


.. conda:package:: ont-fast5-api

   |downloads_ont-fast5-api| |docker_ont-fast5-api|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.3-0</code>,  <code>4.1.2-0</code>,  <code>4.1.1-0</code>,  <code>4.1.0-0</code>,  <code>4.0.2-0</code>,  <code>4.0.0-0</code>,  <code>3.3.0-0</code>,  <code>3.2.0-0</code>,  <code>3.1.6-0</code>,  </span></summary>
      

      ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.1-0``,  ``4.1.0-0``,  ``4.0.2-0``,  ``4.0.0-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.6-0``,  ``3.1.5-0``,  ``3.1.4-0``,  ``3.1.3-2``,  ``3.1.3-1``,  ``3.1.3-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.8-1``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``0.4.1-1``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends h5py: ``>=2.6``
   :depends hdf5: 
   :depends numpy: ``>=1.11``
   :depends packaging: 
   :depends progressbar33: ``>=2.3.1``
   :depends python: ``>=3``
   :depends six: ``>=1.9``
   :depends tar: 
   :depends zstd: 
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

      mamba install ont-fast5-api

   and update with::

      mamba update ont-fast5-api

  To create a new environment, run::

      mamba create --name myenvname ont-fast5-api

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ont-fast5-api:<tag>

   (see `ont-fast5-api/tags`_ for valid values for ``<tag>``)


.. |downloads_ont-fast5-api| image:: https://img.shields.io/conda/dn/bioconda/ont-fast5-api.svg?style=flat
   :target: https://anaconda.org/bioconda/ont-fast5-api
   :alt:   (downloads)
.. |docker_ont-fast5-api| image:: https://quay.io/repository/biocontainers/ont-fast5-api/status
   :target: https://quay.io/repository/biocontainers/ont-fast5-api
.. _`ont-fast5-api/tags`: https://quay.io/repository/biocontainers/ont-fast5-api?tab=tags


.. raw:: html

    <script>
        var package = "ont-fast5-api";
        var versions = ["4.1.3","4.1.2","4.1.1","4.1.0","4.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ont-fast5-api/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ont-fast5-api/README.html