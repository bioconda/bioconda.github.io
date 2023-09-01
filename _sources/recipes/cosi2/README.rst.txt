:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cosi2'
.. highlight: bash

cosi2
=====

.. conda:recipe:: cosi2
   :replaces_section_title:
   :noindex:

   cosi2 is an efficient coalescent simulator with support for selection\, population structure\, variable recombination rates\, and gene conversion. It supports exact and approximate simulation modes.

   :homepage: https://www.broadinstitute.org/mpg/cosi2/
   :license: GPLv3
   :recipe: /`cosi2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosi2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosi2/meta.yaml>`_

   


.. conda:package:: cosi2

   |downloads_cosi2| |docker_cosi2|

   :versions:
      
      

      ``2.3.0rc4-1``,  ``2.3.0rc4-0``,  ``2.3.0rc3-0``,  ``2.3.0rc2-0``,  ``2.3.0rc1-0``,  ``2.02-1``,  ``2.02-0``,  ``2.0-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install cosi2

   and update with::

      mamba update cosi2

  To create a new environment, run::

      mamba create --name myenvname cosi2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cosi2:<tag>

   (see `cosi2/tags`_ for valid values for ``<tag>``)


.. |downloads_cosi2| image:: https://img.shields.io/conda/dn/bioconda/cosi2.svg?style=flat
   :target: https://anaconda.org/bioconda/cosi2
   :alt:   (downloads)
.. |docker_cosi2| image:: https://quay.io/repository/biocontainers/cosi2/status
   :target: https://quay.io/repository/biocontainers/cosi2
.. _`cosi2/tags`: https://quay.io/repository/biocontainers/cosi2?tab=tags


.. raw:: html

    <script>
        var package = "cosi2";
        var versions = ["2.3.0rc4","2.3.0rc4","2.3.0rc3","2.3.0rc2","2.3.0rc1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cosi2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cosi2/README.html