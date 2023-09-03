:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgr-tk'
.. highlight: bash

pgr-tk
======

.. conda:recipe:: pgr-tk
   :replaces_section_title:
   :noindex:

   A PanGenomic Research Took Kit. This repository is a project to provide Python and Rust libraries to facilitate pangenomics analysis.

   :homepage: https://github.com/GeneDx/pgr-tk
   :license: CC / CC BY-NC-SA 4.0
   :recipe: /`pgr-tk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgr-tk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgr-tk/meta.yaml>`_

   


.. conda:package:: pgr-tk

   |downloads_pgr-tk| |docker_pgr-tk|

   :versions:
      
      

      ``0.5.1-0``,  ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.4-1``,  ``0.3.4-0``

      

   
   :depends graphviz: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends minimap2: 
   :depends numpy: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends samtools: 
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

      mamba install pgr-tk

   and update with::

      mamba update pgr-tk

  To create a new environment, run::

      mamba create --name myenvname pgr-tk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pgr-tk:<tag>

   (see `pgr-tk/tags`_ for valid values for ``<tag>``)


.. |downloads_pgr-tk| image:: https://img.shields.io/conda/dn/bioconda/pgr-tk.svg?style=flat
   :target: https://anaconda.org/bioconda/pgr-tk
   :alt:   (downloads)
.. |docker_pgr-tk| image:: https://quay.io/repository/biocontainers/pgr-tk/status
   :target: https://quay.io/repository/biocontainers/pgr-tk
.. _`pgr-tk/tags`: https://quay.io/repository/biocontainers/pgr-tk?tab=tags


.. raw:: html

    <script>
        var package = "pgr-tk";
        var versions = ["0.5.1","0.3.6","0.3.6","0.3.6","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgr-tk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgr-tk/README.html