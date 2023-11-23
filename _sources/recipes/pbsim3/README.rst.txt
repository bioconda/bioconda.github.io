:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbsim3'
.. highlight: bash

pbsim3
======

.. conda:recipe:: pbsim3
   :replaces_section_title:
   :noindex:

   A simulator for all types of Pacific Biosciences \(PacBio\) and Oxford Nanopore Technologies \(ONT\) long reads

   :homepage: https://github.com/yukiteruono/pbsim3
   :license: GPLv2
   :recipe: /`pbsim3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsim3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbsim3/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqac092`

   


.. conda:package:: pbsim3

   |downloads_pbsim3| |docker_pbsim3|

   :versions:
      
      

      ``3.0.1-0``,  ``3.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install pbsim3

   and update with::

      mamba update pbsim3

  To create a new environment, run::

      mamba create --name myenvname pbsim3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbsim3:<tag>

   (see `pbsim3/tags`_ for valid values for ``<tag>``)


.. |downloads_pbsim3| image:: https://img.shields.io/conda/dn/bioconda/pbsim3.svg?style=flat
   :target: https://anaconda.org/bioconda/pbsim3
   :alt:   (downloads)
.. |docker_pbsim3| image:: https://quay.io/repository/biocontainers/pbsim3/status
   :target: https://quay.io/repository/biocontainers/pbsim3
.. _`pbsim3/tags`: https://quay.io/repository/biocontainers/pbsim3?tab=tags


.. raw:: html

    <script>
        var package = "pbsim3";
        var versions = ["3.0.1","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbsim3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbsim3/README.html