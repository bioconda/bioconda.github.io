:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mpa-server'
.. highlight: bash

mpa-server
==========

.. conda:recipe:: mpa-server
   :replaces_section_title:
   :noindex:

   Independent platform for interpretation of proteomics identification results

   :homepage: https://github.com/compomics/meta-proteome-analyzer
   :license: APACHE / Apache License 2.0
   :recipe: /`mpa-server <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpa-server>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpa-server/meta.yaml>`_

   MetaProteomeAnalyzer \(MPA\) is a scientific software for analyzing and visualizing metaproteomics \(and also
   proteomics\) data. The tool presents a MS\/MS spectrum data processing application for protein identification in
   combination with a user\-friendly interactive graphical interface. The metaproteomics data analysis software is
   developed in the Java programming language and provides various features for user\-defined querying of the
   results.


.. conda:package:: mpa-server

   |downloads_mpa-server| |docker_mpa-server|

   :versions:
      
      

      ``3.4-3``,  ``3.4-2``,  ``3.4-1``,  ``3.4-0``,  ``3.3-1``,  ``3.3-0``

      

   
   :depends mysql: ``5.*``
   :depends openjdk: ``8.*``
   :depends perl: 
   :depends python: 
   :depends requests: 
   :depends tqdm: 
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

      mamba install mpa-server

   and update with::

      mamba update mpa-server

  To create a new environment, run::

      mamba create --name myenvname mpa-server

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mpa-server:<tag>

   (see `mpa-server/tags`_ for valid values for ``<tag>``)


.. |downloads_mpa-server| image:: https://img.shields.io/conda/dn/bioconda/mpa-server.svg?style=flat
   :target: https://anaconda.org/bioconda/mpa-server
   :alt:   (downloads)
.. |docker_mpa-server| image:: https://quay.io/repository/biocontainers/mpa-server/status
   :target: https://quay.io/repository/biocontainers/mpa-server
.. _`mpa-server/tags`: https://quay.io/repository/biocontainers/mpa-server?tab=tags


.. raw:: html

    <script>
        var package = "mpa-server";
        var versions = ["3.4","3.4","3.4","3.4","3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mpa-server/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mpa-server/README.html