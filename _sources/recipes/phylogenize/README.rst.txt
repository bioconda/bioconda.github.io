:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylogenize'
.. highlight: bash

phylogenize
===========

.. conda:recipe:: phylogenize
   :replaces_section_title:
   :noindex:

   Phylogenize is a tool that allows users to link microbial genes to environments\, accounting for phylogeny.

   :homepage: https://github.com/pbradleylab/phylogenize
   :documentation: http://phylogenize.org
   
   :license: MIT / MIT
   :recipe: /`phylogenize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylogenize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylogenize/meta.yaml>`_

   


.. conda:package:: phylogenize

   |downloads_phylogenize| |docker_phylogenize|

   :versions:
      
      

      ``2.0a0-0``,  ``0.91-1``,  ``0.91-0``

      

   
   :depends bioconductor-ancombc: ``1.4.0.*``
   :depends bioconductor-biomformat: ``1.22.0.*``
   :depends bioconductor-clusterprofiler: ``4.2.0.*``
   :depends bioconductor-ggtree: ``3.2.0.*``
   :depends bioconductor-maaslin2: ``1.8.0.*``
   :depends bioconductor-qvalue: ``2.26.0.*``
   :depends perl: ``5.32.1.*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends r-ashr: ``2.2_54.*``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-castor: ``1.7.10.*``
   :depends r-extradistr: ``1.9.1.*``
   :depends r-functional: ``0.6.*``
   :depends r-furrr: ``0.3.1.*``
   :depends r-ggiraph: ``0.8.7.*``
   :depends r-gtools: ``3.9.4.*``
   :depends r-kableextra: ``1.3.4.*``
   :depends r-pbapply: ``1.7_0.*``
   :depends r-phangorn: ``2.11.1.*``
   :depends r-phylolm: ``2.6.2.*``
   :depends r-phytools: ``1.5_1.*``
   :depends r-plotly: ``4.10.2.*``
   :depends r-pryr: ``0.1.6.*``
   :depends r-ragg: ``1.2.5.*``
   :depends r-seqinr: ``4.2_30.*``
   :depends r-settings: ``0.2.7.*``
   :depends r-svglite: ``2.1.1.*``
   :depends r-testthat: ``3.1.8.*``
   :depends r-tidymodels: ``1.1.0.*``
   :depends r-tidyverse: ``2.0.0.*``
   :depends vsearch: ``2.30.0.*``
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

      mamba install phylogenize

   and update with::

      mamba update phylogenize

  To create a new environment, run::

      mamba create --name myenvname phylogenize

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylogenize:<tag>

   (see `phylogenize/tags`_ for valid values for ``<tag>``)


.. |downloads_phylogenize| image:: https://img.shields.io/conda/dn/bioconda/phylogenize.svg?style=flat
   :target: https://anaconda.org/bioconda/phylogenize
   :alt:   (downloads)
.. |docker_phylogenize| image:: https://quay.io/repository/biocontainers/phylogenize/status
   :target: https://quay.io/repository/biocontainers/phylogenize
.. _`phylogenize/tags`: https://quay.io/repository/biocontainers/phylogenize?tab=tags


.. raw:: html

    <script>
        var package = "phylogenize";
        var versions = ["2.0a0","0.91","0.91"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylogenize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylogenize/README.html