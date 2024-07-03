:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slclust'
.. highlight: bash

slclust
=======

.. conda:recipe:: slclust
   :replaces_section_title:
   :noindex:

   A utility that performs single\-linkage clustering with the option of applying a Jaccard similarity coefficient to break weakly bound clusters into distinct clusters.

   :homepage: https://sourceforge.net/projects/slclust/
   :license: Artistic License
   :recipe: /`slclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slclust/meta.yaml>`_

   


.. conda:package:: slclust

   |downloads_slclust| |docker_slclust|

   :versions:
      
      

      ``02022010-4``,  ``02022010-3``,  ``02022010-2``,  ``02022010-1``,  ``02022010-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends zlib: 
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

      mamba install slclust

   and update with::

      mamba update slclust

  To create a new environment, run::

      mamba create --name myenvname slclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/slclust:<tag>

   (see `slclust/tags`_ for valid values for ``<tag>``)


.. |downloads_slclust| image:: https://img.shields.io/conda/dn/bioconda/slclust.svg?style=flat
   :target: https://anaconda.org/bioconda/slclust
   :alt:   (downloads)
.. |docker_slclust| image:: https://quay.io/repository/biocontainers/slclust/status
   :target: https://quay.io/repository/biocontainers/slclust
.. _`slclust/tags`: https://quay.io/repository/biocontainers/slclust?tab=tags


.. raw:: html

    <script>
        var package = "slclust";
        var versions = ["02022010","02022010","02022010","02022010","02022010"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slclust/README.html