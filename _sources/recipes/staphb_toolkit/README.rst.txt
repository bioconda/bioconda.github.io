:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'staphb_toolkit'
.. highlight: bash

staphb_toolkit
==============

.. conda:recipe:: staphb_toolkit
   :replaces_section_title:
   :noindex:

   A ToolKit of commonly used Public Health Bioinformatics Tools

   :homepage: https://staphb.org/staphb_toolkit/
   :documentation: https://staphb.org/staphb_toolkit
   
   :developer docs: https://github.com/StaPH-B/staphb_toolkit
   :license: GPL / GPLv3
   :recipe: /`staphb_toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphb_toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphb_toolkit/meta.yaml>`_

   


.. conda:package:: staphb_toolkit

   |downloads_staphb_toolkit| |docker_staphb_toolkit|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0-0``,  ``1.3.10-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``

      

   
   :depends docker-py: ``>=4.1.0``
   :depends openjdk: 
   :depends pexpect: ``>=4.8``
   :depends psutil: ``>=5.6.3``
   :depends pyfiglet: ``>=0.8.post1``
   :depends python: ``>=3.6``
   :depends rich: ``>=12.4.4``
   :depends spython: ``>=0.0.73``
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

      mamba install staphb_toolkit

   and update with::

      mamba update staphb_toolkit

  To create a new environment, run::

      mamba create --name myenvname staphb_toolkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/staphb_toolkit:<tag>

   (see `staphb_toolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_staphb_toolkit| image:: https://img.shields.io/conda/dn/bioconda/staphb_toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/staphb_toolkit
   :alt:   (downloads)
.. |docker_staphb_toolkit| image:: https://quay.io/repository/biocontainers/staphb_toolkit/status
   :target: https://quay.io/repository/biocontainers/staphb_toolkit
.. _`staphb_toolkit/tags`: https://quay.io/repository/biocontainers/staphb_toolkit?tab=tags


.. raw:: html

    <script>
        var package = "staphb_toolkit";
        var versions = ["2.0.1","2.0.0","1.3.10","1.3.9","1.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/staphb_toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/staphb_toolkit/README.html