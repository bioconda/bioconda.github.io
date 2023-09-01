:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cwl2wdl'
.. highlight: bash

cwl2wdl
=======

.. conda:recipe:: cwl2wdl
   :replaces_section_title:
   :noindex:

   Proof of concept converter from Common Workflow Language \(CWL\) to the Broad Institute\'s Workflow Definition Language \(WDL\).

   :homepage: https://github.com/adamstruck/cwl2wdl
   :license: MIT
   :recipe: /`cwl2wdl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cwl2wdl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cwl2wdl/meta.yaml>`_

   


.. conda:package:: cwl2wdl

   |downloads_cwl2wdl| |docker_cwl2wdl|

   :versions:
      
      

      ``0.1dev44-2``,  ``0.1dev44-1``,  ``0.1dev44-0``,  ``0.1dev37-0``

      

   
   :depends python: 
   :depends pyyaml: 
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

      mamba install cwl2wdl

   and update with::

      mamba update cwl2wdl

  To create a new environment, run::

      mamba create --name myenvname cwl2wdl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cwl2wdl:<tag>

   (see `cwl2wdl/tags`_ for valid values for ``<tag>``)


.. |downloads_cwl2wdl| image:: https://img.shields.io/conda/dn/bioconda/cwl2wdl.svg?style=flat
   :target: https://anaconda.org/bioconda/cwl2wdl
   :alt:   (downloads)
.. |docker_cwl2wdl| image:: https://quay.io/repository/biocontainers/cwl2wdl/status
   :target: https://quay.io/repository/biocontainers/cwl2wdl
.. _`cwl2wdl/tags`: https://quay.io/repository/biocontainers/cwl2wdl?tab=tags


.. raw:: html

    <script>
        var package = "cwl2wdl";
        var versions = ["0.1dev44","0.1dev44","0.1dev44","0.1dev37"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cwl2wdl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cwl2wdl/README.html