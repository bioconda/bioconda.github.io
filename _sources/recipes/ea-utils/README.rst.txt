:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ea-utils'
.. highlight: bash

ea-utils
========

.. conda:recipe:: ea-utils
   :replaces_section_title:
   :noindex:

   Command\-line tools for processing biological sequencing data.

   :homepage: https://expressionanalysis.github.io/ea-utils/
   :license: MIT
   :recipe: /`ea-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ea-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ea-utils/meta.yaml>`_
   :links: biotools: :biotools:`ea-utils`, doi: :doi:`10.2174/1875036201307010001`

   


.. conda:package:: ea-utils

   |downloads_ea-utils| |docker_ea-utils|

   :versions:
      
      

      ``1.1.2.779-2``,  ``1.1.2.779-1``,  ``1.1.2.779-0``,  ``1.1.2.537-0``

      

   
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openblas: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install ea-utils

   and update with::

      mamba update ea-utils

  To create a new environment, run::

      mamba create --name myenvname ea-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ea-utils:<tag>

   (see `ea-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_ea-utils| image:: https://img.shields.io/conda/dn/bioconda/ea-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/ea-utils
   :alt:   (downloads)
.. |docker_ea-utils| image:: https://quay.io/repository/biocontainers/ea-utils/status
   :target: https://quay.io/repository/biocontainers/ea-utils
.. _`ea-utils/tags`: https://quay.io/repository/biocontainers/ea-utils?tab=tags


.. raw:: html

    <script>
        var package = "ea-utils";
        var versions = ["1.1.2.779","1.1.2.779","1.1.2.779","1.1.2.537"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ea-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ea-utils/README.html