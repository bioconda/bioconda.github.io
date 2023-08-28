:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agfusion'
.. highlight: bash

agfusion
========

.. conda:recipe:: agfusion
   :replaces_section_title:
   :noindex:

   Python package to annotate and visualize gene fusions.

   :homepage: https://github.com/murphycj/AGFusion
   :license: MIT / MIT
   :recipe: /`agfusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agfusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agfusion/meta.yaml>`_
   :links: doi: :doi:`10.1101/080903`

   


.. conda:package:: agfusion

   |downloads_agfusion| |docker_agfusion|

   :versions:
      
      

      ``1.252-1``,  ``1.252-0``,  ``1.251-0``,  ``1.231-0``,  ``1.23-0``,  ``1.2-2``,  ``1.2-0``,  ``1.0-0``

      

   
   :depends biopython: ``>=1.67``
   :depends future: ``>=0.16.0``
   :depends matplotlib: ``>=1.5.0``
   :depends nose2: ``>=0.6.5``
   :depends pandas: ``>=0.18.1``
   :depends pyensembl: ``>=1.1.0``
   :depends python: 
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

      mamba install agfusion

   and update with::

      mamba update agfusion

  To create a new environment, run::

      mamba create --name myenvname agfusion

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/agfusion:<tag>

   (see `agfusion/tags`_ for valid values for ``<tag>``)


.. |downloads_agfusion| image:: https://img.shields.io/conda/dn/bioconda/agfusion.svg?style=flat
   :target: https://anaconda.org/bioconda/agfusion
   :alt:   (downloads)
.. |docker_agfusion| image:: https://quay.io/repository/biocontainers/agfusion/status
   :target: https://quay.io/repository/biocontainers/agfusion
.. _`agfusion/tags`: https://quay.io/repository/biocontainers/agfusion?tab=tags


.. raw:: html

    <script>
        var package = "agfusion";
        var versions = ["1.252","1.252","1.251","1.231","1.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agfusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agfusion/README.html