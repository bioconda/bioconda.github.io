:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'savont'
.. highlight: bash

savont
======

.. conda:recipe:: savont
   :replaces_section_title:
   :noindex:

   Amplicon sequencing variants \(ASVs\) and taxonomic profiling from modern long\-read \(nanopore \+ PacBio\) amplicon sequencing with \> 98\% accuracy.

   :homepage: https://github.com/bluenote-1577/savont
   :license: MIT / MIT
   :recipe: /`savont <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savont>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savont/meta.yaml>`_

   


.. conda:package:: savont

   |downloads_savont| |docker_savont|

   :versions:
      
      

      ``0.3.2-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install savont

   and update with::

      mamba update savont

  To create a new environment, run::

      mamba create --name myenvname savont

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/savont:<tag>

   (see `savont/tags`_ for valid values for ``<tag>``)


.. |downloads_savont| image:: https://img.shields.io/conda/dn/bioconda/savont.svg?style=flat
   :target: https://anaconda.org/bioconda/savont
   :alt:   (downloads)
.. |docker_savont| image:: https://quay.io/repository/biocontainers/savont/status
   :target: https://quay.io/repository/biocontainers/savont
.. _`savont/tags`: https://quay.io/repository/biocontainers/savont?tab=tags


.. raw:: html

    <script>
        var package = "savont";
        var versions = ["0.3.2","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/savont/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/savont/README.html