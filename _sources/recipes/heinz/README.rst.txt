:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'heinz'
.. highlight: bash

heinz
=====

.. conda:recipe:: heinz
   :replaces_section_title:
   :noindex:

   The algorithm for identification of the optimal scoring subnetwork.

   :homepage: https://github.com/ls-cwi/heinz
   :license: MIT
   :recipe: /`heinz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/heinz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/heinz/meta.yaml>`_

   


.. conda:package:: heinz

   |downloads_heinz| |docker_heinz|

   :versions:
      
      

      ``2.0.1-4``,  ``2.0.1-3``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends lemon: ``>=1.3.1,<1.3.2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install heinz

   and update with::

      mamba update heinz

  To create a new environment, run::

      mamba create --name myenvname heinz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/heinz:<tag>

   (see `heinz/tags`_ for valid values for ``<tag>``)


.. |downloads_heinz| image:: https://img.shields.io/conda/dn/bioconda/heinz.svg?style=flat
   :target: https://anaconda.org/bioconda/heinz
   :alt:   (downloads)
.. |docker_heinz| image:: https://quay.io/repository/biocontainers/heinz/status
   :target: https://quay.io/repository/biocontainers/heinz
.. _`heinz/tags`: https://quay.io/repository/biocontainers/heinz?tab=tags


.. raw:: html

    <script>
        var package = "heinz";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/heinz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/heinz/README.html