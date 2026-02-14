:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'synth-nmr'
.. highlight: bash

synth-nmr
=========

.. conda:recipe:: synth-nmr
   :replaces_section_title:
   :noindex:

   NMR spectroscopy calculations for protein structures

   :homepage: https://github.com/elkins/synth-nmr
   :license: MIT / MIT
   :recipe: /`synth-nmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/synth-nmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/synth-nmr/meta.yaml>`_

   


.. conda:package:: synth-nmr

   |downloads_synth-nmr| |docker_synth-nmr|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends biotite: ``>=0.35.0``
   :depends numpy: ``>=1.20``
   :depends python: ``>=3.8``
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

      mamba install synth-nmr

   and update with::

      mamba update synth-nmr

  To create a new environment, run::

      mamba create --name myenvname synth-nmr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/synth-nmr:<tag>

   (see `synth-nmr/tags`_ for valid values for ``<tag>``)


.. |downloads_synth-nmr| image:: https://img.shields.io/conda/dn/bioconda/synth-nmr.svg?style=flat
   :target: https://anaconda.org/bioconda/synth-nmr
   :alt:   (downloads)
.. |docker_synth-nmr| image:: https://quay.io/repository/biocontainers/synth-nmr/status
   :target: https://quay.io/repository/biocontainers/synth-nmr
.. _`synth-nmr/tags`: https://quay.io/repository/biocontainers/synth-nmr?tab=tags


.. raw:: html

    <script>
        var package = "synth-nmr";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/synth-nmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/synth-nmr/README.html