:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'randfold'
.. highlight: bash

randfold
========

.. conda:recipe:: randfold
   :replaces_section_title:
   :noindex:

   Minimum free energy of folding randomization test software

   :homepage: http://bioinformatics.psb.ugent.be/software/details/Randfold
   :license: GNU GPLv2
   :recipe: /`randfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/randfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/randfold/meta.yaml>`_
   :links: biotools: :biotools:`randfold`, doi: :doi:`10.1093/bioinformatics/bth374`

   


.. conda:package:: randfold

   |downloads_randfold| |docker_randfold|

   :versions:
      
      

      ``2.0.1-7``,  ``2.0.1-6``,  ``2.0.1-5``,  ``2.0.1-4``,  ``2.0.1-3``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install randfold

   and update with::

      mamba update randfold

  To create a new environment, run::

      mamba create --name myenvname randfold

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/randfold:<tag>

   (see `randfold/tags`_ for valid values for ``<tag>``)


.. |downloads_randfold| image:: https://img.shields.io/conda/dn/bioconda/randfold.svg?style=flat
   :target: https://anaconda.org/bioconda/randfold
   :alt:   (downloads)
.. |docker_randfold| image:: https://quay.io/repository/biocontainers/randfold/status
   :target: https://quay.io/repository/biocontainers/randfold
.. _`randfold/tags`: https://quay.io/repository/biocontainers/randfold?tab=tags


.. raw:: html

    <script>
        var package = "randfold";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/randfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/randfold/README.html