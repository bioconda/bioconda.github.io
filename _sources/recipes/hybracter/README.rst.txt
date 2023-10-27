:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hybracter'
.. highlight: bash

hybracter
=========

.. conda:recipe:: hybracter
   :replaces_section_title:
   :noindex:

   An automated long\-read first bacterial genome assembly pipeline.

   :homepage: https://github.com/gbouras13/hybracter
   :documentation: https://hybracter.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`hybracter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybracter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hybracter/meta.yaml>`_

   


.. conda:package:: hybracter

   |downloads_hybracter| |docker_hybracter|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.2-0``

      

   
   :depends attrmap: ``>=0.0.5``
   :depends biopython: ``>=1.76``
   :depends click: ``>=8.1.3``
   :depends python: ``>=3.9``
   :depends pyyaml: ``>=6.0``
   :depends snakemake-minimal: ``>=7.14.0``
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

      mamba install hybracter

   and update with::

      mamba update hybracter

  To create a new environment, run::

      mamba create --name myenvname hybracter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hybracter:<tag>

   (see `hybracter/tags`_ for valid values for ``<tag>``)


.. |downloads_hybracter| image:: https://img.shields.io/conda/dn/bioconda/hybracter.svg?style=flat
   :target: https://anaconda.org/bioconda/hybracter
   :alt:   (downloads)
.. |docker_hybracter| image:: https://quay.io/repository/biocontainers/hybracter/status
   :target: https://quay.io/repository/biocontainers/hybracter
.. _`hybracter/tags`: https://quay.io/repository/biocontainers/hybracter?tab=tags


.. raw:: html

    <script>
        var package = "hybracter";
        var versions = ["0.2.0","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hybracter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hybracter/README.html