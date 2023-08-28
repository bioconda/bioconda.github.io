:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genometools'
.. highlight: bash

genometools
===========

.. conda:recipe:: genometools
   :replaces_section_title:
   :noindex:

   GenomeTools\: Scripts and Classes For Working With Genomic Data.

   :homepage: https://github.com/flo-compbio/genometools
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`genometools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometools/meta.yaml>`_

   


.. conda:package:: genometools

   |downloads_genometools| |docker_genometools|

   :versions:
      
      

      ``1.2.1-0``

      

   
   :depends ftputil: 
   :depends numpy: 
   :depends python: ``2.7*``
   :depends requests: 
   :depends unicodecsv: 
   :depends xmltodict: 
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

      mamba install genometools

   and update with::

      mamba update genometools

  To create a new environment, run::

      mamba create --name myenvname genometools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genometools:<tag>

   (see `genometools/tags`_ for valid values for ``<tag>``)


.. |downloads_genometools| image:: https://img.shields.io/conda/dn/bioconda/genometools.svg?style=flat
   :target: https://anaconda.org/bioconda/genometools
   :alt:   (downloads)
.. |docker_genometools| image:: https://quay.io/repository/biocontainers/genometools/status
   :target: https://quay.io/repository/biocontainers/genometools
.. _`genometools/tags`: https://quay.io/repository/biocontainers/genometools?tab=tags


.. raw:: html

    <script>
        var package = "genometools";
        var versions = ["1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genometools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genometools/README.html