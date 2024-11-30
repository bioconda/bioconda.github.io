:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scnic'
.. highlight: bash

scnic
=====

.. conda:recipe:: scnic
   :replaces_section_title:
   :noindex:

   SCNIC\: Sparse Cooccurence Network Investigation for Compositional data

   :homepage: https://github.com/lozuponelab/SCNIC
   :license: BSD / BSD-3-Clause
   :recipe: /`scnic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scnic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scnic/meta.yaml>`_

   


.. conda:package:: scnic

   |downloads_scnic| |docker_scnic|

   :versions:
      
      

      ``0.6.6-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.1-0``

      

   
   :depends biom-format: 
   :depends fastspar: 
   :depends h5py: 
   :depends matplotlib-base: 
   :depends networkx: ``>=2``
   :depends numpy: 
   :depends pandas: ``>=1``
   :depends python: ``>=3``
   :depends scikit-bio: 
   :depends scipy: ``>=1.9.0,<=1.10.1``
   :depends seaborn-base: 
   :depends statsmodels: 
   :depends tqdm: 
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

      mamba install scnic

   and update with::

      mamba update scnic

  To create a new environment, run::

      mamba create --name myenvname scnic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scnic:<tag>

   (see `scnic/tags`_ for valid values for ``<tag>``)


.. |downloads_scnic| image:: https://img.shields.io/conda/dn/bioconda/scnic.svg?style=flat
   :target: https://anaconda.org/bioconda/scnic
   :alt:   (downloads)
.. |docker_scnic| image:: https://quay.io/repository/biocontainers/scnic/status
   :target: https://quay.io/repository/biocontainers/scnic
.. _`scnic/tags`: https://quay.io/repository/biocontainers/scnic?tab=tags


.. raw:: html

    <script>
        var package = "scnic";
        var versions = ["0.6.6","0.6.3","0.6.2","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scnic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scnic/README.html