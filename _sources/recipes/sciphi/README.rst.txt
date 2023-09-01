:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sciphi'
.. highlight: bash

sciphi
======

.. conda:recipe:: sciphi
   :replaces_section_title:
   :noindex:

   Single\-cell mutation identification via phylogenetic inference

   :homepage: https://github.com/cbg-ethz/SCIPhI
   :license: GNU GENERAL PUBLIC LICENSE Version 3 for SCIPhI and Boost Software License - Version 1.0 for dlib (as an upstream project)
   :recipe: /`sciphi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sciphi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sciphi/meta.yaml>`_

   


.. conda:package:: sciphi

   |downloads_sciphi| |docker_sciphi|

   :versions:
      
      

      ``0.1.7-4``,  ``0.1.7-3``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install sciphi

   and update with::

      mamba update sciphi

  To create a new environment, run::

      mamba create --name myenvname sciphi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sciphi:<tag>

   (see `sciphi/tags`_ for valid values for ``<tag>``)


.. |downloads_sciphi| image:: https://img.shields.io/conda/dn/bioconda/sciphi.svg?style=flat
   :target: https://anaconda.org/bioconda/sciphi
   :alt:   (downloads)
.. |docker_sciphi| image:: https://quay.io/repository/biocontainers/sciphi/status
   :target: https://quay.io/repository/biocontainers/sciphi
.. _`sciphi/tags`: https://quay.io/repository/biocontainers/sciphi?tab=tags


.. raw:: html

    <script>
        var package = "sciphi";
        var versions = ["0.1.7","0.1.7","0.1.7","0.1.7","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sciphi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sciphi/README.html