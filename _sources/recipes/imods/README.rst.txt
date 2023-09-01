:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'imods'
.. highlight: bash

imods
=====

.. conda:recipe:: imods
   :replaces_section_title:
   :noindex:

   toolkit to perform Normal Mode Analysis \(NMA\) in internal coordinates \(IC\) on both protein and nucleic acid atomic structures.

   :homepage: https://chaconlab.org/multiscale-simulations/imod
   :license: OTHER / Copyright 2018 Chaconlab.org https://chaconlab.org/images/download/License.txt
   :recipe: /`imods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imods/meta.yaml>`_

   iMOD is an versatile toolkit to perform Normal Mode Analysis \(NMA\) in internal coordinates \(IC\) on both protein and nucleic acid atomic structures. Vibrational analysis\, motion animations\, morphing trajectories and Monte\-Carlo simulations can be easily carried out at different scales of resolution using this toolkit.


.. conda:package:: imods

   |downloads_imods| |docker_imods|

   :versions:
      
      

      ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends arpack: ``>=3.7.0,<3.7.1.0a0``
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

      mamba install imods

   and update with::

      mamba update imods

  To create a new environment, run::

      mamba create --name myenvname imods

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/imods:<tag>

   (see `imods/tags`_ for valid values for ``<tag>``)


.. |downloads_imods| image:: https://img.shields.io/conda/dn/bioconda/imods.svg?style=flat
   :target: https://anaconda.org/bioconda/imods
   :alt:   (downloads)
.. |docker_imods| image:: https://quay.io/repository/biocontainers/imods/status
   :target: https://quay.io/repository/biocontainers/imods
.. _`imods/tags`: https://quay.io/repository/biocontainers/imods?tab=tags


.. raw:: html

    <script>
        var package = "imods";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imods/README.html