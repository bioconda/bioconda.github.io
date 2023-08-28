:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanocompore'
.. highlight: bash

nanocompore
===========

.. conda:recipe:: nanocompore
   :replaces_section_title:
   :noindex:

   Nanocompore identifies raw signal changes between two conditions dRNA\-Seq data.

   :homepage: https://github.com/tleonardi/nanocompore
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`nanocompore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocompore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocompore/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`nanocompore_db`

   


.. conda:package:: nanocompore

   |downloads_nanocompore| |docker_nanocompore|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.0rc3.post2-2``,  ``1.0.0rc3.post2-0``,  ``1.0.0rc3.post1-0``

      

   
   :depends bedparse: 
   :depends importlib_metadata: 
   :depends loguru: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.16.0``
   :depends pandas: 
   :depends pyfaidx: 
   :depends python: ``>=3.6.1``
   :depends pyyaml: 
   :depends scikit-learn: ``0.21.*``
   :depends scipy: ``>=1.2.0``
   :depends seaborn: 
   :depends statsmodels: ``>=0.9.0``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install nanocompore

   and update with::

      mamba update nanocompore

  To create a new environment, run::

      mamba create --name myenvname nanocompore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanocompore:<tag>

   (see `nanocompore/tags`_ for valid values for ``<tag>``)


.. |downloads_nanocompore| image:: https://img.shields.io/conda/dn/bioconda/nanocompore.svg?style=flat
   :target: https://anaconda.org/bioconda/nanocompore
   :alt:   (downloads)
.. |docker_nanocompore| image:: https://quay.io/repository/biocontainers/nanocompore/status
   :target: https://quay.io/repository/biocontainers/nanocompore
.. _`nanocompore/tags`: https://quay.io/repository/biocontainers/nanocompore?tab=tags


.. raw:: html

    <script>
        var package = "nanocompore";
        var versions = ["1.0.4","1.0.3","1.0.2","1.0.0rc3.post2","1.0.0rc3.post2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanocompore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanocompore/README.html