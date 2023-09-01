:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vnl'
.. highlight: bash

vnl
===

.. conda:recipe:: vnl
   :replaces_section_title:
   :noindex:

   A multi\-platform collection of C\+\+ software libraries for Computer Vision and Image Understanding.

   :homepage: https://sf.net/projects/vxl/
   :license: BSD
   :recipe: /`vnl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vnl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vnl/meta.yaml>`_

   


.. conda:package:: vnl

   |downloads_vnl| |docker_vnl|

   :versions:
      
      

      ``1.17.0-0``

      

   
   :depends libgcc: 
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

      mamba install vnl

   and update with::

      mamba update vnl

  To create a new environment, run::

      mamba create --name myenvname vnl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vnl:<tag>

   (see `vnl/tags`_ for valid values for ``<tag>``)


.. |downloads_vnl| image:: https://img.shields.io/conda/dn/bioconda/vnl.svg?style=flat
   :target: https://anaconda.org/bioconda/vnl
   :alt:   (downloads)
.. |docker_vnl| image:: https://quay.io/repository/biocontainers/vnl/status
   :target: https://quay.io/repository/biocontainers/vnl
.. _`vnl/tags`: https://quay.io/repository/biocontainers/vnl?tab=tags


.. raw:: html

    <script>
        var package = "vnl";
        var versions = ["1.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vnl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vnl/README.html