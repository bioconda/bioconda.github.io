:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shustring'
.. highlight: bash

shustring
=========

.. conda:recipe:: shustring
   :replaces_section_title:
   :noindex:

   Program for Computing SHortest Unique SubSTRINGs

   :homepage: http://guanine.evolbio.mpg.de/cgi-bin/shustring/shustring.cgi.pl
   :license: GPL2 / GPL-2
   :recipe: /`shustring <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shustring>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shustring/meta.yaml>`_

   


.. conda:package:: shustring

   |downloads_shustring| |docker_shustring|

   :versions:
      
      

      ``2.6-8``,  ``2.6-7``,  ``2.6-6``,  ``2.6-5``,  ``2.6-4``,  ``2.6-3``,  ``2.6-2``,  ``2.6-1``,  ``2.6-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install shustring

   and update with::

      mamba update shustring

  To create a new environment, run::

      mamba create --name myenvname shustring

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shustring:<tag>

   (see `shustring/tags`_ for valid values for ``<tag>``)


.. |downloads_shustring| image:: https://img.shields.io/conda/dn/bioconda/shustring.svg?style=flat
   :target: https://anaconda.org/bioconda/shustring
   :alt:   (downloads)
.. |docker_shustring| image:: https://quay.io/repository/biocontainers/shustring/status
   :target: https://quay.io/repository/biocontainers/shustring
.. _`shustring/tags`: https://quay.io/repository/biocontainers/shustring?tab=tags


.. raw:: html

    <script>
        var package = "shustring";
        var versions = ["2.6","2.6","2.6","2.6","2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shustring/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shustring/README.html