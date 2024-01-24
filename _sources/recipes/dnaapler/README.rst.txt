:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnaapler'
.. highlight: bash

dnaapler
========

.. conda:recipe:: dnaapler
   :replaces_section_title:
   :noindex:

   Reorients assembled microbial sequences

   :homepage: https://github.com/gbouras13/dnaapler
   :documentation: https://dnaapler.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`dnaapler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaapler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaapler/meta.yaml>`_

   


.. conda:package:: dnaapler

   |downloads_dnaapler| |docker_dnaapler|

   :versions:
      
      

      ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends biopython: ``>=1.76``
   :depends blast: ``>=2.10``
   :depends click: ``>=8.0.0``
   :depends loguru: ``>=0.5.3``
   :depends pandas: ``>=1.4.2``
   :depends pyrodigal: ``>=3.0.0``
   :depends python: ``>=3.8,<4.0``
   :depends pyyaml: ``>=6.0``
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

      mamba install dnaapler

   and update with::

      mamba update dnaapler

  To create a new environment, run::

      mamba create --name myenvname dnaapler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dnaapler:<tag>

   (see `dnaapler/tags`_ for valid values for ``<tag>``)


.. |downloads_dnaapler| image:: https://img.shields.io/conda/dn/bioconda/dnaapler.svg?style=flat
   :target: https://anaconda.org/bioconda/dnaapler
   :alt:   (downloads)
.. |docker_dnaapler| image:: https://quay.io/repository/biocontainers/dnaapler/status
   :target: https://quay.io/repository/biocontainers/dnaapler
.. _`dnaapler/tags`: https://quay.io/repository/biocontainers/dnaapler?tab=tags


.. raw:: html

    <script>
        var package = "dnaapler";
        var versions = ["0.5.2","0.5.1","0.5.0","0.4.0","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnaapler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnaapler/README.html