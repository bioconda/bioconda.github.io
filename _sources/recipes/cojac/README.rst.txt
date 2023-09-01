:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cojac'
.. highlight: bash

cojac
=====

.. conda:recipe:: cojac
   :replaces_section_title:
   :noindex:

   Command\-line tools to analyse co\-occurrence of mutations on amplicons.

   :homepage: https://github.com/cbg-ethz/cojac
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`cojac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cojac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cojac/meta.yaml>`_
   :links: biotools: :biotools:`cojac`, doi: :doi:`10.1038/s41564-022-01185-x`

   


.. conda:package:: cojac

   |downloads_cojac| |docker_cojac|

   :versions:
      
      

      ``0.9-0``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends click: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: ``>=0.17``
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
   :depends strictyaml: 
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

      mamba install cojac

   and update with::

      mamba update cojac

  To create a new environment, run::

      mamba create --name myenvname cojac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cojac:<tag>

   (see `cojac/tags`_ for valid values for ``<tag>``)


.. |downloads_cojac| image:: https://img.shields.io/conda/dn/bioconda/cojac.svg?style=flat
   :target: https://anaconda.org/bioconda/cojac
   :alt:   (downloads)
.. |docker_cojac| image:: https://quay.io/repository/biocontainers/cojac/status
   :target: https://quay.io/repository/biocontainers/cojac
.. _`cojac/tags`: https://quay.io/repository/biocontainers/cojac?tab=tags


.. raw:: html

    <script>
        var package = "cojac";
        var versions = ["0.9","0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cojac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cojac/README.html