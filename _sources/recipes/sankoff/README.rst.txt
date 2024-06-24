:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sankoff'
.. highlight: bash

sankoff
=======

.. conda:recipe:: sankoff
   :replaces_section_title:
   :noindex:

   Fast implementation of sankoff algorithm on phylogeny

   :homepage: https://github.com/hzi-bifo/sankoff
   :license: GPL / GPL 3.0
   :recipe: /`sankoff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sankoff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sankoff/meta.yaml>`_

   


.. conda:package:: sankoff

   |downloads_sankoff| |docker_sankoff|

   :versions:
      
      

      ``0.2-4``,  ``0.2-3``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends boost: 
   :depends boost-cpp: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends tbb: ``>=2021.4.0``
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

      mamba install sankoff

   and update with::

      mamba update sankoff

  To create a new environment, run::

      mamba create --name myenvname sankoff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sankoff:<tag>

   (see `sankoff/tags`_ for valid values for ``<tag>``)


.. |downloads_sankoff| image:: https://img.shields.io/conda/dn/bioconda/sankoff.svg?style=flat
   :target: https://anaconda.org/bioconda/sankoff
   :alt:   (downloads)
.. |docker_sankoff| image:: https://quay.io/repository/biocontainers/sankoff/status
   :target: https://quay.io/repository/biocontainers/sankoff
.. _`sankoff/tags`: https://quay.io/repository/biocontainers/sankoff?tab=tags


.. raw:: html

    <script>
        var package = "sankoff";
        var versions = ["0.2","0.2","0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sankoff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sankoff/README.html