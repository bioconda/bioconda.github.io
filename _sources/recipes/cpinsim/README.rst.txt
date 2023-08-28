:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cpinsim'
.. highlight: bash

cpinsim
=======

.. conda:recipe:: cpinsim
   :replaces_section_title:
   :noindex:

   CPINSim is a package for the simulation of protein complex assembly with constrained
   protein interaction networks.


   :homepage: https://github.com/BiancaStoecker/cpinsim
   :license: MIT / MIT License
   :recipe: /`cpinsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpinsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpinsim/meta.yaml>`_

   


.. conda:package:: cpinsim

   |downloads_cpinsim| |docker_cpinsim|

   :versions:
      
      

      ``0.5.2-2``,  ``0.5.2-1``,  ``0.5.2-0``

      

   
   :depends bitarray: 
   :depends networkx: 
   :depends python: ``>3``
   :depends scipy: 
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

      mamba install cpinsim

   and update with::

      mamba update cpinsim

  To create a new environment, run::

      mamba create --name myenvname cpinsim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cpinsim:<tag>

   (see `cpinsim/tags`_ for valid values for ``<tag>``)


.. |downloads_cpinsim| image:: https://img.shields.io/conda/dn/bioconda/cpinsim.svg?style=flat
   :target: https://anaconda.org/bioconda/cpinsim
   :alt:   (downloads)
.. |docker_cpinsim| image:: https://quay.io/repository/biocontainers/cpinsim/status
   :target: https://quay.io/repository/biocontainers/cpinsim
.. _`cpinsim/tags`: https://quay.io/repository/biocontainers/cpinsim?tab=tags


.. raw:: html

    <script>
        var package = "cpinsim";
        var versions = ["0.5.2","0.5.2","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cpinsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cpinsim/README.html