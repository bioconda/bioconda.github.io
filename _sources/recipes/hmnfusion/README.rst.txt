:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmnfusion'
.. highlight: bash

hmnfusion
=========

.. conda:recipe:: hmnfusion
   :replaces_section_title:
   :noindex:

   Fusion analysis from DNA genomics.

   :homepage: https://github.com/guillaume-gricourt/HmnFusion
   :license: MIT / MIT
   :recipe: /`hmnfusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnfusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnfusion/meta.yaml>`_

   


.. conda:package:: hmnfusion

   |downloads_hmnfusion| |docker_hmnfusion|

   :versions:
      
      

      ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.12-0``,  ``1.2.6-0``,  ``1.2.3-0``

      

   
   :depends beautifulsoup4: 
   :depends et-xmlfile: 
   :depends lxml: 
   :depends matplotlib-base: 
   :depends natsort: 
   :depends networkx: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pysam: 
   :depends pytest: 
   :depends python: 
   :depends pyyaml: 
   :depends requests: 
   :depends snakemake: 
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

      mamba install hmnfusion

   and update with::

      mamba update hmnfusion

  To create a new environment, run::

      mamba create --name myenvname hmnfusion

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmnfusion:<tag>

   (see `hmnfusion/tags`_ for valid values for ``<tag>``)


.. |downloads_hmnfusion| image:: https://img.shields.io/conda/dn/bioconda/hmnfusion.svg?style=flat
   :target: https://anaconda.org/bioconda/hmnfusion
   :alt:   (downloads)
.. |docker_hmnfusion| image:: https://quay.io/repository/biocontainers/hmnfusion/status
   :target: https://quay.io/repository/biocontainers/hmnfusion
.. _`hmnfusion/tags`: https://quay.io/repository/biocontainers/hmnfusion?tab=tags


.. raw:: html

    <script>
        var package = "hmnfusion";
        var versions = ["1.5.1","1.5.0","1.4.0","1.3.1","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmnfusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmnfusion/README.html