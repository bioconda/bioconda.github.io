:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unmicst'
.. highlight: bash

unmicst
=======

.. conda:recipe:: unmicst
   :replaces_section_title:
   :noindex:

   UNMICST \- UnMicst Nuclear Segmentation Tool

   :homepage: https://github.com/labsyspharm/UnMicst
   :license: MIT
   :recipe: /`unmicst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unmicst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unmicst/meta.yaml>`_

   


.. conda:package:: unmicst

   |downloads_unmicst| |docker_unmicst|

   :versions:
      
      

      ``2.6.6-0``

      

   
   :depends keras: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.9``
   :depends scipy: 
   :depends tensorflow: 
   :depends tifffile: 
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

      mamba install unmicst

   and update with::

      mamba update unmicst

  To create a new environment, run::

      mamba create --name myenvname unmicst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unmicst:<tag>

   (see `unmicst/tags`_ for valid values for ``<tag>``)


.. |downloads_unmicst| image:: https://img.shields.io/conda/dn/bioconda/unmicst.svg?style=flat
   :target: https://anaconda.org/bioconda/unmicst
   :alt:   (downloads)
.. |docker_unmicst| image:: https://quay.io/repository/biocontainers/unmicst/status
   :target: https://quay.io/repository/biocontainers/unmicst
.. _`unmicst/tags`: https://quay.io/repository/biocontainers/unmicst?tab=tags


.. raw:: html

    <script>
        var package = "unmicst";
        var versions = ["2.6.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unmicst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unmicst/README.html