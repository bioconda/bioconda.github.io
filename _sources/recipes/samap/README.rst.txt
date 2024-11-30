:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samap'
.. highlight: bash

samap
=====

.. conda:recipe:: samap
   :replaces_section_title:
   :noindex:

   The SAMap algorithm

   :homepage: https://github.com/atarashansky/SAMap
   :license: MIT / MIT
   :recipe: /`samap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samap/meta.yaml>`_

   


.. conda:package:: samap

   |downloads_samap| |docker_samap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.15-0</code>,  <code>1.0.14-0</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``1.0.15-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends dill: 
   :depends h5py: ``<=2.10``
   :depends hnswlib: 
   :depends leidenalg: 
   :depends python: ``<3.8``
   :depends sam-algorithm: ``>=0.8.4``
   :depends scanpy: 
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

      mamba install samap

   and update with::

      mamba update samap

  To create a new environment, run::

      mamba create --name myenvname samap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/samap:<tag>

   (see `samap/tags`_ for valid values for ``<tag>``)


.. |downloads_samap| image:: https://img.shields.io/conda/dn/bioconda/samap.svg?style=flat
   :target: https://anaconda.org/bioconda/samap
   :alt:   (downloads)
.. |docker_samap| image:: https://quay.io/repository/biocontainers/samap/status
   :target: https://quay.io/repository/biocontainers/samap
.. _`samap/tags`: https://quay.io/repository/biocontainers/samap?tab=tags


.. raw:: html

    <script>
        var package = "samap";
        var versions = ["1.0.15","1.0.14","1.0.13","1.0.12","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samap/README.html