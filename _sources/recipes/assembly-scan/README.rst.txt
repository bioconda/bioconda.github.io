:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'assembly-scan'
.. highlight: bash

assembly-scan
=============

.. conda:recipe:: assembly-scan
   :replaces_section_title:
   :noindex:

   Assembly summary statistics in JSON format

   :homepage: https://github.com/rpetit3/assembly-scan
   :license: MIT
   :recipe: /`assembly-scan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assembly-scan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assembly-scan/meta.yaml>`_

   


.. conda:package:: assembly-scan

   |downloads_assembly-scan| |docker_assembly-scan|

   :versions:
      
      

      ``1.0.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2-0``

      

   
   :depends python: ``>=3.7``
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

      mamba install assembly-scan

   and update with::

      mamba update assembly-scan

  To create a new environment, run::

      mamba create --name myenvname assembly-scan

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/assembly-scan:<tag>

   (see `assembly-scan/tags`_ for valid values for ``<tag>``)


.. |downloads_assembly-scan| image:: https://img.shields.io/conda/dn/bioconda/assembly-scan.svg?style=flat
   :target: https://anaconda.org/bioconda/assembly-scan
   :alt:   (downloads)
.. |docker_assembly-scan| image:: https://quay.io/repository/biocontainers/assembly-scan/status
   :target: https://quay.io/repository/biocontainers/assembly-scan
.. _`assembly-scan/tags`: https://quay.io/repository/biocontainers/assembly-scan?tab=tags


.. raw:: html

    <script>
        var package = "assembly-scan";
        var versions = ["1.0.0","0.4.1","0.4.0","0.3.0","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assembly-scan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assembly-scan/README.html