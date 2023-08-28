:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'red'
.. highlight: bash

red
===

.. conda:recipe:: red
   :replaces_section_title:
   :noindex:

   Red \(RepeatsDetector\)\: an intelligent\, rapid\, accurate tool for detecting repeats de\-novo on the genomic scale.

   :homepage: http://toolsmith.ens.utulsa.edu
   :license: PUBLIC-DOMAIN / Custom OSS
   :recipe: /`red <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/red>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/red/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-015-0654-5`

   


.. conda:package:: red

   |downloads_red| |docker_red|

   :versions:
      
      

      ``2018.09.10-2``,  ``2018.09.10-1``,  ``2018.09.10-0``,  ``2015.05.22-3``,  ``2015.05.22-2``,  ``2015.05.22-1``,  ``2015.05.22-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install red

   and update with::

      mamba update red

  To create a new environment, run::

      mamba create --name myenvname red

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/red:<tag>

   (see `red/tags`_ for valid values for ``<tag>``)


.. |downloads_red| image:: https://img.shields.io/conda/dn/bioconda/red.svg?style=flat
   :target: https://anaconda.org/bioconda/red
   :alt:   (downloads)
.. |docker_red| image:: https://quay.io/repository/biocontainers/red/status
   :target: https://quay.io/repository/biocontainers/red
.. _`red/tags`: https://quay.io/repository/biocontainers/red?tab=tags


.. raw:: html

    <script>
        var package = "red";
        var versions = ["2018.09.10","2018.09.10","2018.09.10","2015.05.22","2015.05.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/red/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/red/README.html