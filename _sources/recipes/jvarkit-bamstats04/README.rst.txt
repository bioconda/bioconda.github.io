:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jvarkit-bamstats04'
.. highlight: bash

jvarkit-bamstats04
==================

.. conda:recipe:: jvarkit-bamstats04
   :replaces_section_title:
   :noindex:

   Coverage statistics for a BED file.

   :homepage: http://lindenb.github.io/jvarkit/BamStats04.html
   :license: MIT
   :recipe: /`jvarkit-bamstats04 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-bamstats04>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-bamstats04/meta.yaml>`_

   


.. conda:package:: jvarkit-bamstats04

   |downloads_jvarkit-bamstats04| |docker_jvarkit-bamstats04|

   :versions:
      
      

      ``2021.10.13-0``

      

   
   :depends openjdk: ``>=11``
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

      mamba install jvarkit-bamstats04

   and update with::

      mamba update jvarkit-bamstats04

  To create a new environment, run::

      mamba create --name myenvname jvarkit-bamstats04

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jvarkit-bamstats04:<tag>

   (see `jvarkit-bamstats04/tags`_ for valid values for ``<tag>``)


.. |downloads_jvarkit-bamstats04| image:: https://img.shields.io/conda/dn/bioconda/jvarkit-bamstats04.svg?style=flat
   :target: https://anaconda.org/bioconda/jvarkit-bamstats04
   :alt:   (downloads)
.. |docker_jvarkit-bamstats04| image:: https://quay.io/repository/biocontainers/jvarkit-bamstats04/status
   :target: https://quay.io/repository/biocontainers/jvarkit-bamstats04
.. _`jvarkit-bamstats04/tags`: https://quay.io/repository/biocontainers/jvarkit-bamstats04?tab=tags


.. raw:: html

    <script>
        var package = "jvarkit-bamstats04";
        var versions = ["2021.10.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jvarkit-bamstats04/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jvarkit-bamstats04/README.html