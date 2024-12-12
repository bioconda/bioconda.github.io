:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbjasmine'
.. highlight: bash

pbjasmine
=========

.. conda:recipe:: pbjasmine
   :replaces_section_title:
   :noindex:

   jasmine

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbjasmine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbjasmine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbjasmine/meta.yaml>`_

   


.. conda:package:: pbjasmine

   |downloads_pbjasmine| |docker_pbjasmine|

   :versions:
      
      

      ``2.4.0-1``,  ``2.4.0-0``,  ``2.0.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install pbjasmine

   and update with::

      mamba update pbjasmine

  To create a new environment, run::

      mamba create --name myenvname pbjasmine

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbjasmine:<tag>

   (see `pbjasmine/tags`_ for valid values for ``<tag>``)


.. |downloads_pbjasmine| image:: https://img.shields.io/conda/dn/bioconda/pbjasmine.svg?style=flat
   :target: https://anaconda.org/bioconda/pbjasmine
   :alt:   (downloads)
.. |docker_pbjasmine| image:: https://quay.io/repository/biocontainers/pbjasmine/status
   :target: https://quay.io/repository/biocontainers/pbjasmine
.. _`pbjasmine/tags`: https://quay.io/repository/biocontainers/pbjasmine?tab=tags


.. raw:: html

    <script>
        var package = "pbjasmine";
        var versions = ["2.4.0","2.4.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbjasmine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbjasmine/README.html