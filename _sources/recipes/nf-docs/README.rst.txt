:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nf-docs'
.. highlight: bash

nf-docs
=======

.. conda:recipe:: nf-docs
   :replaces_section_title:
   :noindex:

   Generate API documentation for Nextflow pipelines by querying the Nextflow Language Server

   :homepage: https://github.com/ewels/nf-docs
   :documentation: https://ewels.github.io/nf-docs/
   
   :license: Apache / Apache-2.0
   :recipe: /`nf-docs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-docs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nf-docs/meta.yaml>`_

   


.. conda:package:: nf-docs

   |downloads_nf-docs| |docker_nf-docs|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends httpx: ``>=0.25``
   :depends jinja2: ``>=3.0``
   :depends markdown: ``>=3.0``
   :depends pygments: ``>=2.0``
   :depends python: ``>=3.10``
   :depends pyyaml: ``>=6.0``
   :depends rich: ``>=13.0``
   :depends rich-click: ``>=1.7``
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

      mamba install nf-docs

   and update with::

      mamba update nf-docs

  To create a new environment, run::

      mamba create --name myenvname nf-docs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nf-docs:<tag>

   (see `nf-docs/tags`_ for valid values for ``<tag>``)


.. |downloads_nf-docs| image:: https://img.shields.io/conda/dn/bioconda/nf-docs.svg?style=flat
   :target: https://anaconda.org/bioconda/nf-docs
   :alt:   (downloads)
.. |docker_nf-docs| image:: https://quay.io/repository/biocontainers/nf-docs/status
   :target: https://quay.io/repository/biocontainers/nf-docs
.. _`nf-docs/tags`: https://quay.io/repository/biocontainers/nf-docs?tab=tags


.. raw:: html

    <script>
        var package = "nf-docs";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nf-docs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nf-docs/README.html