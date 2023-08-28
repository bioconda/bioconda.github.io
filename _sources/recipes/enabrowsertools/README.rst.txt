:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enabrowsertools'
.. highlight: bash

enabrowsertools
===============

.. conda:recipe:: enabrowsertools
   :replaces_section_title:
   :noindex:

   enaBrowserTools is a set of scripts that interface with the ENA web services to download data from ENA easily

   :homepage: https://github.com/enasequence/enaBrowserTools
   :license: Apache-2.0
   :recipe: /`enabrowsertools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enabrowsertools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enabrowsertools/meta.yaml>`_

   


.. conda:package:: enabrowsertools

   |downloads_enabrowsertools| |docker_enabrowsertools|

   :versions:
      
      

      ``1.5.4-0``

      

   
   :depends python: 
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

      mamba install enabrowsertools

   and update with::

      mamba update enabrowsertools

  To create a new environment, run::

      mamba create --name myenvname enabrowsertools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/enabrowsertools:<tag>

   (see `enabrowsertools/tags`_ for valid values for ``<tag>``)


.. |downloads_enabrowsertools| image:: https://img.shields.io/conda/dn/bioconda/enabrowsertools.svg?style=flat
   :target: https://anaconda.org/bioconda/enabrowsertools
   :alt:   (downloads)
.. |docker_enabrowsertools| image:: https://quay.io/repository/biocontainers/enabrowsertools/status
   :target: https://quay.io/repository/biocontainers/enabrowsertools
.. _`enabrowsertools/tags`: https://quay.io/repository/biocontainers/enabrowsertools?tab=tags


.. raw:: html

    <script>
        var package = "enabrowsertools";
        var versions = ["1.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enabrowsertools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enabrowsertools/README.html