:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aragorn'
.. highlight: bash

aragorn
=======

.. conda:recipe:: aragorn
   :replaces_section_title:
   :noindex:

   ARAGORN\, tRNA \(and tmRNA\) detection

   :homepage: http://www.ansikte.se/ARAGORN/
   :license: GPLv3
   :recipe: /`aragorn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aragorn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aragorn/meta.yaml>`_

   


.. conda:package:: aragorn

   |downloads_aragorn| |docker_aragorn|

   :versions:
      
      

      ``1.2.41-1``,  ``1.2.41-0``,  ``1.2.38-5``,  ``1.2.38-4``,  ``1.2.38-3``,  ``1.2.38-2``,  ``1.2.38-1``,  ``1.2.36-1``,  ``1.2.36-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install aragorn

   and update with::

      mamba update aragorn

  To create a new environment, run::

      mamba create --name myenvname aragorn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aragorn:<tag>

   (see `aragorn/tags`_ for valid values for ``<tag>``)


.. |downloads_aragorn| image:: https://img.shields.io/conda/dn/bioconda/aragorn.svg?style=flat
   :target: https://anaconda.org/bioconda/aragorn
   :alt:   (downloads)
.. |docker_aragorn| image:: https://quay.io/repository/biocontainers/aragorn/status
   :target: https://quay.io/repository/biocontainers/aragorn
.. _`aragorn/tags`: https://quay.io/repository/biocontainers/aragorn?tab=tags


.. raw:: html

    <script>
        var package = "aragorn";
        var versions = ["1.2.41","1.2.41","1.2.38","1.2.38","1.2.38"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aragorn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aragorn/README.html