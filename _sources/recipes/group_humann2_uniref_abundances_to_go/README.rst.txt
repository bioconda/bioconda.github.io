:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'group_humann2_uniref_abundances_to_go'
.. highlight: bash

group_humann2_uniref_abundances_to_go
=====================================

.. conda:recipe:: group_humann2_uniref_abundances_to_go
   :replaces_section_title:
   :noindex:

   Group abundances of UniRef50 gene families obtained with HUMAnN2 to Gene Ontology \(GO\) slim terms with relative abundances

   :homepage: https://github.com/ASaiM/group_humann2_uniref_abundances_to_GO
   :license: Apache 2
   :recipe: /`group_humann2_uniref_abundances_to_go <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/group_humann2_uniref_abundances_to_go>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/group_humann2_uniref_abundances_to_go/meta.yaml>`_

   


.. conda:package:: group_humann2_uniref_abundances_to_go

   |downloads_group_humann2_uniref_abundances_to_go| |docker_group_humann2_uniref_abundances_to_go|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends goatools: 
   :depends humann2: 
   :depends python: ``<3``
   :depends wget: 
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

      mamba install group_humann2_uniref_abundances_to_go

   and update with::

      mamba update group_humann2_uniref_abundances_to_go

  To create a new environment, run::

      mamba create --name myenvname group_humann2_uniref_abundances_to_go

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/group_humann2_uniref_abundances_to_go:<tag>

   (see `group_humann2_uniref_abundances_to_go/tags`_ for valid values for ``<tag>``)


.. |downloads_group_humann2_uniref_abundances_to_go| image:: https://img.shields.io/conda/dn/bioconda/group_humann2_uniref_abundances_to_go.svg?style=flat
   :target: https://anaconda.org/bioconda/group_humann2_uniref_abundances_to_go
   :alt:   (downloads)
.. |docker_group_humann2_uniref_abundances_to_go| image:: https://quay.io/repository/biocontainers/group_humann2_uniref_abundances_to_go/status
   :target: https://quay.io/repository/biocontainers/group_humann2_uniref_abundances_to_go
.. _`group_humann2_uniref_abundances_to_go/tags`: https://quay.io/repository/biocontainers/group_humann2_uniref_abundances_to_go?tab=tags


.. raw:: html

    <script>
        var package = "group_humann2_uniref_abundances_to_go";
        var versions = ["1.3.0","1.2.3","1.2.1","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/group_humann2_uniref_abundances_to_go/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/group_humann2_uniref_abundances_to_go/README.html