:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pcdl'
.. highlight: bash

pcdl
====

.. conda:recipe:: pcdl
   :replaces_section_title:
   :noindex:

   physicell data loader \(pcdl\) provides a platform independent\, python3 based\, pip installable interface to transform output\, generated with the PhysiCell agent based modeling framework\, into standard formats.

   :homepage: https://github.com/elmbeech/physicelldataloader
   :documentation: https://github.com/elmbeech/physicelldataloader/blob/v3.3.6/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pcdl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcdl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcdl/meta.yaml>`_

   


.. conda:package:: pcdl

   |downloads_pcdl| |docker_pcdl|

   :versions:
      
      

      

      

   
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

      mamba install pcdl

   and update with::

      mamba update pcdl

  To create a new environment, run::

      mamba create --name myenvname pcdl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pcdl:<tag>

   (see `pcdl/tags`_ for valid values for ``<tag>``)


.. |downloads_pcdl| image:: https://img.shields.io/conda/dn/bioconda/pcdl.svg?style=flat
   :target: https://anaconda.org/bioconda/pcdl
   :alt:   (downloads)
.. |docker_pcdl| image:: https://quay.io/repository/biocontainers/pcdl/status
   :target: https://quay.io/repository/biocontainers/pcdl
.. _`pcdl/tags`: https://quay.io/repository/biocontainers/pcdl?tab=tags


.. raw:: html

    <script>
        var package = "pcdl";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pcdl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pcdl/README.html