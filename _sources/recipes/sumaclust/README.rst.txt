:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sumaclust'
.. highlight: bash

sumaclust
=========

.. conda:recipe:: sumaclust
   :replaces_section_title:
   :noindex:

   Sumaclust clusters sequences in a way that is fast and exact at the same time\, using the same clustering algorithm as UCLUST and CD\-HIT. For more information see url.

   :homepage: https://git.metabarcoding.org/obitools/sumaclust/wikis/home
   :license: CeCILL FREE SOFTWARE LICENSE AGREEMENT
   :recipe: /`sumaclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sumaclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sumaclust/meta.yaml>`_

   


.. conda:package:: sumaclust

   |downloads_sumaclust| |docker_sumaclust|

   :versions:
      
      

      ``1.0.31-6``,  ``1.0.31-5``,  ``1.0.31-4``,  ``1.0.31-3``,  ``1.0.31-2``,  ``1.0.31-1``,  ``1.0.31-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install sumaclust

   and update with::

      mamba update sumaclust

  To create a new environment, run::

      mamba create --name myenvname sumaclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sumaclust:<tag>

   (see `sumaclust/tags`_ for valid values for ``<tag>``)


.. |downloads_sumaclust| image:: https://img.shields.io/conda/dn/bioconda/sumaclust.svg?style=flat
   :target: https://anaconda.org/bioconda/sumaclust
   :alt:   (downloads)
.. |docker_sumaclust| image:: https://quay.io/repository/biocontainers/sumaclust/status
   :target: https://quay.io/repository/biocontainers/sumaclust
.. _`sumaclust/tags`: https://quay.io/repository/biocontainers/sumaclust?tab=tags


.. raw:: html

    <script>
        var package = "sumaclust";
        var versions = ["1.0.31","1.0.31","1.0.31","1.0.31","1.0.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sumaclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sumaclust/README.html