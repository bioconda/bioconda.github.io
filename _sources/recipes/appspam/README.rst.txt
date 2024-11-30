:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'appspam'
.. highlight: bash

appspam
=======

.. conda:recipe:: appspam
   :replaces_section_title:
   :noindex:

   Alignment\-free Phylogenetic Placement algorithm based on Spaced\-word Matches

   :homepage: https://github.com/matthiasblanke/App-SpaM/
   :documentation: https://github.com/matthiasblanke/App-SpaM#readme
   
   :license: GPL3
   :recipe: /`appspam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/appspam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/appspam/meta.yaml>`_

   


.. conda:package:: appspam

   |downloads_appspam| |docker_appspam|

   :versions:
      
      

      ``1.03-4``,  ``1.03-3``,  ``1.03-2``,  ``1.03-1``,  ``1.03-0``,  ``1.02-0``,  ``1.01-0``

      

   
   :depends libcxx: ``>=15.0.7``
   :depends llvm-openmp: ``>=15.0.7``
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

      mamba install appspam

   and update with::

      mamba update appspam

  To create a new environment, run::

      mamba create --name myenvname appspam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/appspam:<tag>

   (see `appspam/tags`_ for valid values for ``<tag>``)


.. |downloads_appspam| image:: https://img.shields.io/conda/dn/bioconda/appspam.svg?style=flat
   :target: https://anaconda.org/bioconda/appspam
   :alt:   (downloads)
.. |docker_appspam| image:: https://quay.io/repository/biocontainers/appspam/status
   :target: https://quay.io/repository/biocontainers/appspam
.. _`appspam/tags`: https://quay.io/repository/biocontainers/appspam?tab=tags


.. raw:: html

    <script>
        var package = "appspam";
        var versions = ["1.03","1.03","1.03","1.03","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/appspam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/appspam/README.html