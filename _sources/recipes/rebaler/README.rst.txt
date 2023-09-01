:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rebaler'
.. highlight: bash

rebaler
=======

.. conda:recipe:: rebaler
   :replaces_section_title:
   :noindex:

   Reference\-based long read assemblies of bacterial genomes

   :homepage: https://github.com/rrwick/Rebaler
   :license: GPL / GPL-3.0
   :recipe: /`rebaler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rebaler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rebaler/meta.yaml>`_

   


.. conda:package:: rebaler

   |downloads_rebaler| |docker_rebaler|

   :versions:
      
      

      ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-2``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends biopython: 
   :depends minimap2: 
   :depends python: ``>=3``
   :depends racon: ``>=1.4.12``
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

      mamba install rebaler

   and update with::

      mamba update rebaler

  To create a new environment, run::

      mamba create --name myenvname rebaler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rebaler:<tag>

   (see `rebaler/tags`_ for valid values for ``<tag>``)


.. |downloads_rebaler| image:: https://img.shields.io/conda/dn/bioconda/rebaler.svg?style=flat
   :target: https://anaconda.org/bioconda/rebaler
   :alt:   (downloads)
.. |docker_rebaler| image:: https://quay.io/repository/biocontainers/rebaler/status
   :target: https://quay.io/repository/biocontainers/rebaler
.. _`rebaler/tags`: https://quay.io/repository/biocontainers/rebaler?tab=tags


.. raw:: html

    <script>
        var package = "rebaler";
        var versions = ["0.2.0","0.2.0","0.1.2","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rebaler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rebaler/README.html