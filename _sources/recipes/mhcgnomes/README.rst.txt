:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhcgnomes'
.. highlight: bash

mhcgnomes
=========

.. conda:recipe:: mhcgnomes
   :replaces_section_title:
   :noindex:

   Python library for parsing MHC nomenclature in the wild

   :homepage: https://github.com/til-unc/mhcgnomes
   :license: APACHE / Apache Software
   :recipe: /`mhcgnomes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcgnomes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcgnomes/meta.yaml>`_

   


.. conda:package:: mhcgnomes

   |downloads_mhcgnomes| |docker_mhcgnomes|

   :versions:
      
      

      ``1.8.4-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends pyyaml: ``5.4``
   :depends serializable: 
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

      mamba install mhcgnomes

   and update with::

      mamba update mhcgnomes

  To create a new environment, run::

      mamba create --name myenvname mhcgnomes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mhcgnomes:<tag>

   (see `mhcgnomes/tags`_ for valid values for ``<tag>``)


.. |downloads_mhcgnomes| image:: https://img.shields.io/conda/dn/bioconda/mhcgnomes.svg?style=flat
   :target: https://anaconda.org/bioconda/mhcgnomes
   :alt:   (downloads)
.. |docker_mhcgnomes| image:: https://quay.io/repository/biocontainers/mhcgnomes/status
   :target: https://quay.io/repository/biocontainers/mhcgnomes
.. _`mhcgnomes/tags`: https://quay.io/repository/biocontainers/mhcgnomes?tab=tags


.. raw:: html

    <script>
        var package = "mhcgnomes";
        var versions = ["1.8.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhcgnomes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhcgnomes/README.html