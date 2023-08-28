:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sccaller'
.. highlight: bash

sccaller
========

.. conda:recipe:: sccaller
   :replaces_section_title:
   :noindex:

   Dong X et al. Accurate identification of single\-nucleotide variants in whole\-genome\-amplified single cells. Nat Methods. 2017 May\;14\(5\)\:491\-493. doi\: 10.1038\/nmeth.4227

   :homepage: https://github.com/biosinodx/SCcaller
   :license: GPL-3
   :recipe: /`sccaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sccaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sccaller/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.4227`

   


.. conda:package:: sccaller

   |downloads_sccaller| |docker_sccaller|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``,  ``1.21-0``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends numpy: 
   :depends pysam: ``>=0.15.1``
   :depends python: ``<3``
   :depends samtools: ``>=1.9``
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

      mamba install sccaller

   and update with::

      mamba update sccaller

  To create a new environment, run::

      mamba create --name myenvname sccaller

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sccaller:<tag>

   (see `sccaller/tags`_ for valid values for ``<tag>``)


.. |downloads_sccaller| image:: https://img.shields.io/conda/dn/bioconda/sccaller.svg?style=flat
   :target: https://anaconda.org/bioconda/sccaller
   :alt:   (downloads)
.. |docker_sccaller| image:: https://quay.io/repository/biocontainers/sccaller/status
   :target: https://quay.io/repository/biocontainers/sccaller
.. _`sccaller/tags`: https://quay.io/repository/biocontainers/sccaller?tab=tags


.. raw:: html

    <script>
        var package = "sccaller";
        var versions = ["2.0.0","2.0.0","1.21","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sccaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sccaller/README.html