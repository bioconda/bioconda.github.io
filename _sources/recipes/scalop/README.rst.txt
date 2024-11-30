:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scalop'
.. highlight: bash

scalop
======

.. conda:recipe:: scalop
   :replaces_section_title:
   :noindex:

   SCALOP \- Sequence\-based antibody Canonical LOoP structure annotation

   :homepage: https://github.com/oxpig/SCALOP
   :license: BSD / BSD-3-Clause
   :recipe: /`scalop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scalop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scalop/meta.yaml>`_

   


.. conda:package:: scalop

   |downloads_scalop| |docker_scalop|

   :versions:
      
      

      ``2021.01.27-0``

      

   
   :depends biopython: 
   :depends hmmer: ``>=3.1``
   :depends numpy: 
   :depends python: 
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

      mamba install scalop

   and update with::

      mamba update scalop

  To create a new environment, run::

      mamba create --name myenvname scalop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scalop:<tag>

   (see `scalop/tags`_ for valid values for ``<tag>``)


.. |downloads_scalop| image:: https://img.shields.io/conda/dn/bioconda/scalop.svg?style=flat
   :target: https://anaconda.org/bioconda/scalop
   :alt:   (downloads)
.. |docker_scalop| image:: https://quay.io/repository/biocontainers/scalop/status
   :target: https://quay.io/repository/biocontainers/scalop
.. _`scalop/tags`: https://quay.io/repository/biocontainers/scalop?tab=tags


.. raw:: html

    <script>
        var package = "scalop";
        var versions = ["2021.01.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scalop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scalop/README.html