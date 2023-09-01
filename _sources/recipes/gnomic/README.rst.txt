:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnomic'
.. highlight: bash

gnomic
======

.. conda:recipe:: gnomic
   :replaces_section_title:
   :noindex:

   A grammar for describing microbial genotypes and phenotypes

   :homepage: https://github.com/biosustain/gnomic
   :license: APACHE / Apache Software
   :recipe: /`gnomic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnomic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnomic/meta.yaml>`_

   


.. conda:package:: gnomic

   |downloads_gnomic| |docker_gnomic|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends grako: ``>=3.18.1``
   :depends python: 
   :depends six: ``>=1.8.0``
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

      mamba install gnomic

   and update with::

      mamba update gnomic

  To create a new environment, run::

      mamba create --name myenvname gnomic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gnomic:<tag>

   (see `gnomic/tags`_ for valid values for ``<tag>``)


.. |downloads_gnomic| image:: https://img.shields.io/conda/dn/bioconda/gnomic.svg?style=flat
   :target: https://anaconda.org/bioconda/gnomic
   :alt:   (downloads)
.. |docker_gnomic| image:: https://quay.io/repository/biocontainers/gnomic/status
   :target: https://quay.io/repository/biocontainers/gnomic
.. _`gnomic/tags`: https://quay.io/repository/biocontainers/gnomic?tab=tags


.. raw:: html

    <script>
        var package = "gnomic";
        var versions = ["1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnomic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnomic/README.html