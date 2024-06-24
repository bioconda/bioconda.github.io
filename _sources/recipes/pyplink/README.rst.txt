:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyplink'
.. highlight: bash

pyplink
=======

.. conda:recipe:: pyplink
   :replaces_section_title:
   :noindex:

   Python module to read binary Plink files.

   :homepage: https://github.com/lemieuxl/pyplink
   :license: MIT
   :recipe: /`pyplink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyplink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyplink/meta.yaml>`_

   


.. conda:package:: pyplink

   |downloads_pyplink| |docker_pyplink|

   :versions:
      
      

      ``1.3.7-0``

      

   
   :depends numpy: ``>=1.8.2``
   :depends pandas: ``>=0.17.1``
   :depends python: ``>=3.8``
   :depends six: ``>=1.9.0``
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

      mamba install pyplink

   and update with::

      mamba update pyplink

  To create a new environment, run::

      mamba create --name myenvname pyplink

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyplink:<tag>

   (see `pyplink/tags`_ for valid values for ``<tag>``)


.. |downloads_pyplink| image:: https://img.shields.io/conda/dn/bioconda/pyplink.svg?style=flat
   :target: https://anaconda.org/bioconda/pyplink
   :alt:   (downloads)
.. |docker_pyplink| image:: https://quay.io/repository/biocontainers/pyplink/status
   :target: https://quay.io/repository/biocontainers/pyplink
.. _`pyplink/tags`: https://quay.io/repository/biocontainers/pyplink?tab=tags


.. raw:: html

    <script>
        var package = "pyplink";
        var versions = ["1.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyplink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyplink/README.html