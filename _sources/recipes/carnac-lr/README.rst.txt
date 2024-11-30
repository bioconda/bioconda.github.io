:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'carnac-lr'
.. highlight: bash

carnac-lr
=========

.. conda:recipe:: carnac-lr
   :replaces_section_title:
   :noindex:

   Clustering coefficient\-based Acquisition of RNA Communities in Long Read

   :homepage: https://github.com/kamimrcht/CARNAC-LR
   :license: AGPL / GNU Affero General Public License
   :recipe: /`carnac-lr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carnac-lr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carnac-lr/meta.yaml>`_

   


.. conda:package:: carnac-lr

   |downloads_carnac-lr| |docker_carnac-lr|

   :versions:
      
      

      ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=3``
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

      mamba install carnac-lr

   and update with::

      mamba update carnac-lr

  To create a new environment, run::

      mamba create --name myenvname carnac-lr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/carnac-lr:<tag>

   (see `carnac-lr/tags`_ for valid values for ``<tag>``)


.. |downloads_carnac-lr| image:: https://img.shields.io/conda/dn/bioconda/carnac-lr.svg?style=flat
   :target: https://anaconda.org/bioconda/carnac-lr
   :alt:   (downloads)
.. |docker_carnac-lr| image:: https://quay.io/repository/biocontainers/carnac-lr/status
   :target: https://quay.io/repository/biocontainers/carnac-lr
.. _`carnac-lr/tags`: https://quay.io/repository/biocontainers/carnac-lr?tab=tags


.. raw:: html

    <script>
        var package = "carnac-lr";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/carnac-lr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/carnac-lr/README.html