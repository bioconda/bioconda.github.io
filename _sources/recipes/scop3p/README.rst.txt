:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scop3p'
.. highlight: bash

scop3p
======

.. conda:recipe:: scop3p
   :replaces_section_title:
   :noindex:

   The official Scop3P REST API Python client

   :homepage: https://iomics.ugent.be/scop3p/
   :documentation: https://iomics.ugent.be/scop3p/documentation
   
   :developer docs: https://github.com/Bio2Byte/scop3p-api-client
   :license: Apache-2.0
   :recipe: /`scop3p <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scop3p>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scop3p/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.18909477`, doi: :doi:`10.1021/acs.jproteome.0c00306`

   Scop3P provides a unique and powerful resource to explore and understand the
   impact of phospho\-sites on human protein structure and function\,
   and can thus serve as a springboard for researchers seeking to analyse and\,
   interpret a given phospho\-site or phosphoprotein in a structural\, biophysical\,
   and biological context.



.. conda:package:: scop3p

   |downloads_scop3p| |docker_scop3p|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends python: ``>=3.6``
   :depends requests: ``>=2.0``
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

      mamba install scop3p

   and update with::

      mamba update scop3p

  To create a new environment, run::

      mamba create --name myenvname scop3p

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scop3p:<tag>

   (see `scop3p/tags`_ for valid values for ``<tag>``)


.. |downloads_scop3p| image:: https://img.shields.io/conda/dn/bioconda/scop3p.svg?style=flat
   :target: https://anaconda.org/bioconda/scop3p
   :alt:   (downloads)
.. |docker_scop3p| image:: https://quay.io/repository/biocontainers/scop3p/status
   :target: https://quay.io/repository/biocontainers/scop3p
.. _`scop3p/tags`: https://quay.io/repository/biocontainers/scop3p?tab=tags


.. raw:: html

    <script>
        var package = "scop3p";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scop3p/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scop3p/README.html