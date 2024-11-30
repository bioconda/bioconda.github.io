:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rabbittclust'
.. highlight: bash

rabbittclust
============

.. conda:recipe:: rabbittclust
   :replaces_section_title:
   :noindex:

   RabbitTClust enables fast clustering analysis of millions bacteria genomes with MinHash sketches

   :homepage: https://github.com/RabbitBio/RabbitTClust
   :license: https://github.com/RabbitBio/RabbitTClust/blob/main/LICENSE.txt
   :recipe: /`rabbittclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rabbittclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rabbittclust/meta.yaml>`_

   


.. conda:package:: rabbittclust

   |downloads_rabbittclust| |docker_rabbittclust|

   :versions:
      
      

      ``2.3.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install rabbittclust

   and update with::

      mamba update rabbittclust

  To create a new environment, run::

      mamba create --name myenvname rabbittclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rabbittclust:<tag>

   (see `rabbittclust/tags`_ for valid values for ``<tag>``)


.. |downloads_rabbittclust| image:: https://img.shields.io/conda/dn/bioconda/rabbittclust.svg?style=flat
   :target: https://anaconda.org/bioconda/rabbittclust
   :alt:   (downloads)
.. |docker_rabbittclust| image:: https://quay.io/repository/biocontainers/rabbittclust/status
   :target: https://quay.io/repository/biocontainers/rabbittclust
.. _`rabbittclust/tags`: https://quay.io/repository/biocontainers/rabbittclust?tab=tags


.. raw:: html

    <script>
        var package = "rabbittclust";
        var versions = ["2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rabbittclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rabbittclust/README.html