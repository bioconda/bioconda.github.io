:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zerone'
.. highlight: bash

zerone
======

.. conda:recipe:: zerone
   :replaces_section_title:
   :noindex:

   Zerone discretizes several ChIP\-seq replicates simultaneously and resolves conflicts between them.

   :homepage: https://github.com/nanakiksc/zerone
   :license: GPL / GPL-3
   :recipe: /`zerone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zerone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zerone/meta.yaml>`_

   


.. conda:package:: zerone

   |downloads_zerone| |docker_zerone|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install zerone

   and update with::

      mamba update zerone

  To create a new environment, run::

      mamba create --name myenvname zerone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zerone:<tag>

   (see `zerone/tags`_ for valid values for ``<tag>``)


.. |downloads_zerone| image:: https://img.shields.io/conda/dn/bioconda/zerone.svg?style=flat
   :target: https://anaconda.org/bioconda/zerone
   :alt:   (downloads)
.. |docker_zerone| image:: https://quay.io/repository/biocontainers/zerone/status
   :target: https://quay.io/repository/biocontainers/zerone
.. _`zerone/tags`: https://quay.io/repository/biocontainers/zerone?tab=tags


.. raw:: html

    <script>
        var package = "zerone";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zerone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zerone/README.html