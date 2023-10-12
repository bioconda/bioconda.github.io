:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neoloop'
.. highlight: bash

neoloop
=======

.. conda:recipe:: neoloop
   :replaces_section_title:
   :noindex:

   Predict neo\-loops induced by structural variations

   :homepage: https://github.com/XiaoTaoWang/NeoLoopFinder
   :license: OTHER / https://github.com/XiaoTaoWang/NeoLoopFinder/blob/master/LICENSE
   :recipe: /`neoloop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neoloop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neoloop/meta.yaml>`_

   


.. conda:package:: neoloop

   |downloads_neoloop| |docker_neoloop|

   :versions:
      
      

      ``0.4.3.post2-0``

      

   
   :depends cooler: 
   :depends h5py: 
   :depends intervaltree: 
   :depends joblib: ``1.1.0.*``
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends pomegranate: ``0.14.8.*``
   :depends pybigwig: 
   :depends pyensembl: 
   :depends python: ``>=3.6``
   :depends r-base: 
   :depends r-mgcv: 
   :depends rpy2: 
   :depends scikit-learn: ``1.1.2.*``
   :depends scipy: 
   :depends tadlib: 
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

      mamba install neoloop

   and update with::

      mamba update neoloop

  To create a new environment, run::

      mamba create --name myenvname neoloop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/neoloop:<tag>

   (see `neoloop/tags`_ for valid values for ``<tag>``)


.. |downloads_neoloop| image:: https://img.shields.io/conda/dn/bioconda/neoloop.svg?style=flat
   :target: https://anaconda.org/bioconda/neoloop
   :alt:   (downloads)
.. |docker_neoloop| image:: https://quay.io/repository/biocontainers/neoloop/status
   :target: https://quay.io/repository/biocontainers/neoloop
.. _`neoloop/tags`: https://quay.io/repository/biocontainers/neoloop?tab=tags


.. raw:: html

    <script>
        var package = "neoloop";
        var versions = ["0.4.3.post2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neoloop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neoloop/README.html