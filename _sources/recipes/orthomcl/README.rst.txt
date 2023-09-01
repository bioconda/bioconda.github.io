:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthomcl'
.. highlight: bash

orthomcl
========

.. conda:recipe:: orthomcl
   :replaces_section_title:
   :noindex:

   Ortholog groups of protein sequences

   :homepage: http://orthomcl.org/orthomcl/
   :license: EuPathDB Bioinformatics Resource Center
   :recipe: /`orthomcl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthomcl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthomcl/meta.yaml>`_

   


.. conda:package:: orthomcl

   |downloads_orthomcl| |docker_orthomcl|

   :versions:
      
      

      ``2.0.9-5``,  ``2.0.9-4``,  ``2.0.9-3``,  ``2.0.9-2``,  ``2.0.9-1``,  ``2.0.9-0``

      

   
   :depends blast: 
   :depends mcl: 
   :depends mysqlclient: 
   :depends perl: 
   :depends perl-dbd-mysql: 
   :depends perl-dbi: 
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

      mamba install orthomcl

   and update with::

      mamba update orthomcl

  To create a new environment, run::

      mamba create --name myenvname orthomcl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orthomcl:<tag>

   (see `orthomcl/tags`_ for valid values for ``<tag>``)


.. |downloads_orthomcl| image:: https://img.shields.io/conda/dn/bioconda/orthomcl.svg?style=flat
   :target: https://anaconda.org/bioconda/orthomcl
   :alt:   (downloads)
.. |docker_orthomcl| image:: https://quay.io/repository/biocontainers/orthomcl/status
   :target: https://quay.io/repository/biocontainers/orthomcl
.. _`orthomcl/tags`: https://quay.io/repository/biocontainers/orthomcl?tab=tags


.. raw:: html

    <script>
        var package = "orthomcl";
        var versions = ["2.0.9","2.0.9","2.0.9","2.0.9","2.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthomcl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthomcl/README.html