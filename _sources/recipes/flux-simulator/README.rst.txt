:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flux-simulator'
.. highlight: bash

flux-simulator
==============

.. conda:recipe:: flux-simulator
   :replaces_section_title:
   :noindex:

   Tool for modeling RNA\-Seq experiments in silico

   :homepage: http://sammeth.net/confluence/display/SIM/Home
   :license: BSD
   :recipe: /`flux-simulator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flux-simulator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flux-simulator/meta.yaml>`_

   


.. conda:package:: flux-simulator

   |downloads_flux-simulator| |docker_flux-simulator|

   :versions:
      
      

      ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``

      

   
   :depends openjdk: 
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

      mamba install flux-simulator

   and update with::

      mamba update flux-simulator

  To create a new environment, run::

      mamba create --name myenvname flux-simulator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flux-simulator:<tag>

   (see `flux-simulator/tags`_ for valid values for ``<tag>``)


.. |downloads_flux-simulator| image:: https://img.shields.io/conda/dn/bioconda/flux-simulator.svg?style=flat
   :target: https://anaconda.org/bioconda/flux-simulator
   :alt:   (downloads)
.. |docker_flux-simulator| image:: https://quay.io/repository/biocontainers/flux-simulator/status
   :target: https://quay.io/repository/biocontainers/flux-simulator
.. _`flux-simulator/tags`: https://quay.io/repository/biocontainers/flux-simulator?tab=tags


.. raw:: html

    <script>
        var package = "flux-simulator";
        var versions = ["1.2.1","1.2.1","1.2.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flux-simulator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flux-simulator/README.html