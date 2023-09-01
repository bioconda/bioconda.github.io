:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nolb'
.. highlight: bash

nolb
====

.. conda:recipe:: nolb
   :replaces_section_title:
   :noindex:

   NOn\-Linear rigid Block NMA approach \(NOLB\) is a conceptually simple and computationally efficient method for non\-linear normal mode analysis.

   :homepage: https://team.inria.fr/nano-d/software/nolb-normal-modes/
   :license: All rights reserved. The academic version is free.
   :recipe: /`nolb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nolb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nolb/meta.yaml>`_

   The key observation of the method is that the angular velocity of a residue can be interpreted as the result of an implicit force\, such that the motion of the residue can be considered as a pure rotation about a certain center.


.. conda:package:: nolb

   |downloads_nolb| |docker_nolb|

   :versions:
      
      

      ``1.9-0``

      

   
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

      mamba install nolb

   and update with::

      mamba update nolb

  To create a new environment, run::

      mamba create --name myenvname nolb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nolb:<tag>

   (see `nolb/tags`_ for valid values for ``<tag>``)


.. |downloads_nolb| image:: https://img.shields.io/conda/dn/bioconda/nolb.svg?style=flat
   :target: https://anaconda.org/bioconda/nolb
   :alt:   (downloads)
.. |docker_nolb| image:: https://quay.io/repository/biocontainers/nolb/status
   :target: https://quay.io/repository/biocontainers/nolb
.. _`nolb/tags`: https://quay.io/repository/biocontainers/nolb?tab=tags


.. raw:: html

    <script>
        var package = "nolb";
        var versions = ["1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nolb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nolb/README.html