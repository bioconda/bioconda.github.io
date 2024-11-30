:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spectacle'
.. highlight: bash

spectacle
=========

.. conda:recipe:: spectacle
   :replaces_section_title:
   :noindex:

   This software implements a spectral learning algorithm for hidden Markov models for epigenomic data. Please see our paper for further details\: Song\, J and Chen\, K. C. Spectacle\: fast chromatin state annotation using spectral learning. Genome Biology\, 16\:33\, 2015. http\:\/\/genomebiology.com\/2015\/16\/1\/33

   :homepage: https://github.com/jiminsong/Spectacle
   :license: GPL / GPL-3.0
   :recipe: /`spectacle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectacle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spectacle/meta.yaml>`_

   


.. conda:package:: spectacle

   |downloads_spectacle| |docker_spectacle|

   :versions:
      
      

      ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``

      

   
   :depends numpy: 
   :depends openjdk: 
   :depends python: 
   :depends scipy: 
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

      mamba install spectacle

   and update with::

      mamba update spectacle

  To create a new environment, run::

      mamba create --name myenvname spectacle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spectacle:<tag>

   (see `spectacle/tags`_ for valid values for ``<tag>``)


.. |downloads_spectacle| image:: https://img.shields.io/conda/dn/bioconda/spectacle.svg?style=flat
   :target: https://anaconda.org/bioconda/spectacle
   :alt:   (downloads)
.. |docker_spectacle| image:: https://quay.io/repository/biocontainers/spectacle/status
   :target: https://quay.io/repository/biocontainers/spectacle
.. _`spectacle/tags`: https://quay.io/repository/biocontainers/spectacle?tab=tags


.. raw:: html

    <script>
        var package = "spectacle";
        var versions = ["1.4","1.4","1.4","1.4"];
    </script>





Notes
-----
The Spectacle github repo weighs in at around 500MB\, a large portion of which is data files. These have been removed from the conda recipe\, but a script \(download\_spectacle\_data.sh\) has been included here which will download those files from github.  In addition\, a wrapper script \`Spectacle.sh\` has been included in this recipe and should be used when calling the program.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spectacle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spectacle/README.html