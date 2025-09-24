:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'novoloci'
.. highlight: bash

novoloci
========

.. conda:recipe:: novoloci
   :replaces_section_title:
   :noindex:

   Haplotype\-aware assembler for complex regions and small genomes \(ONT\/HiFi\).

   :homepage: https://github.com/ndierckx/NOVOLoci
   :license: Other
   :recipe: /`novoloci <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novoloci>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novoloci/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.08.08.669243`

   


.. conda:package:: novoloci

   |downloads_novoloci| |docker_novoloci|

   :versions:
      
      

      ``0.4-0``,  ``0.3-0``

      

   
   :depends blast: 
   :depends mafft: 
   :depends perl: 
   :depends perl-mce: 
   :depends perl-parallel-forkmanager: 
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

      mamba install novoloci

   and update with::

      mamba update novoloci

  To create a new environment, run::

      mamba create --name myenvname novoloci

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/novoloci:<tag>

   (see `novoloci/tags`_ for valid values for ``<tag>``)


.. |downloads_novoloci| image:: https://img.shields.io/conda/dn/bioconda/novoloci.svg?style=flat
   :target: https://anaconda.org/bioconda/novoloci
   :alt:   (downloads)
.. |docker_novoloci| image:: https://quay.io/repository/biocontainers/novoloci/status
   :target: https://quay.io/repository/biocontainers/novoloci
.. _`novoloci/tags`: https://quay.io/repository/biocontainers/novoloci?tab=tags


.. raw:: html

    <script>
        var package = "novoloci";
        var versions = ["0.4","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/novoloci/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/novoloci/README.html