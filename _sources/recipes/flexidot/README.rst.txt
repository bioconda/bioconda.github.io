:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexidot'
.. highlight: bash

flexidot
========

.. conda:recipe:: flexidot
   :replaces_section_title:
   :noindex:

   Flexible dotplotting of genomic sequences.

   :homepage: https://github.com/flexidot-bio/flexidot
   :documentation: https://github.com/flexidot-bio/flexidot/blob/v2.0.2/README.md
   
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`flexidot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexidot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexidot/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty395`

   


.. conda:package:: flexidot

   |downloads_flexidot| |docker_flexidot|

   :versions:
      
      

      ``2.0.2-0``,  ``2.0.1-0``

      

   
   :depends biopython: 
   :depends colormap: ``>=1.3.0``
   :depends colour: 
   :depends easydev: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends python: ``>=3.8``
   :depends regex: 
   :depends rich: 
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

      mamba install flexidot

   and update with::

      mamba update flexidot

  To create a new environment, run::

      mamba create --name myenvname flexidot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flexidot:<tag>

   (see `flexidot/tags`_ for valid values for ``<tag>``)


.. |downloads_flexidot| image:: https://img.shields.io/conda/dn/bioconda/flexidot.svg?style=flat
   :target: https://anaconda.org/bioconda/flexidot
   :alt:   (downloads)
.. |docker_flexidot| image:: https://quay.io/repository/biocontainers/flexidot/status
   :target: https://quay.io/repository/biocontainers/flexidot
.. _`flexidot/tags`: https://quay.io/repository/biocontainers/flexidot?tab=tags


.. raw:: html

    <script>
        var package = "flexidot";
        var versions = ["2.0.2","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexidot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexidot/README.html