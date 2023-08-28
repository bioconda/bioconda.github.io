:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zavolan-multiqc-plugins'
.. highlight: bash

zavolan-multiqc-plugins
=======================

.. conda:recipe:: zavolan-multiqc-plugins
   :replaces_section_title:
   :noindex:

   MultiQC plugins for the Zavolan Lab\@ University of Basel\, Switzerland

   :homepage: https://github.com/zavolanlab/multiqc-plugins
   :license: APACHE / Apache Software
   :recipe: /`zavolan-multiqc-plugins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zavolan-multiqc-plugins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zavolan-multiqc-plugins/meta.yaml>`_

   


.. conda:package:: zavolan-multiqc-plugins

   |downloads_zavolan-multiqc-plugins| |docker_zavolan-multiqc-plugins|

   :versions:
      
      

      ``1.3-0``

      

   
   :depends multiqc: 
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

      mamba install zavolan-multiqc-plugins

   and update with::

      mamba update zavolan-multiqc-plugins

  To create a new environment, run::

      mamba create --name myenvname zavolan-multiqc-plugins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zavolan-multiqc-plugins:<tag>

   (see `zavolan-multiqc-plugins/tags`_ for valid values for ``<tag>``)


.. |downloads_zavolan-multiqc-plugins| image:: https://img.shields.io/conda/dn/bioconda/zavolan-multiqc-plugins.svg?style=flat
   :target: https://anaconda.org/bioconda/zavolan-multiqc-plugins
   :alt:   (downloads)
.. |docker_zavolan-multiqc-plugins| image:: https://quay.io/repository/biocontainers/zavolan-multiqc-plugins/status
   :target: https://quay.io/repository/biocontainers/zavolan-multiqc-plugins
.. _`zavolan-multiqc-plugins/tags`: https://quay.io/repository/biocontainers/zavolan-multiqc-plugins?tab=tags


.. raw:: html

    <script>
        var package = "zavolan-multiqc-plugins";
        var versions = ["1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zavolan-multiqc-plugins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zavolan-multiqc-plugins/README.html