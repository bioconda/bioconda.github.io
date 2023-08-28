:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cfm'
.. highlight: bash

cfm
===

.. conda:recipe:: cfm
   :replaces_section_title:
   :noindex:

   Tools for applying Competitive Fragmentation Modeling \(CFM\) to spectrum prediction and metabolite identification tasks\, as well as a tools for fragment generation and peak annotation.

   :homepage: https://sourceforge.net/p/cfm-id/wiki/Home/
   :license: GPL-2
   :recipe: /`cfm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cfm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cfm/meta.yaml>`_

   


.. conda:package:: cfm

   |downloads_cfm| |docker_cfm|

   :versions:
      
      

      ``33-6``,  ``33-5``,  ``33-4``,  ``33-3``,  ``33-2``,  ``33-1``,  ``33-0``

      

   
   :depends boost-cpp: ``>=1.68.0,<1.68.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblbfgs: ``>=1.10,<1.11.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends lp_solve: ``5.5.*``
   :depends mpich: ``>=4.1.1,<5.0a0``
   :depends rdkit: ``2018.09.1``
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

      mamba install cfm

   and update with::

      mamba update cfm

  To create a new environment, run::

      mamba create --name myenvname cfm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cfm:<tag>

   (see `cfm/tags`_ for valid values for ``<tag>``)


.. |downloads_cfm| image:: https://img.shields.io/conda/dn/bioconda/cfm.svg?style=flat
   :target: https://anaconda.org/bioconda/cfm
   :alt:   (downloads)
.. |docker_cfm| image:: https://quay.io/repository/biocontainers/cfm/status
   :target: https://quay.io/repository/biocontainers/cfm
.. _`cfm/tags`: https://quay.io/repository/biocontainers/cfm?tab=tags


.. raw:: html

    <script>
        var package = "cfm";
        var versions = ["33","33","33","33","33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cfm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cfm/README.html