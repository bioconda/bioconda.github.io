:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hap-ibd'
.. highlight: bash

hap-ibd
=======

.. conda:recipe:: hap-ibd
   :replaces_section_title:
   :noindex:

   Hap\-ibd Detects identity\-by\-descent \(IBD\) segments and homozygosity\-by\-descent \(HBD\) segments in phased genotype data.

   :homepage: https://github.com/browning-lab/hap-ibd
   :documentation: https://github.com/browning-lab/hap-ibd/blob/master/README.md
   
   :license: Apache-2.0
   :recipe: /`hap-ibd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hap-ibd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hap-ibd/meta.yaml>`_
   :links: biotools: :biotools:`hap-ibd`, doi: :doi:`10.1016/j.ajhg.2020.02.010`

   


.. conda:package:: hap-ibd

   |downloads_hap-ibd| |docker_hap-ibd|

   :versions:
      
      

      ``1.0.rev20May22.818-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
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

      mamba install hap-ibd

   and update with::

      mamba update hap-ibd

  To create a new environment, run::

      mamba create --name myenvname hap-ibd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hap-ibd:<tag>

   (see `hap-ibd/tags`_ for valid values for ``<tag>``)


.. |downloads_hap-ibd| image:: https://img.shields.io/conda/dn/bioconda/hap-ibd.svg?style=flat
   :target: https://anaconda.org/bioconda/hap-ibd
   :alt:   (downloads)
.. |docker_hap-ibd| image:: https://quay.io/repository/biocontainers/hap-ibd/status
   :target: https://quay.io/repository/biocontainers/hap-ibd
.. _`hap-ibd/tags`: https://quay.io/repository/biocontainers/hap-ibd?tab=tags


.. raw:: html

    <script>
        var package = "hap-ibd";
        var versions = ["1.0.rev20May22.818"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hap-ibd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hap-ibd/README.html