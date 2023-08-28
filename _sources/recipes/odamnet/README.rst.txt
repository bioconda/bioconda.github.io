:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'odamnet'
.. highlight: bash

odamnet
=======

.. conda:recipe:: odamnet
   :replaces_section_title:
   :noindex:

   Study molecular relationships between chemicals and rare diseases

   :homepage: https://pypi.org/project/ODAMNet/1.1.0/
   :developer docs: https://github.com/MOohTus/ODAMNet/tree/v1.1.0
   :license: MIT
   :recipe: /`odamnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/odamnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/odamnet/meta.yaml>`_

   


.. conda:package:: odamnet

   |downloads_odamnet| |docker_odamnet|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends alive-progress: ``>=2.4.1``
   :depends click: ``>=8.0.1``
   :depends click-option-group: ``>=0.5.3``
   :depends docutils: ``0.18.1``
   :depends multixrank: ``>=0.1``
   :depends ndex2: ``>=3.5.0``
   :depends networkx: ``2.5``
   :depends pandas: ``>=1.3.5``
   :depends python: ``>=3.9``
   :depends requests: ``>=2.27.1``
   :depends scipy: ``>=1.7.3``
   :depends sparqlwrapper: ``>=1.8.5``
   :depends statsmodels: ``>=0.13.2``
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

      mamba install odamnet

   and update with::

      mamba update odamnet

  To create a new environment, run::

      mamba create --name myenvname odamnet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/odamnet:<tag>

   (see `odamnet/tags`_ for valid values for ``<tag>``)


.. |downloads_odamnet| image:: https://img.shields.io/conda/dn/bioconda/odamnet.svg?style=flat
   :target: https://anaconda.org/bioconda/odamnet
   :alt:   (downloads)
.. |docker_odamnet| image:: https://quay.io/repository/biocontainers/odamnet/status
   :target: https://quay.io/repository/biocontainers/odamnet
.. _`odamnet/tags`: https://quay.io/repository/biocontainers/odamnet?tab=tags


.. raw:: html

    <script>
        var package = "odamnet";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/odamnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/odamnet/README.html