:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sciphin'
.. highlight: bash

sciphin
=======

.. conda:recipe:: sciphin
   :replaces_section_title:
   :noindex:

   Single\-Cell mutation Identification via finite\-sites Phylogenetic Inference

   :homepage: https://github.com/cbg-ethz/SCIPhI
   :license: GNU GENERAL PUBLIC LICENSE Version 3 for SCIPhIN and Boost Software License - Version 1.0 for dlib (as an upstream project)
   :recipe: /`sciphin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sciphin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sciphin/meta.yaml>`_

   


.. conda:package:: sciphin

   |downloads_sciphin| |docker_sciphin|

   :versions:
      
      

      ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends boost-cpp: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install sciphin

   and update with::

      mamba update sciphin

  To create a new environment, run::

      mamba create --name myenvname sciphin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sciphin:<tag>

   (see `sciphin/tags`_ for valid values for ``<tag>``)


.. |downloads_sciphin| image:: https://img.shields.io/conda/dn/bioconda/sciphin.svg?style=flat
   :target: https://anaconda.org/bioconda/sciphin
   :alt:   (downloads)
.. |docker_sciphin| image:: https://quay.io/repository/biocontainers/sciphin/status
   :target: https://quay.io/repository/biocontainers/sciphin
.. _`sciphin/tags`: https://quay.io/repository/biocontainers/sciphin?tab=tags


.. raw:: html

    <script>
        var package = "sciphin";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sciphin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sciphin/README.html