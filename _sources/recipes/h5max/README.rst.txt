:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'h5max'
.. highlight: bash

h5max
=====

.. conda:recipe:: h5max
   :replaces_section_title:
   :noindex:

   scipy.sparse support on h5py

   :homepage: https://github.com/jdcla/h5max
   :license: MIT
   :recipe: /`h5max <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/h5max>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/h5max/meta.yaml>`_

   


.. conda:package:: h5max

   |downloads_h5max| |docker_h5max|

   :versions:
      
      

      ``0.3.4-0``

      

   
   :depends h5py: ``>=3.15.1``
   :depends numpy: ``>=1.21.0``
   :depends python: ``>=3.9``
   :depends scipy: ``>=1.7.3``
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

      mamba install h5max

   and update with::

      mamba update h5max

  To create a new environment, run::

      mamba create --name myenvname h5max

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/h5max:<tag>

   (see `h5max/tags`_ for valid values for ``<tag>``)


.. |downloads_h5max| image:: https://img.shields.io/conda/dn/bioconda/h5max.svg?style=flat
   :target: https://anaconda.org/bioconda/h5max
   :alt:   (downloads)
.. |docker_h5max| image:: https://quay.io/repository/biocontainers/h5max/status
   :target: https://quay.io/repository/biocontainers/h5max
.. _`h5max/tags`: https://quay.io/repository/biocontainers/h5max?tab=tags


.. raw:: html

    <script>
        var package = "h5max";
        var versions = ["0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/h5max/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/h5max/README.html