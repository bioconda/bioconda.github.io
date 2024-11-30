:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jvarkit-wgscoverageplotter'
.. highlight: bash

jvarkit-wgscoverageplotter
==========================

.. conda:recipe:: jvarkit-wgscoverageplotter
   :replaces_section_title:
   :noindex:

   Whole genome BAM coverage plotter

   :homepage: http://lindenb.github.io/jvarkit/WGSCoveragePlotter.html
   :license: MIT
   :recipe: /`jvarkit-wgscoverageplotter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-wgscoverageplotter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-wgscoverageplotter/meta.yaml>`_

   


.. conda:package:: jvarkit-wgscoverageplotter

   |downloads_jvarkit-wgscoverageplotter| |docker_jvarkit-wgscoverageplotter|

   :versions:
      
      

      ``20201223-3``,  ``20201223-2``,  ``20201223-1``,  ``20201223-0``

      

   
   :depends openjdk: ``>=11``
   :depends python: ``>=2``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install jvarkit-wgscoverageplotter

   and update with::

      mamba update jvarkit-wgscoverageplotter

  To create a new environment, run::

      mamba create --name myenvname jvarkit-wgscoverageplotter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jvarkit-wgscoverageplotter:<tag>

   (see `jvarkit-wgscoverageplotter/tags`_ for valid values for ``<tag>``)


.. |downloads_jvarkit-wgscoverageplotter| image:: https://img.shields.io/conda/dn/bioconda/jvarkit-wgscoverageplotter.svg?style=flat
   :target: https://anaconda.org/bioconda/jvarkit-wgscoverageplotter
   :alt:   (downloads)
.. |docker_jvarkit-wgscoverageplotter| image:: https://quay.io/repository/biocontainers/jvarkit-wgscoverageplotter/status
   :target: https://quay.io/repository/biocontainers/jvarkit-wgscoverageplotter
.. _`jvarkit-wgscoverageplotter/tags`: https://quay.io/repository/biocontainers/jvarkit-wgscoverageplotter?tab=tags


.. raw:: html

    <script>
        var package = "jvarkit-wgscoverageplotter";
        var versions = ["20201223","20201223","20201223","20201223"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jvarkit-wgscoverageplotter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jvarkit-wgscoverageplotter/README.html