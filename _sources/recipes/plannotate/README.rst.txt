:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plannotate'
.. highlight: bash

plannotate
==========

.. conda:recipe:: plannotate
   :replaces_section_title:
   :noindex:

   Webserver and command line tool for annotating engineered plasmids

   :homepage: https://github.com/mmcguffi/pLannotate
   :license: GPL-3.0-or-later
   :recipe: /`plannotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plannotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plannotate/meta.yaml>`_

   


.. conda:package:: plannotate

   |downloads_plannotate| |docker_plannotate|

   :versions:
      
      

      ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends altair: ``4.2.*``
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.10.1``
   :depends bokeh: ``2.4.1.*``
   :depends click: 
   :depends curl: 
   :depends diamond: ``>=2.0.13``
   :depends numpy: 
   :depends pandas: ``>=1.3.5,<2.0.0``
   :depends python: ``>=3.9``
   :depends ripgrep: ``>=13.0.0``
   :depends streamlit: ``1.8.1.*``
   :depends tabulate: ``>=0.8.9``
   :depends trnascan-se: ``>=2.0.7``
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

      mamba install plannotate

   and update with::

      mamba update plannotate

  To create a new environment, run::

      mamba create --name myenvname plannotate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plannotate:<tag>

   (see `plannotate/tags`_ for valid values for ``<tag>``)


.. |downloads_plannotate| image:: https://img.shields.io/conda/dn/bioconda/plannotate.svg?style=flat
   :target: https://anaconda.org/bioconda/plannotate
   :alt:   (downloads)
.. |docker_plannotate| image:: https://quay.io/repository/biocontainers/plannotate/status
   :target: https://quay.io/repository/biocontainers/plannotate
.. _`plannotate/tags`: https://quay.io/repository/biocontainers/plannotate?tab=tags


.. raw:: html

    <script>
        var package = "plannotate";
        var versions = ["1.2.2","1.2.1","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plannotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plannotate/README.html