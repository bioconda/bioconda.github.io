:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmash'
.. highlight: bash

cmash
=====

.. conda:recipe:: cmash
   :replaces_section_title:
   :noindex:

   Fast and accurate set similarity estimation via containment min hash \(for genomic datasets\).

   :homepage: https://github.com/dkoslicki/CMash
   :license: BSD / BSD-3-Clause
   :recipe: /`cmash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmash/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.amc.2019.02.018`

   


.. conda:package:: cmash

   |downloads_cmash| |docker_cmash|

   :versions:
      
      

      ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``

      

   
   :depends blist: 
   :depends h5py: 
   :depends hydra: 
   :depends khmer: ``>=2.1.1``
   :depends marisa-trie: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.14``
   :depends pandas: ``>=0.21.1``
   :depends pycairo: 
   :depends python: 
   :depends scipy: 
   :depends screed: ``>=0.9``
   :depends six: 
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

      mamba install cmash

   and update with::

      mamba update cmash

  To create a new environment, run::

      mamba create --name myenvname cmash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cmash:<tag>

   (see `cmash/tags`_ for valid values for ``<tag>``)


.. |downloads_cmash| image:: https://img.shields.io/conda/dn/bioconda/cmash.svg?style=flat
   :target: https://anaconda.org/bioconda/cmash
   :alt:   (downloads)
.. |docker_cmash| image:: https://quay.io/repository/biocontainers/cmash/status
   :target: https://quay.io/repository/biocontainers/cmash
.. _`cmash/tags`: https://quay.io/repository/biocontainers/cmash?tab=tags


.. raw:: html

    <script>
        var package = "cmash";
        var versions = ["0.5.2","0.5.1","0.5.1","0.5.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmash/README.html