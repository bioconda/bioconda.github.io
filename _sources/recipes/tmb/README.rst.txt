:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tmb'
.. highlight: bash

tmb
===

.. conda:recipe:: tmb
   :replaces_section_title:
   :noindex:

   This tool was designed to calculate a Tumor Mutational Burden \(TMB\) score from a VCF file.

   :homepage: https://github.com/bioinfo-pf-curie/TMB
   :license: CeCILL FREE SOFTWARE LICENSE AGREEMENT
   :recipe: /`tmb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmb/meta.yaml>`_

   


.. conda:package:: tmb

   |downloads_tmb| |docker_tmb|

   :versions:
      
      

      ``1.3.0-0``

      

   
   :depends cyvcf2: 
   :depends mosdepth: 
   :depends pybedtools: 
   :depends python: 
   :depends pyyaml: 
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

      mamba install tmb

   and update with::

      mamba update tmb

  To create a new environment, run::

      mamba create --name myenvname tmb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tmb:<tag>

   (see `tmb/tags`_ for valid values for ``<tag>``)


.. |downloads_tmb| image:: https://img.shields.io/conda/dn/bioconda/tmb.svg?style=flat
   :target: https://anaconda.org/bioconda/tmb
   :alt:   (downloads)
.. |docker_tmb| image:: https://quay.io/repository/biocontainers/tmb/status
   :target: https://quay.io/repository/biocontainers/tmb
.. _`tmb/tags`: https://quay.io/repository/biocontainers/tmb?tab=tags


.. raw:: html

    <script>
        var package = "tmb";
        var versions = ["1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tmb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tmb/README.html