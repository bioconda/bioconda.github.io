:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cpt_gffparser'
.. highlight: bash

cpt_gffparser
=============

.. conda:recipe:: cpt_gffparser
   :replaces_section_title:
   :noindex:

   A Biopython extension package for I\/O of GFF files

   :homepage: https://pypi.org/project/CPT-GFFParser/
   :license: BSD / BSD
   :recipe: /`cpt_gffparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpt_gffparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpt_gffparser/meta.yaml>`_

   


.. conda:package:: cpt_gffparser

   |downloads_cpt_gffparser| |docker_cpt_gffparser|

   :versions:
      
      

      ``1.2.2-0``,  ``1.1.7-0``

      

   
   :depends biopython: 
   :depends python: 
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

      mamba install cpt_gffparser

   and update with::

      mamba update cpt_gffparser

  To create a new environment, run::

      mamba create --name myenvname cpt_gffparser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cpt_gffparser:<tag>

   (see `cpt_gffparser/tags`_ for valid values for ``<tag>``)


.. |downloads_cpt_gffparser| image:: https://img.shields.io/conda/dn/bioconda/cpt_gffparser.svg?style=flat
   :target: https://anaconda.org/bioconda/cpt_gffparser
   :alt:   (downloads)
.. |docker_cpt_gffparser| image:: https://quay.io/repository/biocontainers/cpt_gffparser/status
   :target: https://quay.io/repository/biocontainers/cpt_gffparser
.. _`cpt_gffparser/tags`: https://quay.io/repository/biocontainers/cpt_gffparser?tab=tags


.. raw:: html

    <script>
        var package = "cpt_gffparser";
        var versions = ["1.2.2","1.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cpt_gffparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cpt_gffparser/README.html