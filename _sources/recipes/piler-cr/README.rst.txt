:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piler-cr'
.. highlight: bash

piler-cr
========

.. conda:recipe:: piler-cr
   :replaces_section_title:
   :noindex:

   Identification and analysis of CRISPR repeats.

   :homepage: http://www.drive5.com/pilercr/
   :license: Public Domain
   :recipe: /`piler-cr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piler-cr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piler-cr/meta.yaml>`_

   


.. conda:package:: piler-cr

   |downloads_piler-cr| |docker_piler-cr|

   :versions:
      
      

      ``1.06-4``,  ``1.06-3``,  ``1.06-2``,  ``1.06-1``,  ``1.06-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install piler-cr

   and update with::

      mamba update piler-cr

  To create a new environment, run::

      mamba create --name myenvname piler-cr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/piler-cr:<tag>

   (see `piler-cr/tags`_ for valid values for ``<tag>``)


.. |downloads_piler-cr| image:: https://img.shields.io/conda/dn/bioconda/piler-cr.svg?style=flat
   :target: https://anaconda.org/bioconda/piler-cr
   :alt:   (downloads)
.. |docker_piler-cr| image:: https://quay.io/repository/biocontainers/piler-cr/status
   :target: https://quay.io/repository/biocontainers/piler-cr
.. _`piler-cr/tags`: https://quay.io/repository/biocontainers/piler-cr?tab=tags


.. raw:: html

    <script>
        var package = "piler-cr";
        var versions = ["1.06","1.06","1.06","1.06","1.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piler-cr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piler-cr/README.html