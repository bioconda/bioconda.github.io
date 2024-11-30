:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'actc'
.. highlight: bash

actc
====

.. conda:recipe:: actc
   :replaces_section_title:
   :noindex:

   PacBio utility to align clr to ccs reads

   :homepage: https://github.com/PacificBiosciences/actc
   :license: BSD-3-Clause-Clear
   :recipe: /`actc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/actc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/actc/meta.yaml>`_

   


.. conda:package:: actc

   |downloads_actc| |docker_actc|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.0-0``,  ``0.2.0-0``

      

   
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

      mamba install actc

   and update with::

      mamba update actc

  To create a new environment, run::

      mamba create --name myenvname actc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/actc:<tag>

   (see `actc/tags`_ for valid values for ``<tag>``)


.. |downloads_actc| image:: https://img.shields.io/conda/dn/bioconda/actc.svg?style=flat
   :target: https://anaconda.org/bioconda/actc
   :alt:   (downloads)
.. |docker_actc| image:: https://quay.io/repository/biocontainers/actc/status
   :target: https://quay.io/repository/biocontainers/actc
.. _`actc/tags`: https://quay.io/repository/biocontainers/actc?tab=tags


.. raw:: html

    <script>
        var package = "actc";
        var versions = ["0.6.0","0.5.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/actc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/actc/README.html