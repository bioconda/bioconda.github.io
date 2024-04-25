:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primers'
.. highlight: bash

primers
=======

.. conda:recipe:: primers
   :replaces_section_title:
   :noindex:

   This is a small\, straightforward tool for creating PCR primers. Its target use\-case is DNA assembly.

   :homepage: https://github.com/Lattice-Automation/primers
   :license: MIT
   :recipe: /`primers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primers/meta.yaml>`_

   


.. conda:package:: primers

   |downloads_primers| |docker_primers|

   :versions:
      
      

      ``0.5.10-0``,  ``0.5.4-0``

      

   
   :depends python: ``3.*``
   :depends seqfold: ``>=0.7.3``
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

      mamba install primers

   and update with::

      mamba update primers

  To create a new environment, run::

      mamba create --name myenvname primers

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/primers:<tag>

   (see `primers/tags`_ for valid values for ``<tag>``)


.. |downloads_primers| image:: https://img.shields.io/conda/dn/bioconda/primers.svg?style=flat
   :target: https://anaconda.org/bioconda/primers
   :alt:   (downloads)
.. |docker_primers| image:: https://quay.io/repository/biocontainers/primers/status
   :target: https://quay.io/repository/biocontainers/primers
.. _`primers/tags`: https://quay.io/repository/biocontainers/primers?tab=tags


.. raw:: html

    <script>
        var package = "primers";
        var versions = ["0.5.10","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primers/README.html