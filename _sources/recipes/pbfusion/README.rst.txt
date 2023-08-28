:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbfusion'
.. highlight: bash

pbfusion
========

.. conda:recipe:: pbfusion
   :replaces_section_title:
   :noindex:

   Fusion gene detection tool for PacBio Iso\-Seq data

   :homepage: https://github.com/PacificBiosciences/pbfusion
   :license: BSD-3-Clause-Clear
   :recipe: /`pbfusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbfusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbfusion/meta.yaml>`_

   


.. conda:package:: pbfusion

   |downloads_pbfusion| |docker_pbfusion|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.1.0-0``

      

   
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

      mamba install pbfusion

   and update with::

      mamba update pbfusion

  To create a new environment, run::

      mamba create --name myenvname pbfusion

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbfusion:<tag>

   (see `pbfusion/tags`_ for valid values for ``<tag>``)


.. |downloads_pbfusion| image:: https://img.shields.io/conda/dn/bioconda/pbfusion.svg?style=flat
   :target: https://anaconda.org/bioconda/pbfusion
   :alt:   (downloads)
.. |docker_pbfusion| image:: https://quay.io/repository/biocontainers/pbfusion/status
   :target: https://quay.io/repository/biocontainers/pbfusion
.. _`pbfusion/tags`: https://quay.io/repository/biocontainers/pbfusion?tab=tags


.. raw:: html

    <script>
        var package = "pbfusion";
        var versions = ["0.3.1","0.3.0","0.2.2","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbfusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbfusion/README.html