:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconda2biocontainer'
.. highlight: bash

bioconda2biocontainer
=====================

.. conda:recipe:: bioconda2biocontainer
   :replaces_section_title:
   :noindex:

   BioContainers API client\: find biocontainer images for Bioconda packages

   :homepage: https://github.com/BioContainers/bioconda2biocontainer
   :license: PUBLIC-DOMAIN / Public Domain
   :recipe: /`bioconda2biocontainer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda2biocontainer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconda2biocontainer/meta.yaml>`_

   


.. conda:package:: bioconda2biocontainer

   |downloads_bioconda2biocontainer| |docker_bioconda2biocontainer|

   :versions:
      
      

      ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends python: ``>=3.5``
   :depends requests: 
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

      mamba install bioconda2biocontainer

   and update with::

      mamba update bioconda2biocontainer

  To create a new environment, run::

      mamba create --name myenvname bioconda2biocontainer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconda2biocontainer:<tag>

   (see `bioconda2biocontainer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconda2biocontainer| image:: https://img.shields.io/conda/dn/bioconda/bioconda2biocontainer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconda2biocontainer
   :alt:   (downloads)
.. |docker_bioconda2biocontainer| image:: https://quay.io/repository/biocontainers/bioconda2biocontainer/status
   :target: https://quay.io/repository/biocontainers/bioconda2biocontainer
.. _`bioconda2biocontainer/tags`: https://quay.io/repository/biocontainers/bioconda2biocontainer?tab=tags


.. raw:: html

    <script>
        var package = "bioconda2biocontainer";
        var versions = ["0.0.7","0.0.6","0.0.4","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconda2biocontainer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconda2biocontainer/README.html