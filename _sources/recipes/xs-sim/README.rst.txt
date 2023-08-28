:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xs-sim'
.. highlight: bash

xs-sim
======

.. conda:recipe:: xs-sim
   :replaces_section_title:
   :noindex:

   Simulates NGS reads

   :homepage: https://github.com/pratas/xs
   :license: GPL-2.0
   :recipe: /`xs-sim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xs-sim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xs-sim/meta.yaml>`_

   XS is a skilled FASTQ read simulation tool\, flexible\, portable
   \(does not need a reference sequence\) and tunable in terms of
   sequence complexity



.. conda:package:: xs-sim

   |downloads_xs-sim| |docker_xs-sim|

   :versions:
      
      

      ``2-2``,  ``2-1``,  ``2-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install xs-sim

   and update with::

      mamba update xs-sim

  To create a new environment, run::

      mamba create --name myenvname xs-sim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xs-sim:<tag>

   (see `xs-sim/tags`_ for valid values for ``<tag>``)


.. |downloads_xs-sim| image:: https://img.shields.io/conda/dn/bioconda/xs-sim.svg?style=flat
   :target: https://anaconda.org/bioconda/xs-sim
   :alt:   (downloads)
.. |docker_xs-sim| image:: https://quay.io/repository/biocontainers/xs-sim/status
   :target: https://quay.io/repository/biocontainers/xs-sim
.. _`xs-sim/tags`: https://quay.io/repository/biocontainers/xs-sim?tab=tags


.. raw:: html

    <script>
        var package = "xs-sim";
        var versions = ["2","2","2","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xs-sim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xs-sim/README.html