:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tolkein'
.. highlight: bash

tolkein
=======

.. conda:recipe:: tolkein
   :replaces_section_title:
   :noindex:

   Tree of Life Kit of Evolutionary Informatics Novelties

   :homepage: https://github.com/tolkit/tolkein
   :documentation: https://tolkein.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`tolkein <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tolkein>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tolkein/meta.yaml>`_

   


.. conda:package:: tolkein

   |downloads_tolkein| |docker_tolkein|

   :versions:
      
      

      ``0.5.0-0``

      

   
   :depends docopt: ``>=0.6.2``
   :depends python: 
   :depends pyyaml: 
   :depends requests: ``>=2.24.0``
   :depends tqdm: ``>=4.48.1``
   :depends ujson: ``>=3.0.0``
   :depends xmltodict: ``>=0.12.0``
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

      mamba install tolkein

   and update with::

      mamba update tolkein

  To create a new environment, run::

      mamba create --name myenvname tolkein

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tolkein:<tag>

   (see `tolkein/tags`_ for valid values for ``<tag>``)


.. |downloads_tolkein| image:: https://img.shields.io/conda/dn/bioconda/tolkein.svg?style=flat
   :target: https://anaconda.org/bioconda/tolkein
   :alt:   (downloads)
.. |docker_tolkein| image:: https://quay.io/repository/biocontainers/tolkein/status
   :target: https://quay.io/repository/biocontainers/tolkein
.. _`tolkein/tags`: https://quay.io/repository/biocontainers/tolkein?tab=tags


.. raw:: html

    <script>
        var package = "tolkein";
        var versions = ["0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tolkein/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tolkein/README.html