:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poplddecay'
.. highlight: bash

poplddecay
==========

.. conda:recipe:: poplddecay
   :replaces_section_title:
   :noindex:

   PopLDdecay\: a fast and effective tool for linkage disequilibrium decay analysis based on variant call format \(VCF\) files.

   :homepage: https://github.com/BGI-shenzhen/PopLDdecay
   :documentation: https://github.com/BGI-shenzhen/PopLDdecay/blob/v3.43/README.md
   
   :license: MIT / MIT
   :recipe: /`poplddecay <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poplddecay>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poplddecay/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty875`, biotools: :biotools:`PopLDdecay`

   


.. conda:package:: poplddecay

   |downloads_poplddecay| |docker_poplddecay|

   :versions:
      
      

      ``3.43-1``,  ``3.43-0``

      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install poplddecay

   and update with::

      mamba update poplddecay

  To create a new environment, run::

      mamba create --name myenvname poplddecay

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/poplddecay:<tag>

   (see `poplddecay/tags`_ for valid values for ``<tag>``)


.. |downloads_poplddecay| image:: https://img.shields.io/conda/dn/bioconda/poplddecay.svg?style=flat
   :target: https://anaconda.org/bioconda/poplddecay
   :alt:   (downloads)
.. |docker_poplddecay| image:: https://quay.io/repository/biocontainers/poplddecay/status
   :target: https://quay.io/repository/biocontainers/poplddecay
.. _`poplddecay/tags`: https://quay.io/repository/biocontainers/poplddecay?tab=tags


.. raw:: html

    <script>
        var package = "poplddecay";
        var versions = ["3.43","3.43"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poplddecay/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poplddecay/README.html