:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pout2mzid'
.. highlight: bash

pout2mzid
=========

.. conda:recipe:: pout2mzid
   :replaces_section_title:
   :noindex:

   Adds percolator statistics to mzIdentML files that were used as input to percolator

   :homepage: https://github.com/percolator/pout2mzid
   :license: Apache License, Version 2.0
   :recipe: /`pout2mzid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pout2mzid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pout2mzid/meta.yaml>`_

   


.. conda:package:: pout2mzid

   |downloads_pout2mzid| |docker_pout2mzid|

   :versions:
      
      

      ``0.3.03-2``

      

   
   :depends boost: ``==1.62``
   :depends libgcc: 
   :depends xerces-c: 
   :depends xsd: 
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

      mamba install pout2mzid

   and update with::

      mamba update pout2mzid

  To create a new environment, run::

      mamba create --name myenvname pout2mzid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pout2mzid:<tag>

   (see `pout2mzid/tags`_ for valid values for ``<tag>``)


.. |downloads_pout2mzid| image:: https://img.shields.io/conda/dn/bioconda/pout2mzid.svg?style=flat
   :target: https://anaconda.org/bioconda/pout2mzid
   :alt:   (downloads)
.. |docker_pout2mzid| image:: https://quay.io/repository/biocontainers/pout2mzid/status
   :target: https://quay.io/repository/biocontainers/pout2mzid
.. _`pout2mzid/tags`: https://quay.io/repository/biocontainers/pout2mzid?tab=tags


.. raw:: html

    <script>
        var package = "pout2mzid";
        var versions = ["0.3.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pout2mzid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pout2mzid/README.html