:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flapjack'
.. highlight: bash

flapjack
========

.. conda:recipe:: flapjack
   :replaces_section_title:
   :noindex:

   Flapjack provides interactive visualizations of high\-throughput genotyping data.

   :homepage: https://ics.hutton.ac.uk/flapjack
   :license: BSD-2-Clause
   :recipe: /`flapjack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flapjack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flapjack/meta.yaml>`_

   


.. conda:package:: flapjack

   |downloads_flapjack| |docker_flapjack|

   :versions:
      
      

      ``1.20.10.07-1``,  ``1.20.10.07-0``,  ``1.18.06.29-1``,  ``1.18.06.29-0``,  ``1.18.06.13-2``,  ``1.18.06.13-1``,  ``1.16.10.31-1``,  ``1.16.10.31-0``

      

   
   :depends openjdk: ``>=11``
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

      mamba install flapjack

   and update with::

      mamba update flapjack

  To create a new environment, run::

      mamba create --name myenvname flapjack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flapjack:<tag>

   (see `flapjack/tags`_ for valid values for ``<tag>``)


.. |downloads_flapjack| image:: https://img.shields.io/conda/dn/bioconda/flapjack.svg?style=flat
   :target: https://anaconda.org/bioconda/flapjack
   :alt:   (downloads)
.. |docker_flapjack| image:: https://quay.io/repository/biocontainers/flapjack/status
   :target: https://quay.io/repository/biocontainers/flapjack
.. _`flapjack/tags`: https://quay.io/repository/biocontainers/flapjack?tab=tags


.. raw:: html

    <script>
        var package = "flapjack";
        var versions = ["1.20.10.07","1.20.10.07","1.18.06.29","1.18.06.29","1.18.06.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flapjack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flapjack/README.html