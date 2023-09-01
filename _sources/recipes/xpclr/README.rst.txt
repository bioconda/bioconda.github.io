:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xpclr'
.. highlight: bash

xpclr
=====

.. conda:recipe:: xpclr
   :replaces_section_title:
   :noindex:

   Code to compute xp\-clr values to detect selection as per Chen\, Patterson \& Reich 2010.

   :homepage: https://github.com/hardingnj/xpclr
   :license: MIT / MIT
   :recipe: /`xpclr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpclr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpclr/meta.yaml>`_

   


.. conda:package:: xpclr

   |downloads_xpclr| |docker_xpclr|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``1.1-0``

      

   
   :depends h5py: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scikit-allel: ``>=1.2``
   :depends scipy: 
   :depends zarr: ``>=2.2``
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

      mamba install xpclr

   and update with::

      mamba update xpclr

  To create a new environment, run::

      mamba create --name myenvname xpclr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xpclr:<tag>

   (see `xpclr/tags`_ for valid values for ``<tag>``)


.. |downloads_xpclr| image:: https://img.shields.io/conda/dn/bioconda/xpclr.svg?style=flat
   :target: https://anaconda.org/bioconda/xpclr
   :alt:   (downloads)
.. |docker_xpclr| image:: https://quay.io/repository/biocontainers/xpclr/status
   :target: https://quay.io/repository/biocontainers/xpclr
.. _`xpclr/tags`: https://quay.io/repository/biocontainers/xpclr?tab=tags


.. raw:: html

    <script>
        var package = "xpclr";
        var versions = ["1.1.2","1.1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xpclr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xpclr/README.html