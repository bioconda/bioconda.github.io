:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lepwrap'
.. highlight: bash

lepwrap
=======

.. conda:recipe:: lepwrap
   :replaces_section_title:
   :noindex:

   The Snakemake pipeline to use Lep\-Map3 to create linkage maps and LepAnchor for anchoring\+orienting genome assemblies.

   :homepage: https://github.com/pdimens/LepWrap/
   :license: The GNU General Public License v3.0 (GPL3)
   :recipe: /`lepwrap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lepwrap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lepwrap/meta.yaml>`_

   


.. conda:package:: lepwrap

   |downloads_lepwrap| |docker_lepwrap|

   :versions:
      
      

      ``4.0.1-0``,  ``4.0-0``

      

   
   :depends bzip2: 
   :depends font-ttf-dejavu-sans-mono: 
   :depends font-ttf-ubuntu: 
   :depends graphviz: 
   :depends imagemagick: 
   :depends openjdk: 
   :depends pandoc: 
   :depends pygraphviz: 
   :depends python: ``>=3.9``
   :depends r-base: ``>=4``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-readr: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :depends sed: 
   :depends snakemake: ``>=6.4``
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

      mamba install lepwrap

   and update with::

      mamba update lepwrap

  To create a new environment, run::

      mamba create --name myenvname lepwrap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lepwrap:<tag>

   (see `lepwrap/tags`_ for valid values for ``<tag>``)


.. |downloads_lepwrap| image:: https://img.shields.io/conda/dn/bioconda/lepwrap.svg?style=flat
   :target: https://anaconda.org/bioconda/lepwrap
   :alt:   (downloads)
.. |docker_lepwrap| image:: https://quay.io/repository/biocontainers/lepwrap/status
   :target: https://quay.io/repository/biocontainers/lepwrap
.. _`lepwrap/tags`: https://quay.io/repository/biocontainers/lepwrap?tab=tags


.. raw:: html

    <script>
        var package = "lepwrap";
        var versions = ["4.0.1","4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lepwrap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lepwrap/README.html