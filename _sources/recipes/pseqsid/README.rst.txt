:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pseqsid'
.. highlight: bash

pseqsid
=======

.. conda:recipe:: pseqsid
   :replaces_section_title:
   :noindex:

   Calculates pairwise sequence identity\, similarity and normalized similarity
   score of proteins in a multiple sequence alignment.


   :homepage: https://github.com/amaurypm/pseqsid
   :license: MIT
   :recipe: /`pseqsid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pseqsid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pseqsid/meta.yaml>`_

   


.. conda:package:: pseqsid

   |downloads_pseqsid| |docker_pseqsid|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pseqsid

   and update with::

      mamba update pseqsid

  To create a new environment, run::

      mamba create --name myenvname pseqsid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pseqsid:<tag>

   (see `pseqsid/tags`_ for valid values for ``<tag>``)


.. |downloads_pseqsid| image:: https://img.shields.io/conda/dn/bioconda/pseqsid.svg?style=flat
   :target: https://anaconda.org/bioconda/pseqsid
   :alt:   (downloads)
.. |docker_pseqsid| image:: https://quay.io/repository/biocontainers/pseqsid/status
   :target: https://quay.io/repository/biocontainers/pseqsid
.. _`pseqsid/tags`: https://quay.io/repository/biocontainers/pseqsid?tab=tags


.. raw:: html

    <script>
        var package = "pseqsid";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pseqsid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pseqsid/README.html