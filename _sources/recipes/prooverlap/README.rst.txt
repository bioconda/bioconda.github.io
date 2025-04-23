:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prooverlap'
.. highlight: bash

prooverlap
==========

.. conda:recipe:: prooverlap
   :replaces_section_title:
   :noindex:

   Assessing feature proximity\/overlap and testing statistical significance from genomic intervals

   :homepage: https://github.com/ngualand/ProOvErlap
   :license: GPL3 / GPL-3.0-only
   :recipe: /`prooverlap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prooverlap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prooverlap/meta.yaml>`_

   


.. conda:package:: prooverlap

   |downloads_prooverlap| |docker_prooverlap|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends python: ``>=3.8,<3.11``
   :depends scipy: 
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

      mamba install prooverlap

   and update with::

      mamba update prooverlap

  To create a new environment, run::

      mamba create --name myenvname prooverlap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prooverlap:<tag>

   (see `prooverlap/tags`_ for valid values for ``<tag>``)


.. |downloads_prooverlap| image:: https://img.shields.io/conda/dn/bioconda/prooverlap.svg?style=flat
   :target: https://anaconda.org/bioconda/prooverlap
   :alt:   (downloads)
.. |docker_prooverlap| image:: https://quay.io/repository/biocontainers/prooverlap/status
   :target: https://quay.io/repository/biocontainers/prooverlap
.. _`prooverlap/tags`: https://quay.io/repository/biocontainers/prooverlap?tab=tags


.. raw:: html

    <script>
        var package = "prooverlap";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prooverlap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prooverlap/README.html