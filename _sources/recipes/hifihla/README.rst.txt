:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hifihla'
.. highlight: bash

hifihla
=======

.. conda:recipe:: hifihla
   :replaces_section_title:
   :noindex:

   An HLA star\-calling tool for PacBio HiFi data types

   :homepage: https://github.com/PacificBiosciences/hifihla
   :license: BSD-3-Clause-Clear
   :recipe: /`hifihla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifihla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifihla/meta.yaml>`_

   


.. conda:package:: hifihla

   |downloads_hifihla| |docker_hifihla|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``

      

   
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

      mamba install hifihla

   and update with::

      mamba update hifihla

  To create a new environment, run::

      mamba create --name myenvname hifihla

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hifihla:<tag>

   (see `hifihla/tags`_ for valid values for ``<tag>``)


.. |downloads_hifihla| image:: https://img.shields.io/conda/dn/bioconda/hifihla.svg?style=flat
   :target: https://anaconda.org/bioconda/hifihla
   :alt:   (downloads)
.. |docker_hifihla| image:: https://quay.io/repository/biocontainers/hifihla/status
   :target: https://quay.io/repository/biocontainers/hifihla
.. _`hifihla/tags`: https://quay.io/repository/biocontainers/hifihla?tab=tags


.. raw:: html

    <script>
        var package = "hifihla";
        var versions = ["0.3.0","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hifihla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hifihla/README.html