:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastaptamer'
.. highlight: bash

fastaptamer
===========

.. conda:recipe:: fastaptamer
   :replaces_section_title:
   :noindex:

   A Bioinformatic Toolkit for High\-Throughput Sequence Analysis of Combinatorial Selections

   :homepage: http://burkelab.missouri.edu/fastaptamer.html
   :license: GNU General Public License v3.0
   :recipe: /`fastaptamer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastaptamer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastaptamer/meta.yaml>`_

   


.. conda:package:: fastaptamer

   |downloads_fastaptamer| |docker_fastaptamer|

   :versions:
      
      

      ``1.0.14-1``,  ``1.0.14-0``

      

   
   :depends perl: 
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

      mamba install fastaptamer

   and update with::

      mamba update fastaptamer

  To create a new environment, run::

      mamba create --name myenvname fastaptamer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastaptamer:<tag>

   (see `fastaptamer/tags`_ for valid values for ``<tag>``)


.. |downloads_fastaptamer| image:: https://img.shields.io/conda/dn/bioconda/fastaptamer.svg?style=flat
   :target: https://anaconda.org/bioconda/fastaptamer
   :alt:   (downloads)
.. |docker_fastaptamer| image:: https://quay.io/repository/biocontainers/fastaptamer/status
   :target: https://quay.io/repository/biocontainers/fastaptamer
.. _`fastaptamer/tags`: https://quay.io/repository/biocontainers/fastaptamer?tab=tags


.. raw:: html

    <script>
        var package = "fastaptamer";
        var versions = ["1.0.14","1.0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastaptamer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastaptamer/README.html