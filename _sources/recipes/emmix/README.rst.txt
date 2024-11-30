:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emmix'
.. highlight: bash

emmix
=====

.. conda:recipe:: emmix/1.3
   :replaces_section_title:
   :noindex:

   A tool that fits a mixture model of multivariate normal or t\-distributed components to a given data set.

   :homepage: https://people.smp.uq.edu.au/GeoffMcLachlan/emmix/emmix.html
   :license: Available freely for non-commercial use only
   :recipe: /`emmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emmix>`_/`1.3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emmix/1.3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emmix/1.3/meta.yaml>`_

   


.. conda:package:: emmix

   |downloads_emmix| |docker_emmix|

   :versions:
      
      

      ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libgfortran-ng: ``>=7,<8.0a0``
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

      mamba install emmix

   and update with::

      mamba update emmix

  To create a new environment, run::

      mamba create --name myenvname emmix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/emmix:<tag>

   (see `emmix/tags`_ for valid values for ``<tag>``)


.. |downloads_emmix| image:: https://img.shields.io/conda/dn/bioconda/emmix.svg?style=flat
   :target: https://anaconda.org/bioconda/emmix
   :alt:   (downloads)
.. |docker_emmix| image:: https://quay.io/repository/biocontainers/emmix/status
   :target: https://quay.io/repository/biocontainers/emmix
.. _`emmix/tags`: https://quay.io/repository/biocontainers/emmix?tab=tags


.. raw:: html

    <script>
        var package = "emmix";
        var versions = ["1.3","1.3","1.3","1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emmix/README.html