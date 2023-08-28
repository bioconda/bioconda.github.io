:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastml'
.. highlight: bash

fastml
======

.. conda:recipe:: fastml
   :replaces_section_title:
   :noindex:

   FastML is a bioinformatics tool for the reconstruction of ancestral sequences based on the phylogenetic relations between homologous sequences

   :homepage: http://fastml.tau.ac.il/
   :license: GNU GPLv2.0
   :recipe: /`fastml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastml/meta.yaml>`_

   


.. conda:package:: fastml

   |downloads_fastml| |docker_fastml|

   :versions:
      
      

      ``3.11-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends perl: 
   :depends perl-bioperl: 
   :depends raxml: 
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

      mamba install fastml

   and update with::

      mamba update fastml

  To create a new environment, run::

      mamba create --name myenvname fastml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastml:<tag>

   (see `fastml/tags`_ for valid values for ``<tag>``)


.. |downloads_fastml| image:: https://img.shields.io/conda/dn/bioconda/fastml.svg?style=flat
   :target: https://anaconda.org/bioconda/fastml
   :alt:   (downloads)
.. |docker_fastml| image:: https://quay.io/repository/biocontainers/fastml/status
   :target: https://quay.io/repository/biocontainers/fastml
.. _`fastml/tags`: https://quay.io/repository/biocontainers/fastml?tab=tags


.. raw:: html

    <script>
        var package = "fastml";
        var versions = ["3.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastml/README.html