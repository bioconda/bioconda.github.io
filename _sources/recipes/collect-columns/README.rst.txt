:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'collect-columns'
.. highlight: bash

collect-columns
===============

.. conda:recipe:: collect-columns
   :replaces_section_title:
   :noindex:

   Retrieve a column for each in a set of tables\, placing them in a single output table.

   :homepage: https://github.com/biowdl/collect-columns
   :license: MIT / MIT
   :recipe: /`collect-columns <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collect-columns>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/collect-columns/meta.yaml>`_

   


.. conda:package:: collect-columns

   |downloads_collect-columns| |docker_collect-columns|

   :versions:
      
      

      ``1.0.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends gffutils: 
   :depends python: ``>=3.5``
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

      mamba install collect-columns

   and update with::

      mamba update collect-columns

  To create a new environment, run::

      mamba create --name myenvname collect-columns

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/collect-columns:<tag>

   (see `collect-columns/tags`_ for valid values for ``<tag>``)


.. |downloads_collect-columns| image:: https://img.shields.io/conda/dn/bioconda/collect-columns.svg?style=flat
   :target: https://anaconda.org/bioconda/collect-columns
   :alt:   (downloads)
.. |docker_collect-columns| image:: https://quay.io/repository/biocontainers/collect-columns/status
   :target: https://quay.io/repository/biocontainers/collect-columns
.. _`collect-columns/tags`: https://quay.io/repository/biocontainers/collect-columns?tab=tags


.. raw:: html

    <script>
        var package = "collect-columns";
        var versions = ["1.0.0","0.2.0","0.2.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/collect-columns/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/collect-columns/README.html