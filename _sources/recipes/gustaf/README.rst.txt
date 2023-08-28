:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gustaf'
.. highlight: bash

gustaf
======

.. conda:recipe:: gustaf
   :replaces_section_title:
   :noindex:

   Gustaf is a tool primarily designed for multi\-split mapping of sequencing reads.

   :homepage: https://github.com/seqan/seqan/tree/master/apps/gustaf/README.rst
   :license: https://github.com/seqan/seqan/tree/master/apps/gustaf/LICENSE
   :recipe: /`gustaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gustaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gustaf/meta.yaml>`_

   


.. conda:package:: gustaf

   |downloads_gustaf| |docker_gustaf|

   :versions:
      
      

      ``1.0.8-2``,  ``1.0.8-1``,  ``1.0.8-0``

      

   
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

      mamba install gustaf

   and update with::

      mamba update gustaf

  To create a new environment, run::

      mamba create --name myenvname gustaf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gustaf:<tag>

   (see `gustaf/tags`_ for valid values for ``<tag>``)


.. |downloads_gustaf| image:: https://img.shields.io/conda/dn/bioconda/gustaf.svg?style=flat
   :target: https://anaconda.org/bioconda/gustaf
   :alt:   (downloads)
.. |docker_gustaf| image:: https://quay.io/repository/biocontainers/gustaf/status
   :target: https://quay.io/repository/biocontainers/gustaf
.. _`gustaf/tags`: https://quay.io/repository/biocontainers/gustaf?tab=tags


.. raw:: html

    <script>
        var package = "gustaf";
        var versions = ["1.0.8","1.0.8","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gustaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gustaf/README.html