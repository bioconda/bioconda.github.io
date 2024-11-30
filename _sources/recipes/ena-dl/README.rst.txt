:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ena-dl'
.. highlight: bash

ena-dl
======

.. conda:recipe:: ena-dl
   :replaces_section_title:
   :noindex:

   A tool to download FASTQs associated with Study\, Experiment\, or Run accessions.

   :homepage: https://github.com/rpetit3/ena-dl
   :license: MIT
   :recipe: /`ena-dl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ena-dl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ena-dl/meta.yaml>`_

   


.. conda:package:: ena-dl

   |downloads_ena-dl| |docker_ena-dl|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends python: ``>=3.6``
   :depends requests: 
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

      mamba install ena-dl

   and update with::

      mamba update ena-dl

  To create a new environment, run::

      mamba create --name myenvname ena-dl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ena-dl:<tag>

   (see `ena-dl/tags`_ for valid values for ``<tag>``)


.. |downloads_ena-dl| image:: https://img.shields.io/conda/dn/bioconda/ena-dl.svg?style=flat
   :target: https://anaconda.org/bioconda/ena-dl
   :alt:   (downloads)
.. |docker_ena-dl| image:: https://quay.io/repository/biocontainers/ena-dl/status
   :target: https://quay.io/repository/biocontainers/ena-dl
.. _`ena-dl/tags`: https://quay.io/repository/biocontainers/ena-dl?tab=tags


.. raw:: html

    <script>
        var package = "ena-dl";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ena-dl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ena-dl/README.html