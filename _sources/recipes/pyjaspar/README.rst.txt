:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyjaspar'
.. highlight: bash

pyjaspar
========

.. conda:recipe:: pyjaspar
   :replaces_section_title:
   :noindex:

   pyJASPAR\: a serverless interface to Biopython to access different versions of JASPAR database.

   :homepage: https://github.com/asntech/pyjaspar
   :documentation: https://pyjaspar.rtfd.io
   
   :license: MIT / MIT
   :recipe: /`pyjaspar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyjaspar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyjaspar/meta.yaml>`_

   A serverless interface to Biopython to query and access JASPAR motifs from different releases of JASPAR database using sqlite3.


.. conda:package:: pyjaspar

   |downloads_pyjaspar| |docker_pyjaspar|

   :versions:
      
      

      ``4.0.0-0``,  ``3.0.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.6.0-0``,  ``1.5.5-0``,  ``1.5.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends python: ``>=3.8``
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

      mamba install pyjaspar

   and update with::

      mamba update pyjaspar

  To create a new environment, run::

      mamba create --name myenvname pyjaspar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyjaspar:<tag>

   (see `pyjaspar/tags`_ for valid values for ``<tag>``)


.. |downloads_pyjaspar| image:: https://img.shields.io/conda/dn/bioconda/pyjaspar.svg?style=flat
   :target: https://anaconda.org/bioconda/pyjaspar
   :alt:   (downloads)
.. |docker_pyjaspar| image:: https://quay.io/repository/biocontainers/pyjaspar/status
   :target: https://quay.io/repository/biocontainers/pyjaspar
.. _`pyjaspar/tags`: https://quay.io/repository/biocontainers/pyjaspar?tab=tags


.. raw:: html

    <script>
        var package = "pyjaspar";
        var versions = ["4.0.0","3.0.0","2.1.1","2.1.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyjaspar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyjaspar/README.html