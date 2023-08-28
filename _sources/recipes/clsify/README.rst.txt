:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clsify'
.. highlight: bash

clsify
======

.. conda:recipe:: clsify
   :replaces_section_title:
   :noindex:

   Haplotyping of C. Liberibacter solanacearum from Sanger data.

   :homepage: https://github.com/holtgrewe/clsify
   :license: MIT / MIT
   :recipe: /`clsify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clsify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clsify/meta.yaml>`_

   


.. conda:package:: clsify

   |downloads_clsify| |docker_clsify|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends attrs: 
   :depends bcftools: 
   :depends bioconvert: 
   :depends blast: 
   :depends cattrs: 
   :depends dash: 
   :depends dash-bootstrap-components: 
   :depends dash-core-components: 
   :depends dash-html-components: 
   :depends dash-renderer: 
   :depends dash-table: 
   :depends flask: 
   :depends logzero: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends requests: 
   :depends vcfpy: 
   :depends xlsxwriter: 
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

      mamba install clsify

   and update with::

      mamba update clsify

  To create a new environment, run::

      mamba create --name myenvname clsify

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clsify:<tag>

   (see `clsify/tags`_ for valid values for ``<tag>``)


.. |downloads_clsify| image:: https://img.shields.io/conda/dn/bioconda/clsify.svg?style=flat
   :target: https://anaconda.org/bioconda/clsify
   :alt:   (downloads)
.. |docker_clsify| image:: https://quay.io/repository/biocontainers/clsify/status
   :target: https://quay.io/repository/biocontainers/clsify
.. _`clsify/tags`: https://quay.io/repository/biocontainers/clsify?tab=tags


.. raw:: html

    <script>
        var package = "clsify";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clsify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clsify/README.html