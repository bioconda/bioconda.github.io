:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prymer'
.. highlight: bash

prymer
======

.. conda:recipe:: prymer
   :replaces_section_title:
   :noindex:

   Python Primer Design Library

   :homepage: https://pypi.org/project/prymer/
   :documentation: https://prymer.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/fulcrumgenomics/prymer
   :license: MIT / MIT
   :recipe: /`prymer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prymer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prymer/meta.yaml>`_

   


.. conda:package:: prymer

   |downloads_prymer| |docker_prymer|

   :versions:
      
      

      ``3.0.0-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends bwa-aln-interactive: ``>=0.7.18``
   :depends primer3: ``>=2.6.1``
   :depends pysam: ``>=0.22.0``
   :depends python: ``>=3.11``
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

      mamba install prymer

   and update with::

      mamba update prymer

  To create a new environment, run::

      mamba create --name myenvname prymer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prymer:<tag>

   (see `prymer/tags`_ for valid values for ``<tag>``)


.. |downloads_prymer| image:: https://img.shields.io/conda/dn/bioconda/prymer.svg?style=flat
   :target: https://anaconda.org/bioconda/prymer
   :alt:   (downloads)
.. |docker_prymer| image:: https://quay.io/repository/biocontainers/prymer/status
   :target: https://quay.io/repository/biocontainers/prymer
.. _`prymer/tags`: https://quay.io/repository/biocontainers/prymer?tab=tags


.. raw:: html

    <script>
        var package = "prymer";
        var versions = ["3.0.0","2.2.0","2.1.1","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prymer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prymer/README.html