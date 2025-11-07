:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dsb'
.. highlight: bash

r-dsb
=====

.. conda:recipe:: r-dsb
   :replaces_section_title:
   :noindex:

   Normalizing and denoising protein expression data from droplet\-based single cell profiling

   :homepage: https://github.com/niaid/dsb
   :license: CC / CC0 | file LICENSE
   :recipe: /`r-dsb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dsb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dsb/meta.yaml>`_

   This lightweight R package provides a method for normalizing and denoising protein expression data from droplet based single cell experiments. Raw protein Unique Molecular Index \(UMI\) counts from sequencing DNA\-conjugated antibody derived tags \(ADT\) in droplets \(e.g. \'CITE\-seq\'\) have substantial measurement noise. Our experiments and computational modeling revealed two major components of this noise\: 1\) protein\-specific noise originating from ambient\, unbound antibody encapsulated in droplets that can be accurately inferred via the expected protein counts detected in empty droplets\, and 2\) droplet\/cell\-specific noise revealed via the shared variance component associated with isotype antibody controls and background protein counts in each cell. This package normalizes and removes both of these sources of noise from raw protein data derived from methods such as \'CITE\-seq\'\, \'REAP\-seq\'\, \'ASAP\-seq\'\, \'TEA\-seq\'\, \'proteogenomic\' data from the Mission Bio platform\, etc. See the vignette for tutorials on how to integrate dsb with \'Seurat\' and \'Bioconductor\' and how to use dsb in \'Python\'. Please see our paper Mulè M.P.\, Martins A.J.\, and Tsang J.S. Nature Communications 2022 \<https\:\/\/www.nature.com\/articles\/s41467\-022\-29356\-8\> for more details on the method.


.. conda:package:: r-dsb

   |downloads_r-dsb| |docker_r-dsb|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-magrittr: 
   :depends r-mclust: 
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

      mamba install r-dsb

   and update with::

      mamba update r-dsb

  To create a new environment, run::

      mamba create --name myenvname r-dsb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-dsb:<tag>

   (see `r-dsb/tags`_ for valid values for ``<tag>``)


.. |downloads_r-dsb| image:: https://img.shields.io/conda/dn/bioconda/r-dsb.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dsb
   :alt:   (downloads)
.. |docker_r-dsb| image:: https://quay.io/repository/biocontainers/r-dsb/status
   :target: https://quay.io/repository/biocontainers/r-dsb
.. _`r-dsb/tags`: https://quay.io/repository/biocontainers/r-dsb?tab=tags


.. raw:: html

    <script>
        var package = "r-dsb";
        var versions = ["2.0.1","2.0.0","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dsb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dsb/README.html