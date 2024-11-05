:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rotate'
.. highlight: bash

rotate
======

.. conda:recipe:: rotate
   :replaces_section_title:
   :noindex:

   Simple program to rotate a circular sequence to start at a given position or string.

   :homepage: https://github.com/richarddurbin/rotate
   :license: MIT / MIT
   :recipe: /`rotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rotate/meta.yaml>`_

   


.. conda:package:: rotate

   |downloads_rotate| |docker_rotate|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends libgcc: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install rotate

   and update with::

      mamba update rotate

  To create a new environment, run::

      mamba create --name myenvname rotate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rotate:<tag>

   (see `rotate/tags`_ for valid values for ``<tag>``)


.. |downloads_rotate| image:: https://img.shields.io/conda/dn/bioconda/rotate.svg?style=flat
   :target: https://anaconda.org/bioconda/rotate
   :alt:   (downloads)
.. |docker_rotate| image:: https://quay.io/repository/biocontainers/rotate/status
   :target: https://quay.io/repository/biocontainers/rotate
.. _`rotate/tags`: https://quay.io/repository/biocontainers/rotate?tab=tags


.. raw:: html

    <script>
        var package = "rotate";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rotate/README.html