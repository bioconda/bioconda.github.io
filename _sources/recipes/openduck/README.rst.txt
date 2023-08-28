:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'openduck'
.. highlight: bash

openduck
========

.. conda:recipe:: openduck
   :replaces_section_title:
   :noindex:

   Open source library for dynamic undocking \(DUck\)

   :homepage: https://github.com/galaxycomputationalchemistry/duck
   :license: Apache / Apache 2.0
   :recipe: /`openduck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openduck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/openduck/meta.yaml>`_
   :links: doi: :doi:`10.1038/nchem.2660`, usegalaxy-eu: :usegalaxy-eu:`openduck_run_smd`

   


.. conda:package:: openduck

   |downloads_openduck| |docker_openduck|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends cudatoolkit: 
   :depends networkx: 
   :depends python: 
   :depends rdkit: 
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

      mamba install openduck

   and update with::

      mamba update openduck

  To create a new environment, run::

      mamba create --name myenvname openduck

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/openduck:<tag>

   (see `openduck/tags`_ for valid values for ``<tag>``)


.. |downloads_openduck| image:: https://img.shields.io/conda/dn/bioconda/openduck.svg?style=flat
   :target: https://anaconda.org/bioconda/openduck
   :alt:   (downloads)
.. |docker_openduck| image:: https://quay.io/repository/biocontainers/openduck/status
   :target: https://quay.io/repository/biocontainers/openduck
.. _`openduck/tags`: https://quay.io/repository/biocontainers/openduck?tab=tags


.. raw:: html

    <script>
        var package = "openduck";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/openduck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/openduck/README.html