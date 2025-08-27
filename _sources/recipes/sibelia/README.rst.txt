:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sibelia'
.. highlight: bash

sibelia
=======

.. conda:recipe:: sibelia
   :replaces_section_title:
   :noindex:

   Genome comparison via de Bruijn graph.

   :homepage: https://github.com/bioinf/Sibelia
   :license: GPLv2
   :recipe: /`sibelia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sibelia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sibelia/meta.yaml>`_

   


.. conda:package:: sibelia

   |downloads_sibelia| |docker_sibelia|

   :versions:
      
      

      ``3.0.7-2``,  ``3.0.7-1``,  ``3.0.7-0``,  ``3.0.6-0``

      

   
   :depends libcxx: ``>=4.0.1``
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

      mamba install sibelia

   and update with::

      mamba update sibelia

  To create a new environment, run::

      mamba create --name myenvname sibelia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sibelia:<tag>

   (see `sibelia/tags`_ for valid values for ``<tag>``)


.. |downloads_sibelia| image:: https://img.shields.io/conda/dn/bioconda/sibelia.svg?style=flat
   :target: https://anaconda.org/bioconda/sibelia
   :alt:   (downloads)
.. |docker_sibelia| image:: https://quay.io/repository/biocontainers/sibelia/status
   :target: https://quay.io/repository/biocontainers/sibelia
.. _`sibelia/tags`: https://quay.io/repository/biocontainers/sibelia?tab=tags


.. raw:: html

    <script>
        var package = "sibelia";
        var versions = ["3.0.7","3.0.7","3.0.7","3.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sibelia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sibelia/README.html