:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magneto'
.. highlight: bash

magneto
=======

.. conda:recipe:: magneto
   :replaces_section_title:
   :noindex:

   MAGNETO is an automated snakemake workflow dedicated to MAG reconstruction from metagenomic data.

   :homepage: https://gitlab.univ-nantes.fr/bird_pipeline_registry/magneto
   :documentation: https://gitlab.univ-nantes.fr/bird_pipeline_registry/magneto/-/wikis/home
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`magneto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magneto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magneto/meta.yaml>`_
   :links: biotools: :biotools:`magneto`, doi: :doi:`10.1128/msystems.00432-22`

   


.. conda:package:: magneto

   |downloads_magneto| |docker_magneto|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends click: 
   :depends mamba: ``>=1.5.8,<1.5.9``
   :depends pandas: 
   :depends python: ``>=3.8,<3.12``
   :depends pyyaml: 
   :depends snakemake-minimal: ``>=7.32.4,<8.0.0``
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

      mamba install magneto

   and update with::

      mamba update magneto

  To create a new environment, run::

      mamba create --name myenvname magneto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/magneto:<tag>

   (see `magneto/tags`_ for valid values for ``<tag>``)


.. |downloads_magneto| image:: https://img.shields.io/conda/dn/bioconda/magneto.svg?style=flat
   :target: https://anaconda.org/bioconda/magneto
   :alt:   (downloads)
.. |docker_magneto| image:: https://quay.io/repository/biocontainers/magneto/status
   :target: https://quay.io/repository/biocontainers/magneto
.. _`magneto/tags`: https://quay.io/repository/biocontainers/magneto?tab=tags


.. raw:: html

    <script>
        var package = "magneto";
        var versions = ["1.3","1.3","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magneto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magneto/README.html