:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngshmmalign'
.. highlight: bash

ngshmmalign
===========

.. conda:recipe:: ngshmmalign/0.1.1
   :replaces_section_title:
   :noindex:

   ngshmmalign is a profile HMM aligner for NGS reads designed particularly for small genomes

   :homepage: https://github.com/cbg-ethz/ngshmmalign
   :license: GNU General Public License v2 or later (GPLv2+)
   :recipe: /`ngshmmalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngshmmalign>`_/`0.1.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngshmmalign/0.1.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngshmmalign/0.1.1/meta.yaml>`_

   


.. conda:package:: ngshmmalign

   |downloads_ngshmmalign| |docker_ngshmmalign|

   :versions:
      
      

      ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends boost: ``>=1.78.0,<1.78.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install ngshmmalign

   and update with::

      mamba update ngshmmalign

  To create a new environment, run::

      mamba create --name myenvname ngshmmalign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngshmmalign:<tag>

   (see `ngshmmalign/tags`_ for valid values for ``<tag>``)


.. |downloads_ngshmmalign| image:: https://img.shields.io/conda/dn/bioconda/ngshmmalign.svg?style=flat
   :target: https://anaconda.org/bioconda/ngshmmalign
   :alt:   (downloads)
.. |docker_ngshmmalign| image:: https://quay.io/repository/biocontainers/ngshmmalign/status
   :target: https://quay.io/repository/biocontainers/ngshmmalign
.. _`ngshmmalign/tags`: https://quay.io/repository/biocontainers/ngshmmalign?tab=tags


.. raw:: html

    <script>
        var package = "ngshmmalign";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngshmmalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngshmmalign/README.html