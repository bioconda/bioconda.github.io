:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnuplot-py'
.. highlight: bash

gnuplot-py
==========

.. conda:recipe:: gnuplot-py
   :replaces_section_title:
   :noindex:

   A Python interface to the gnuplot plotting program.

   :homepage: http://gnuplot-py.sourceforge.net
   :license: LGPL / LGPL
   :recipe: /`gnuplot-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnuplot-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnuplot-py/meta.yaml>`_

   


.. conda:package:: gnuplot-py

   |downloads_gnuplot-py| |docker_gnuplot-py|

   :versions:
      
      

      ``1.8-1``,  ``1.8-0``

      

   
   :depends gnuplot: 
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install gnuplot-py

   and update with::

      mamba update gnuplot-py

  To create a new environment, run::

      mamba create --name myenvname gnuplot-py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gnuplot-py:<tag>

   (see `gnuplot-py/tags`_ for valid values for ``<tag>``)


.. |downloads_gnuplot-py| image:: https://img.shields.io/conda/dn/bioconda/gnuplot-py.svg?style=flat
   :target: https://anaconda.org/bioconda/gnuplot-py
   :alt:   (downloads)
.. |docker_gnuplot-py| image:: https://quay.io/repository/biocontainers/gnuplot-py/status
   :target: https://quay.io/repository/biocontainers/gnuplot-py
.. _`gnuplot-py/tags`: https://quay.io/repository/biocontainers/gnuplot-py?tab=tags


.. raw:: html

    <script>
        var package = "gnuplot-py";
        var versions = ["1.8","1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnuplot-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnuplot-py/README.html