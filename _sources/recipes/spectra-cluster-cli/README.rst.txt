:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spectra-cluster-cli'
.. highlight: bash

spectra-cluster-cli
===================

.. conda:recipe:: spectra-cluster-cli
   :replaces_section_title:
   :noindex:

   This is a stand\-alone implementation of the new updated PRIDE Cluster algorithm. It is based on the spectra\-cluster API and uses a highly similar logic as the Hadoop implementation spectra\-cluster\-hadoop used to build the PRIDE Cluster resource.

   :homepage: https://github.com/spectra-cluster/spectra-cluster-cli
   :license: Apache / Apache-2.0
   :recipe: /`spectra-cluster-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectra-cluster-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectra-cluster-cli/meta.yaml>`_

   


.. conda:package:: spectra-cluster-cli

   |downloads_spectra-cluster-cli| |docker_spectra-cluster-cli|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends openjdk: ``>=6``
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

      mamba install spectra-cluster-cli

   and update with::

      mamba update spectra-cluster-cli

  To create a new environment, run::

      mamba create --name myenvname spectra-cluster-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spectra-cluster-cli:<tag>

   (see `spectra-cluster-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_spectra-cluster-cli| image:: https://img.shields.io/conda/dn/bioconda/spectra-cluster-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/spectra-cluster-cli
   :alt:   (downloads)
.. |docker_spectra-cluster-cli| image:: https://quay.io/repository/biocontainers/spectra-cluster-cli/status
   :target: https://quay.io/repository/biocontainers/spectra-cluster-cli
.. _`spectra-cluster-cli/tags`: https://quay.io/repository/biocontainers/spectra-cluster-cli?tab=tags


.. raw:: html

    <script>
        var package = "spectra-cluster-cli";
        var versions = ["1.1.2","1.1.2","1.0.1","1.0.1"];
    </script>





Notes
-----
spectra\-cluster\-cli is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"opsin\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"spectra\-cluster\-cli \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectra-cluster-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectra-cluster-cli/README.html