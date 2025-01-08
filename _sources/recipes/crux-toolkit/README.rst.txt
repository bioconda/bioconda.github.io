:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crux-toolkit'
.. highlight: bash

crux-toolkit
============

.. conda:recipe:: crux-toolkit
   :replaces_section_title:
   :noindex:

   A cross\-platform suite of analysis tools for interpreting protein mass spectrometry data

   :homepage: http://crux.ms
   :developer docs: https://github.com/crux-toolkit/crux-toolkit
   :license: Apache / Apache-2.0
   :recipe: /`crux-toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crux-toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crux-toolkit/meta.yaml>`_

   


.. conda:package:: crux-toolkit

   |downloads_crux-toolkit| |docker_crux-toolkit|

   :versions:
      
      

      ``4.2-0``,  ``4.1-3``,  ``4.1-2``,  ``4.1-1``,  ``4.1-0``,  ``3.2-3``,  ``3.2-2``,  ``3.2-1``,  ``3.2-0``

      

   
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

      mamba install crux-toolkit

   and update with::

      mamba update crux-toolkit

  To create a new environment, run::

      mamba create --name myenvname crux-toolkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crux-toolkit:<tag>

   (see `crux-toolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_crux-toolkit| image:: https://img.shields.io/conda/dn/bioconda/crux-toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/crux-toolkit
   :alt:   (downloads)
.. |docker_crux-toolkit| image:: https://quay.io/repository/biocontainers/crux-toolkit/status
   :target: https://quay.io/repository/biocontainers/crux-toolkit
.. _`crux-toolkit/tags`: https://quay.io/repository/biocontainers/crux-toolkit?tab=tags


.. raw:: html

    <script>
        var package = "crux-toolkit";
        var versions = ["4.2","4.1","4.1","4.1","4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crux-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crux-toolkit/README.html