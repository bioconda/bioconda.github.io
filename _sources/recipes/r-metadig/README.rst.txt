:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-metadig'
.. highlight: bash

r-metadig
=========

.. conda:recipe:: r-metadig
   :replaces_section_title:
   :noindex:

   A set of utility methods for authoring MetaDIG checks in R.

   :homepage: https://github.com/NCEAS/metadig-r/
   :license: Apache / Apache-2.0
   :recipe: /`r-metadig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metadig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metadig/meta.yaml>`_

   


.. conda:package:: r-metadig

   |downloads_r-metadig| |docker_r-metadig|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-digest: 
   :depends r-httr: 
   :depends r-xml2: 
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

      mamba install r-metadig

   and update with::

      mamba update r-metadig

  To create a new environment, run::

      mamba create --name myenvname r-metadig

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-metadig:<tag>

   (see `r-metadig/tags`_ for valid values for ``<tag>``)


.. |downloads_r-metadig| image:: https://img.shields.io/conda/dn/bioconda/r-metadig.svg?style=flat
   :target: https://anaconda.org/bioconda/r-metadig
   :alt:   (downloads)
.. |docker_r-metadig| image:: https://quay.io/repository/biocontainers/r-metadig/status
   :target: https://quay.io/repository/biocontainers/r-metadig
.. _`r-metadig/tags`: https://quay.io/repository/biocontainers/r-metadig?tab=tags


.. raw:: html

    <script>
        var package = "r-metadig";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metadig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metadig/README.html