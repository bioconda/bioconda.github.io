:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orientagraph'
.. highlight: bash

orientagraph
============

.. conda:recipe:: orientagraph
   :replaces_section_title:
   :noindex:

   OrientAGraph enables Maximum Likelihood Network Orientation \(MNLO\)\, as a standalone routine or as a search heuristic within TreeMix\, a popular package for estimating admixture graphs from f\-statistics \(or related quantities\).

   :homepage: https://github.com/sriramlab/OrientAGraph
   :license: GPL / GPL3
   :recipe: /`orientagraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orientagraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orientagraph/meta.yaml>`_
   :links: biotools: :biotools:`orientagraph`, doi: :doi:`10.1101/2021.02.02.429467`

   


.. conda:package:: orientagraph

   |downloads_orientagraph| |docker_orientagraph|

   :versions:
      
      

      ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install orientagraph

   and update with::

      mamba update orientagraph

  To create a new environment, run::

      mamba create --name myenvname orientagraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orientagraph:<tag>

   (see `orientagraph/tags`_ for valid values for ``<tag>``)


.. |downloads_orientagraph| image:: https://img.shields.io/conda/dn/bioconda/orientagraph.svg?style=flat
   :target: https://anaconda.org/bioconda/orientagraph
   :alt:   (downloads)
.. |docker_orientagraph| image:: https://quay.io/repository/biocontainers/orientagraph/status
   :target: https://quay.io/repository/biocontainers/orientagraph
.. _`orientagraph/tags`: https://quay.io/repository/biocontainers/orientagraph?tab=tags


.. raw:: html

    <script>
        var package = "orientagraph";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orientagraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orientagraph/README.html