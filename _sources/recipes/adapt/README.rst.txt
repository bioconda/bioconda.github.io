:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'adapt'
.. highlight: bash

adapt
=====

.. conda:recipe:: adapt
   :replaces_section_title:
   :noindex:

   A package to efficiently design activity\-informed nucleic acid diagnostics for viruses.

   :homepage: https://github.com/broadinstitute/adapt
   :license: MIT / MIT
   :recipe: /`adapt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapt/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.11.28.401877`

   


.. conda:package:: adapt

   |downloads_adapt| |docker_adapt|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.1-0``

      

   
   :depends numpy: ``>=1.18.2``
   :depends python: ``>=3``
   :depends scipy: ``>=1.4.1``
   :depends tensorflow: ``>=2.3.0``
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

      mamba install adapt

   and update with::

      mamba update adapt

  To create a new environment, run::

      mamba create --name myenvname adapt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/adapt:<tag>

   (see `adapt/tags`_ for valid values for ``<tag>``)


.. |downloads_adapt| image:: https://img.shields.io/conda/dn/bioconda/adapt.svg?style=flat
   :target: https://anaconda.org/bioconda/adapt
   :alt:   (downloads)
.. |docker_adapt| image:: https://quay.io/repository/biocontainers/adapt/status
   :target: https://quay.io/repository/biocontainers/adapt
.. _`adapt/tags`: https://quay.io/repository/biocontainers/adapt?tab=tags


.. raw:: html

    <script>
        var package = "adapt";
        var versions = ["1.6.0","1.4.1","1.4.0","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adapt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adapt/README.html