:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ir'
.. highlight: bash

ir
==

.. conda:recipe:: ir
   :replaces_section_title:
   :noindex:

   Program for Calculating the Repetitiveness of DNA Sequences

   :homepage: http://guanine.evolbio.mpg.de/cgi-bin/ir/ir.cgi.pl
   :license: GPL2 / GPL-2
   :recipe: /`ir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ir/meta.yaml>`_

   


.. conda:package:: ir

   |downloads_ir| |docker_ir|

   :versions:
      
      

      ``2.8.0-7``,  ``2.8.0-6``,  ``2.8.0-5``,  ``2.8.0-4``,  ``2.8.0-3``,  ``2.8.0-2``,  ``2.8.0-1``

      

   
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

      mamba install ir

   and update with::

      mamba update ir

  To create a new environment, run::

      mamba create --name myenvname ir

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ir:<tag>

   (see `ir/tags`_ for valid values for ``<tag>``)


.. |downloads_ir| image:: https://img.shields.io/conda/dn/bioconda/ir.svg?style=flat
   :target: https://anaconda.org/bioconda/ir
   :alt:   (downloads)
.. |docker_ir| image:: https://quay.io/repository/biocontainers/ir/status
   :target: https://quay.io/repository/biocontainers/ir
.. _`ir/tags`: https://quay.io/repository/biocontainers/ir?tab=tags


.. raw:: html

    <script>
        var package = "ir";
        var versions = ["2.8.0","2.8.0","2.8.0","2.8.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ir/README.html