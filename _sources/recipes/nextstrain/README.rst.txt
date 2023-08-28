:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextstrain'
.. highlight: bash

nextstrain
==========

.. conda:recipe:: nextstrain
   :replaces_section_title:
   :noindex:

   Nextstrain toolchain \(meta\-package\)

   :homepage: https://nextstrain.org
   :documentation: https://docs.nextstrain.org/
   
   :developer docs: https://github.com/nextstrain/
   :license: The license for this meta-package is MIT; individual tools vary.

   :recipe: /`nextstrain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextstrain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextstrain/meta.yaml>`_

   Nextstrain is an open\-source project to harness the scientific and public health potential of pathogen genome data.  It includes a collection of open\-source tools to aid in our understanding of pathogen spread and evolution\, especially in outbreak scenarios.  These tools are designed to be used with a wide range of data sources and designed to be modular so they can be replaced with your own tooling when necessary.



.. conda:package:: nextstrain

   |downloads_nextstrain| |docker_nextstrain|

   :versions:
      
      

      ``20200304-1``,  ``20200304-0``

      

   
   :depends augur: 
   :depends auspice: 
   :depends awscli: 
   :depends git: 
   :depends nextalign: 
   :depends nextstrain-cli: 
   :depends pip: 
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

      mamba install nextstrain

   and update with::

      mamba update nextstrain

  To create a new environment, run::

      mamba create --name myenvname nextstrain

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nextstrain:<tag>

   (see `nextstrain/tags`_ for valid values for ``<tag>``)


.. |downloads_nextstrain| image:: https://img.shields.io/conda/dn/bioconda/nextstrain.svg?style=flat
   :target: https://anaconda.org/bioconda/nextstrain
   :alt:   (downloads)
.. |docker_nextstrain| image:: https://quay.io/repository/biocontainers/nextstrain/status
   :target: https://quay.io/repository/biocontainers/nextstrain
.. _`nextstrain/tags`: https://quay.io/repository/biocontainers/nextstrain?tab=tags


.. raw:: html

    <script>
        var package = "nextstrain";
        var versions = ["20200304","20200304"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextstrain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextstrain/README.html