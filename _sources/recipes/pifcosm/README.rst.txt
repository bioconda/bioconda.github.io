:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pifcosm'
.. highlight: bash

pifcosm
=======

.. conda:recipe:: pifcosm
   :replaces_section_title:
   :noindex:

   PisCoSm is a pipeline to construct supermatrix trees from GenBank data

   :homepage: https://github.com/RybergGroup/PifCoSm
   :license: GPL-3.0-only
   :recipe: /`pifcosm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pifcosm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pifcosm/meta.yaml>`_
   :links: doi: :doi:`10.1073/pnas.1922539117`

   


.. conda:package:: pifcosm

   |downloads_pifcosm| |docker_pifcosm|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends cd-hit: 
   :depends fasttree: 
   :depends gblocks: 
   :depends hmmer: 
   :depends mafft: 
   :depends muscle: 
   :depends perl: 
   :depends perl-dbd-sqlite: 
   :depends perl-dbi: 
   :depends phylommand: 
   :depends raxml: 
   :depends roguenarok: 
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

      mamba install pifcosm

   and update with::

      mamba update pifcosm

  To create a new environment, run::

      mamba create --name myenvname pifcosm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pifcosm:<tag>

   (see `pifcosm/tags`_ for valid values for ``<tag>``)


.. |downloads_pifcosm| image:: https://img.shields.io/conda/dn/bioconda/pifcosm.svg?style=flat
   :target: https://anaconda.org/bioconda/pifcosm
   :alt:   (downloads)
.. |docker_pifcosm| image:: https://quay.io/repository/biocontainers/pifcosm/status
   :target: https://quay.io/repository/biocontainers/pifcosm
.. _`pifcosm/tags`: https://quay.io/repository/biocontainers/pifcosm?tab=tags


.. raw:: html

    <script>
        var package = "pifcosm";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pifcosm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pifcosm/README.html