:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'platypus-conquistador'
.. highlight: bash

platypus-conquistador
=====================

.. conda:recipe:: platypus-conquistador
   :replaces_section_title:
   :noindex:

   Platypus Conquistador\: Confirming specific taxonomic groups within your metagenomic samples.

   :homepage: https://github.com/biocore/Platypus-Conquistador
   :license: BSD / BSD-3-Clause
   :recipe: /`platypus-conquistador <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platypus-conquistador>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platypus-conquistador/meta.yaml>`_

   


.. conda:package:: platypus-conquistador

   |downloads_platypus-conquistador| |docker_platypus-conquistador|

   :versions:
      
      

      ``0.9.0-3``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``

      

   
   :depends click: 
   :depends python: ``<3``
   :depends scikit-bio: ``>=0.2.1,<0.3.0``
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

      mamba install platypus-conquistador

   and update with::

      mamba update platypus-conquistador

  To create a new environment, run::

      mamba create --name myenvname platypus-conquistador

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/platypus-conquistador:<tag>

   (see `platypus-conquistador/tags`_ for valid values for ``<tag>``)


.. |downloads_platypus-conquistador| image:: https://img.shields.io/conda/dn/bioconda/platypus-conquistador.svg?style=flat
   :target: https://anaconda.org/bioconda/platypus-conquistador
   :alt:   (downloads)
.. |docker_platypus-conquistador| image:: https://quay.io/repository/biocontainers/platypus-conquistador/status
   :target: https://quay.io/repository/biocontainers/platypus-conquistador
.. _`platypus-conquistador/tags`: https://quay.io/repository/biocontainers/platypus-conquistador?tab=tags


.. raw:: html

    <script>
        var package = "platypus-conquistador";
        var versions = ["0.9.0","0.9.0","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/platypus-conquistador/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/platypus-conquistador/README.html