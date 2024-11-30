:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2circos'
.. highlight: bash

vcf2circos
==========

.. conda:recipe:: vcf2circos
   :replaces_section_title:
   :noindex:

   A python package based on Plotly to help generate Circos plots from a VCF file or a JSON configuration file.

   :homepage: https://github.com/bioinfo-chru-strasbourg/vcf2circos
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`vcf2circos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2circos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2circos/meta.yaml>`_

   


.. conda:package:: vcf2circos

   |downloads_vcf2circos| |docker_vcf2circos|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.1-0``,  ``1.1-0``

      

   
   :depends colorlover: 
   :depends colour: 
   :depends dash: ``0.39.0``
   :depends dash-daq: ``0.1.0``
   :depends dash_colorscales: 
   :depends ipython: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends pyfiglet: 
   :depends python: ``>=3.8``
   :depends python-kaleido: 
   :depends pyvcf3: 
   :depends scipy: 
   :depends tqdm: 
   :depends webcolors: ``<=1.13``
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

      mamba install vcf2circos

   and update with::

      mamba update vcf2circos

  To create a new environment, run::

      mamba create --name myenvname vcf2circos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcf2circos:<tag>

   (see `vcf2circos/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2circos| image:: https://img.shields.io/conda/dn/bioconda/vcf2circos.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2circos
   :alt:   (downloads)
.. |docker_vcf2circos| image:: https://quay.io/repository/biocontainers/vcf2circos/status
   :target: https://quay.io/repository/biocontainers/vcf2circos
.. _`vcf2circos/tags`: https://quay.io/repository/biocontainers/vcf2circos?tab=tags


.. raw:: html

    <script>
        var package = "vcf2circos";
        var versions = ["1.2.0","1.1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2circos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2circos/README.html