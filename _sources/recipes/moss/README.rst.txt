:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moss'
.. highlight: bash

moss
====

.. conda:recipe:: moss
   :replaces_section_title:
   :noindex:

   A multi\-sample somatic SNV caller

   :homepage: https://github.com/elkebir-group/Moss
   :license: MIT
   :recipe: /`moss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moss/meta.yaml>`_

   


.. conda:package:: moss

   |downloads_moss| |docker_moss|

   :versions:
      
      

      ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install moss

   and update with::

      mamba update moss

  To create a new environment, run::

      mamba create --name myenvname moss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/moss:<tag>

   (see `moss/tags`_ for valid values for ``<tag>``)


.. |downloads_moss| image:: https://img.shields.io/conda/dn/bioconda/moss.svg?style=flat
   :target: https://anaconda.org/bioconda/moss
   :alt:   (downloads)
.. |docker_moss| image:: https://quay.io/repository/biocontainers/moss/status
   :target: https://quay.io/repository/biocontainers/moss
.. _`moss/tags`: https://quay.io/repository/biocontainers/moss?tab=tags


.. raw:: html

    <script>
        var package = "moss";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moss/README.html