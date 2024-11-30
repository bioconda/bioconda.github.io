:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'erds'
.. highlight: bash

erds
====

.. conda:recipe:: erds
   :replaces_section_title:
   :noindex:

   Inferring copy number variants in high\-coverage human genomes with next\-generation sequencing data.

   :homepage: http://www.utahresearch.org/mingfuzhu/erds/
   :license: Free to academia and non-profit organizations
   :recipe: /`erds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/erds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/erds/meta.yaml>`_

   


.. conda:package:: erds

   |downloads_erds| |docker_erds|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc: 
   :depends perl: ``5.22.0*``
   :depends samtools: ``==0.1.19``
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

      mamba install erds

   and update with::

      mamba update erds

  To create a new environment, run::

      mamba create --name myenvname erds

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/erds:<tag>

   (see `erds/tags`_ for valid values for ``<tag>``)


.. |downloads_erds| image:: https://img.shields.io/conda/dn/bioconda/erds.svg?style=flat
   :target: https://anaconda.org/bioconda/erds
   :alt:   (downloads)
.. |docker_erds| image:: https://quay.io/repository/biocontainers/erds/status
   :target: https://quay.io/repository/biocontainers/erds
.. _`erds/tags`: https://quay.io/repository/biocontainers/erds?tab=tags


.. raw:: html

    <script>
        var package = "erds";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/erds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/erds/README.html