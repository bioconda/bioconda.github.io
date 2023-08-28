:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bactopia-sketcher'
.. highlight: bash

bactopia-sketcher
=================

.. conda:recipe:: bactopia-sketcher
   :replaces_section_title:
   :noindex:

   Methods used by Bactopia for minmer sketching

   :homepage: https://bactopia.github.io/
   :developer docs: https://github.com/bactopia/bactopia-sketcher/
   :license: MIT
   :recipe: /`bactopia-sketcher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-sketcher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-sketcher/meta.yaml>`_
   :links: biotools: :biotools:`bactopia`, doi: :doi:`10.1128/mSystems.00190-20`

   


.. conda:package:: bactopia-sketcher

   |downloads_bactopia-sketcher| |docker_bactopia-sketcher|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends coreutils: 
   :depends gsl: ``2.6.*``
   :depends mash: ``>=2.3``
   :depends pigz: 
   :depends python: ``>=3.6,<3.11``
   :depends sed: 
   :depends sourmash: ``>=4.8.2``
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

      mamba install bactopia-sketcher

   and update with::

      mamba update bactopia-sketcher

  To create a new environment, run::

      mamba create --name myenvname bactopia-sketcher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bactopia-sketcher:<tag>

   (see `bactopia-sketcher/tags`_ for valid values for ``<tag>``)


.. |downloads_bactopia-sketcher| image:: https://img.shields.io/conda/dn/bioconda/bactopia-sketcher.svg?style=flat
   :target: https://anaconda.org/bioconda/bactopia-sketcher
   :alt:   (downloads)
.. |docker_bactopia-sketcher| image:: https://quay.io/repository/biocontainers/bactopia-sketcher/status
   :target: https://quay.io/repository/biocontainers/bactopia-sketcher
.. _`bactopia-sketcher/tags`: https://quay.io/repository/biocontainers/bactopia-sketcher?tab=tags


.. raw:: html

    <script>
        var package = "bactopia-sketcher";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bactopia-sketcher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bactopia-sketcher/README.html