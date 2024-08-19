:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasnet'
.. highlight: bash

plasnet
=======

.. conda:recipe:: plasnet
   :replaces_section_title:
   :noindex:

   Clustering\, visualising and exploring plasmid networks

   :homepage: https://github.com/leoisl/plasnet
   :license: MIT / MIT
   :recipe: /`plasnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasnet/meta.yaml>`_

   


.. conda:package:: plasnet

   |downloads_plasnet| |docker_plasnet|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.1-0``

      

   
   :depends click: 
   :depends networkx: 
   :depends pandas: 
   :depends python: ``>=3.9``
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

      mamba install plasnet

   and update with::

      mamba update plasnet

  To create a new environment, run::

      mamba create --name myenvname plasnet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plasnet:<tag>

   (see `plasnet/tags`_ for valid values for ``<tag>``)


.. |downloads_plasnet| image:: https://img.shields.io/conda/dn/bioconda/plasnet.svg?style=flat
   :target: https://anaconda.org/bioconda/plasnet
   :alt:   (downloads)
.. |docker_plasnet| image:: https://quay.io/repository/biocontainers/plasnet/status
   :target: https://quay.io/repository/biocontainers/plasnet
.. _`plasnet/tags`: https://quay.io/repository/biocontainers/plasnet?tab=tags


.. raw:: html

    <script>
        var package = "plasnet";
        var versions = ["0.6.0","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasnet/README.html