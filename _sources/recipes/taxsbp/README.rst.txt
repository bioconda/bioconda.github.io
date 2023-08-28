:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxsbp'
.. highlight: bash

taxsbp
======

.. conda:recipe:: taxsbp
   :replaces_section_title:
   :noindex:

   TaxSBP\: taxonomic structured bin packing

   :homepage: https://github.com/pirovc/taxsbp
   :license: MIT / MIT License
   :recipe: /`taxsbp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxsbp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxsbp/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa458`

   Implementation of the approximation algorithm for the 
   hierarchically structured bin packing problem adapted for the 
   NCBI Taxonomy database



.. conda:package:: taxsbp

   |downloads_taxsbp| |docker_taxsbp|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends binpacking: ``1.4.3``
   :depends pylca: ``1.0.0``
   :depends python: ``>=3.5``
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

      mamba install taxsbp

   and update with::

      mamba update taxsbp

  To create a new environment, run::

      mamba create --name myenvname taxsbp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taxsbp:<tag>

   (see `taxsbp/tags`_ for valid values for ``<tag>``)


.. |downloads_taxsbp| image:: https://img.shields.io/conda/dn/bioconda/taxsbp.svg?style=flat
   :target: https://anaconda.org/bioconda/taxsbp
   :alt:   (downloads)
.. |docker_taxsbp| image:: https://quay.io/repository/biocontainers/taxsbp/status
   :target: https://quay.io/repository/biocontainers/taxsbp
.. _`taxsbp/tags`: https://quay.io/repository/biocontainers/taxsbp?tab=tags


.. raw:: html

    <script>
        var package = "taxsbp";
        var versions = ["1.1.1","1.1.0","1.0.0","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxsbp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxsbp/README.html