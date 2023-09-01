:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genologics'
.. highlight: bash

genologics
==========

.. conda:recipe:: genologics
   :replaces_section_title:
   :noindex:

   Python interface to the GenoLogics LIMS \(Laboratory Information Management System\) server via its REST API.

   :homepage: https://github.com/scilifelab/genologics
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`genologics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genologics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genologics/meta.yaml>`_

   


.. conda:package:: genologics

   |downloads_genologics| |docker_genologics|

   :versions:
      
      

      ``0.4.1-0``,  ``0.3.12.post0-1``,  ``0.3.12.post0-0``

      

   
   :depends python: 
   :depends requests: 
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

      mamba install genologics

   and update with::

      mamba update genologics

  To create a new environment, run::

      mamba create --name myenvname genologics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genologics:<tag>

   (see `genologics/tags`_ for valid values for ``<tag>``)


.. |downloads_genologics| image:: https://img.shields.io/conda/dn/bioconda/genologics.svg?style=flat
   :target: https://anaconda.org/bioconda/genologics
   :alt:   (downloads)
.. |docker_genologics| image:: https://quay.io/repository/biocontainers/genologics/status
   :target: https://quay.io/repository/biocontainers/genologics
.. _`genologics/tags`: https://quay.io/repository/biocontainers/genologics?tab=tags


.. raw:: html

    <script>
        var package = "genologics";
        var versions = ["0.4.1","0.3.12.post0","0.3.12.post0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genologics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genologics/README.html