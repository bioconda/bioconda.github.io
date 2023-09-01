:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgcod'
.. highlight: bash

mgcod
=====

.. conda:recipe:: mgcod
   :replaces_section_title:
   :noindex:

   Recognition of genetic codes \(incl. multiple genetic codes in phage genomes\) and genetic\-code\-informed annotation of coding regions in prokaryotic sequences

   :homepage: https://github.com/gatech-genemark/Mgcod
   :license: GPL-3
   :recipe: /`mgcod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgcod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgcod/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1101/2022.06.29.495998`

   


.. conda:package:: mgcod

   |downloads_mgcod| |docker_mgcod|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends biopython: ``1.78.*``
   :depends matplotlib-base: ``3.2.2.*``
   :depends multiprocessing-logging: ``>=0.3.1``
   :depends numpy: ``1.18.1.*``
   :depends pandas: ``1.2.4.*``
   :depends python: ``3.7.3.*``
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

      mamba install mgcod

   and update with::

      mamba update mgcod

  To create a new environment, run::

      mamba create --name myenvname mgcod

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mgcod:<tag>

   (see `mgcod/tags`_ for valid values for ``<tag>``)


.. |downloads_mgcod| image:: https://img.shields.io/conda/dn/bioconda/mgcod.svg?style=flat
   :target: https://anaconda.org/bioconda/mgcod
   :alt:   (downloads)
.. |docker_mgcod| image:: https://quay.io/repository/biocontainers/mgcod/status
   :target: https://quay.io/repository/biocontainers/mgcod
.. _`mgcod/tags`: https://quay.io/repository/biocontainers/mgcod?tab=tags


.. raw:: html

    <script>
        var package = "mgcod";
        var versions = ["1.0.1","1.0.0"];
    </script>





Notes
-----
- MetaGeneMark is distributed with a different license. Please\, agree with license conditions and download corresponding license key file from http\:\/\/exon.gatech.edu\/GeneMark\/license\_download.cgi. The GeneMark key should be located in \$HOME\/.gm\_key.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgcod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgcod/README.html