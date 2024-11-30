:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'knot'
.. highlight: bash

knot
====

.. conda:recipe:: knot
   :replaces_section_title:
   :noindex:

   Detection of knots in protein folds.

   :homepage: http://mathbio.nimr.mrc.ac.uk/wiki/Software#KNOT
   :license: GPL
   :recipe: /`knot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knot/meta.yaml>`_

   


.. conda:package:: knot

   |downloads_knot| |docker_knot|

   :versions:
      
      

      ``1.0.0-1``

      

   
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

      mamba install knot

   and update with::

      mamba update knot

  To create a new environment, run::

      mamba create --name myenvname knot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/knot:<tag>

   (see `knot/tags`_ for valid values for ``<tag>``)


.. |downloads_knot| image:: https://img.shields.io/conda/dn/bioconda/knot.svg?style=flat
   :target: https://anaconda.org/bioconda/knot
   :alt:   (downloads)
.. |docker_knot| image:: https://quay.io/repository/biocontainers/knot/status
   :target: https://quay.io/repository/biocontainers/knot
.. _`knot/tags`: https://quay.io/repository/biocontainers/knot?tab=tags


.. raw:: html

    <script>
        var package = "knot";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/knot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/knot/README.html